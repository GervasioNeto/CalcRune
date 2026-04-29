// js/ui.js — renderização e manipulação do DOM
import { RUNAS, RUNAS_BRUTAS } from "./runas.js";
import {
  calcChance,
  calcCustoMat,
  calcCustoEsperado,
  melhorBruta,
  qtdPorPericia,
  qtdRangeTexto,
} from "./calc.js";

// ─── Estado global da aplicação ───────────────────────────────────────────────
const state = {
  runaIdx: 0,
  brutaIdx: -1,
  // precosMat[runaIdx][matIdx] = valor digitado
  precosMat: Array.from({ length: RUNAS.length }, () => []),
};

function attrs() {
  return {
    des: Number(document.getElementById("des").value) || 0,
    sor: Number(document.getElementById("sor").value) || 0,
    nvCl: Number(document.getElementById("nvcl").value) || 1,
    nvPericia: Number(document.getElementById("nvpericia").value) || 1,
  };
}

function fmt(n) {
  return n.toLocaleString("pt-BR");
}

function imgUrlLarge(imgUrl) {
  return imgUrl.replace("/items/item/", "/items/collection/");
}

function openImgOverlay(imgUrl, alt) {
  const overlay = document.getElementById("img-overlay");
  const img = document.getElementById("img-overlay-src");
  img.src = imgUrlLarge(imgUrl);
  img.alt = alt;
  overlay.classList.remove("hidden");
}

function initImgOverlay() {
  document.getElementById("img-overlay").addEventListener("click", (e) => {
    e.currentTarget.classList.add("hidden");
  });
}

// ─── Tabs de seleção de runa ───────────────────────────────────────────────────
export function renderRunaTabs() {
  const container = document.getElementById("runa-tabs");
  container.innerHTML = "";
  RUNAS.forEach((r, i) => {
    const btn = document.createElement("button");
    btn.className = "tab-btn" + (i === state.runaIdx ? " active" : "");
    const imgTag = r.imgUrl
      ? `<img class="tab-img" src="${r.imgUrl}" alt="${r.nome}" />`
      : `<span class="tab-img-placeholder"></span>`;
    btn.innerHTML = `${imgTag}${r.nome}<span class="tab-dif">Dificuldade ${r.dif}%</span>`;
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

  let detailsEl = null;
  if (runa.imgUrl || runa.runeDesc) {
    const desc = runa.runeDesc
      ? `<p class="runa-desc">${runa.runeDesc.replace(/\n/g, "<br>")}</p>`
      : "";
    const imgTag = runa.imgUrl
      ? `<img src="${imgUrlLarge(runa.imgUrl)}" alt="${runa.nome}" class="runa-img-big" />`
      : "";
    detailsEl = document.createElement("details");
    detailsEl.className = "runa-details";
    detailsEl.innerHTML = `
      <summary class="runa-summary">
        <span class="runa-summary-nome">${runa.nome}</span>
        <span class="runa-summary-hab">${runa.habilidade}</span>
        <span class="runa-summary-chevron">▾</span>
      </summary>
      <div class="runa-details-body">
        ${imgTag}
        ${desc}
      </div>`;
  }

  runa.mat.forEach((mat, i) => {
    const saved = state.precosMat[state.runaIdx][i] ?? "";
    const card = document.createElement("div");
    card.className = "mat-card";

    const label = mat.qty > 1 ? `${mat.qty}× ${mat.nome}` : mat.nome;
    const imgTag = mat.imgUrl
      ? `<img src="${mat.imgUrl}" alt="${mat.nome}" class="mat-img" />`
      : `<span class="mat-img-placeholder"></span>`;

    card.innerHTML = `
      <div class="mat-header">
        ${imgTag}
        <div class="mat-info">
          <span class="mat-nome">${label}</span>
          <label class="mat-label" for="mat-${state.runaIdx}-${i}">preço unitário (Z)</label>
        </div>
      </div>
      <input
        class="mat-input"
        id="mat-${state.runaIdx}-${i}"
        type="text"
        inputmode="numeric"
        placeholder="0"
        value="${saved ? Number(saved).toLocaleString("pt-BR") : ""}"
        data-ridx="${state.runaIdx}"
        data-midx="${i}"
      >
    `;
    container.appendChild(card);
  });

  if (detailsEl) container.appendChild(detailsEl);

  container.querySelectorAll(".mat-input").forEach((el) => {
    el.addEventListener("input", () => {
      el.value = el.value.replace(/\D/g, "");
      const ri = Number(el.dataset.ridx);
      const mi = Number(el.dataset.midx);
      state.precosMat[ri][mi] = el.value;
      renderBrutaCards();
      renderResults();
    });
    el.addEventListener("blur", () => {
      const raw = Number(el.value.replace(/\D/g, "")) || 0;
      if (raw > 0) el.value = raw.toLocaleString("pt-BR");
    });
    el.addEventListener("focus", () => {
      const raw = el.value.replace(/\D/g, "");
      el.value = raw;
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
    const esp = calcCustoEsperado(
      br.preco + custoMat,
      ch,
      qtdPorPericia(attrs().nvPericia),
    );

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
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") select();
    });
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

  const runa = RUNAS[state.runaIdx];
  const bruta = RUNAS_BRUTAS[state.brutaIdx];
  const custoMat = calcCustoMat(runa, state.precosMat[state.runaIdx]);
  const ch = calcChance(runa, bruta, attrs());
  const totalTent = bruta.preco + custoMat;
  const esp = calcCustoEsperado(
    totalTent,
    ch,
    qtdPorPericia(attrs().nvPericia),
  );
  const tentativas = (100 / ch).toFixed(1);

  const melhor = melhorBruta(
    runa,
    RUNAS_BRUTAS,
    state.precosMat[state.runaIdx],
    attrs(),
  );
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
      <div class="metric-label">média de tentativas</div>
      <div class="metric-value">${tentativas}×</div>
      <div class="metric-sub">Quantidade criada: ${qtdRangeTexto(attrs().nvPericia)}</div>
      <div class="metric-sub">Média por craft: ${qtdPorPericia(attrs().nvPericia)}</div>
    </div>
    <div class="metric-card highlight">
      <div class="metric-label">gasto médio por runa</div>
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
  ["des", "sor", "nvcl", "nvpericia"].forEach((id) => {
    document.getElementById(id).addEventListener("input", () => {
      renderBrutaCards();
      renderResults();
    });
  });

  initImgOverlay();
  renderRunaTabs();
  renderMatFields();
  renderBrutaCards();
  renderResults();
}
