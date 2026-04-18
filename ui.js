// js/ui.js — renderização e manipulação do DOM
import { RUNAS, RUNAS_BRUTAS } from "./runas.js";
import { calcChance, calcCustoMat, calcCustoEsperado, melhorBruta } from "./calc.js";

// ─── Estado global da aplicação ───────────────────────────────────────────────
const state = {
  runaIdx: 0,
  brutaIdx: -1,
  // precosMat[runaIdx][matIdx] = valor digitado
  precosMat: Array.from({ length: RUNAS.length }, () => []),
};

function attrs() {
  return {
    des:  Number(document.getElementById("des").value)  || 0,
    sor:  Number(document.getElementById("sor").value)  || 0,
    nvCl: Number(document.getElementById("nvcl").value) || 1,
  };
}

function fmt(n) {
  return n.toLocaleString("pt-BR");
}

// ─── Tabs de seleção de runa ───────────────────────────────────────────────────
export function renderRunaTabs() {
  const container = document.getElementById("runa-tabs");
  container.innerHTML = "";
  RUNAS.forEach((r, i) => {
    const btn = document.createElement("button");
    btn.className = "tab-btn" + (i === state.runaIdx ? " active" : "");
    btn.textContent = r.nome;
    btn.setAttribute("aria-pressed", i === state.runaIdx);
    btn.addEventListener("click", () => {
      state.runaIdx = i;
      state.brutaIdx = -1;
      document.querySelectorAll(".tab-btn").forEach((el, j) => {
        el.classList.toggle("active", j === i);
        el.setAttribute("aria-pressed", j === i);
      });
      renderMatFields();
      renderBrutaCards();
      renderResults();
    });
    container.appendChild(btn);
  });
}

// ─── Campos de materiais ───────────────────────────────────────────────────────
export function renderMatFields() {
  const container = document.getElementById("mat-fields");
  container.innerHTML = "";
  const runa = RUNAS[state.runaIdx];

  runa.mat.forEach((mat, i) => {
    const saved = state.precosMat[state.runaIdx][i] ?? "";
    const card = document.createElement("div");
    card.className = "mat-card";

    const badge = mat.obrigatorio
      ? `<span class="badge badge-req">obrigatório</span>`
      : `<span class="badge badge-opt">opcional</span>`;

    const label = mat.qty > 1 ? `${mat.qty}× ${mat.nome}` : mat.nome;

    card.innerHTML = `
      <div class="mat-header">
        <span class="mat-nome">${label}</span>
        ${badge}
      </div>
      <label class="mat-label" for="mat-${state.runaIdx}-${i}">preço unitário (Z)</label>
      <input
        class="mat-input"
        id="mat-${state.runaIdx}-${i}"
        type="number"
        min="0"
        placeholder="0"
        value="${saved}"
        data-ridx="${state.runaIdx}"
        data-midx="${i}"
      >
    `;
    container.appendChild(card);
  });

  container.querySelectorAll(".mat-input").forEach((el) => {
    el.addEventListener("input", () => {
      const ri = Number(el.dataset.ridx);
      const mi = Number(el.dataset.midx);
      state.precosMat[ri][mi] = el.value;
      renderBrutaCards();
      renderResults();
    });
  });
}

// ─── Cards de runas brutas ─────────────────────────────────────────────────────
export function renderBrutaCards() {
  const container = document.getElementById("bruta-cards");
  container.innerHTML = "";
  const runa = RUNAS[state.runaIdx];
  const custoMat = calcCustoMat(runa, state.precosMat[state.runaIdx]);

  RUNAS_BRUTAS.forEach((br, i) => {
    const ch = calcChance(runa, br, attrs());
    const esp = calcCustoEsperado(br.preco + custoMat, ch);

    const card = document.createElement("div");
    card.className = "bruta-card" + (i === state.brutaIdx ? " selected" : "");
    card.setAttribute("role", "button");
    card.setAttribute("tabindex", "0");
    card.setAttribute("aria-pressed", i === state.brutaIdx);

    card.innerHTML = `
      <div class="bruta-nome">Runa Bruta ${br.nome}</div>
      <div class="bruta-preco">${fmt(br.preco)} Z</div>
      <div class="bruta-chance">Chance: <strong>${ch}%</strong></div>
      <div class="bruta-esp">~${fmt(esp)} Z/craft</div>
    `;

    const select = () => {
      state.brutaIdx = i;
      document.querySelectorAll(".bruta-card").forEach((el, j) => {
        el.classList.toggle("selected", j === i);
        el.setAttribute("aria-pressed", j === i);
      });
      renderResults();
    };
    card.addEventListener("click", select);
    card.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") select(); });
    container.appendChild(card);
  });
}

// ─── Painel de resultados ──────────────────────────────────────────────────────
export function renderResults() {
  const metricsEl = document.getElementById("metrics");
  const verdictEl = document.getElementById("verdict");

  if (state.brutaIdx < 0) {
    metricsEl.innerHTML = `<p class="hint">Selecione uma runa bruta acima para ver o cálculo.</p>`;
    verdictEl.innerHTML = "";
    return;
  }

  const runa  = RUNAS[state.runaIdx];
  const bruta = RUNAS_BRUTAS[state.brutaIdx];
  const custoMat  = calcCustoMat(runa, state.precosMat[state.runaIdx]);
  const ch        = calcChance(runa, bruta, attrs());
  const totalTent = bruta.preco + custoMat;
  const esp       = calcCustoEsperado(totalTent, ch);
  const tentativas = (100 / ch).toFixed(1);

  const melhor = melhorBruta(runa, RUNAS_BRUTAS, state.precosMat[state.runaIdx], attrs());
  const isMelhor = melhor.bruta.nome === bruta.nome;

  metricsEl.innerHTML = `
    <div class="metric-card">
      <div class="metric-label">chance de craft</div>
      <div class="metric-value">${ch}%</div>
    </div>
    <div class="metric-card">
      <div class="metric-label">custo por tentativa</div>
      <div class="metric-value">${fmt(totalTent)} Z</div>
      <div class="metric-sub">runa + materiais</div>
    </div>
    <div class="metric-card">
      <div class="metric-label">tentativas esperadas</div>
      <div class="metric-value">${tentativas}×</div>
    </div>
    <div class="metric-card highlight">
      <div class="metric-label">custo esperado/sucesso</div>
      <div class="metric-value">${fmt(esp)} Z</div>
    </div>
  `;

  verdictEl.innerHTML = isMelhor
    ? `<span class="verdict-good">✓ Runa Bruta ${bruta.nome} é a mais econômica para ${runa.nome} com seus atributos atuais.</span>`
    : `A opção mais econômica é <strong>Runa Bruta ${melhor.bruta.nome}</strong>
       (custo esperado: <strong>${fmt(melhor.custoEsperado)} Z</strong>, chance: ${melhor.chance}%).
       <span class="verdict-bad"> Você está pagando ${fmt(esp - melhor.custoEsperado)} Z a mais por craft.</span>`;
}

// ─── Inicialização ─────────────────────────────────────────────────────────────
export function init() {
  ["des", "sor", "nvcl"].forEach((id) => {
    document.getElementById(id).addEventListener("input", () => {
      renderBrutaCards();
      renderResults();
    });
  });

  renderRunaTabs();
  renderMatFields();
  renderBrutaCards();
  renderResults();
}
