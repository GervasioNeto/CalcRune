// js/calc.js — lógica de cálculo de chance e custo
// Fórmula oficial: Chance = [Base + (DES÷30 + SOR÷10 + Nv.Classe÷10) + Raridade - Dificuldade]%

/**
 * Calcula a chance de sucesso de craft.
 * @param {object} runa   — objeto da lista RUNAS
 * @param {object} bruta  — objeto da lista RUNAS_BRUTAS
 * @param {object} attrs  — { des, sor, nvCl }
 * @returns {number} chance em % (1–100)
 */
export function calcChance(runa, bruta, attrs) {
  const { des = 0, sor = 0, nvCl = 1, nvPericia = 1 } = attrs;
  const base = 30 + nvPericia * 2;
  const raw =
    base +
    Math.floor(des / 30) +
    Math.floor(sor / 10) +
    Math.floor(nvCl / 10) +
    bruta.raridade -
    runa.dif;
  return Math.min(Math.max(raw, 1), 100);
}

/**
 * Calcula o custo total dos materiais para uma runa, dados preços inseridos pelo usuário.
 * @param {object} runa       — objeto da lista RUNAS
 * @param {number[]} precos   — array com preços unitários de cada material (index = index do mat)
 * @returns {number}
 */
export function calcCustoMat(runa, precos) {
  return runa.mat.reduce((sum, mat, i) => {
    const p = Number(precos[i]) || 0;
    return sum + p * mat.qty;
  }, 0);
}

/**
 * Calcula o custo esperado por craft bem-sucedido.
 * @param {number} custoPorTentativa  — preço da runa bruta + materiais
 * @param {number} chance             — chance em % (1–100)
 * @returns {number}
 */
export function parseQtd(qtdCriada) {
  if (!qtdCriada) return 1;
  const partes = String(qtdCriada).split("a").map((s) => Number(s.trim()));
  if (partes.length === 2) return (partes[0] + partes[1]) / 2;
  return partes[0] || 1;
}

export function calcCustoEsperado(custoPorTentativa, chance, qtd = 1) {
  if (chance <= 0) return Infinity;
  return Math.round((custoPorTentativa * (100 / chance)) / qtd);
}

/**
 * Retorna qual runa bruta tem o menor custo esperado por sucesso.
 * @param {object}   runa       — objeto da lista RUNAS
 * @param {object[]} brutas     — lista RUNAS_BRUTAS
 * @param {number[]} precosMat  — preços dos materiais (sem a runa bruta)
 * @param {object}   attrs      — { des, sor, nvCl }
 * @returns {{ bruta, chance, custoEsperado }}
 */
export function melhorBruta(runa, brutas, precosMat, attrs) {
  const custoMat = calcCustoMat(runa, precosMat);
  return brutas
    .map((b) => {
      const ch = calcChance(runa, b, attrs);
      const esp = calcCustoEsperado(b.preco + custoMat, ch);
      return { bruta: b, chance: ch, custoEsperado: esp };
    })
    .reduce((best, cur) => (cur.custoEsperado < best.custoEsperado ? cur : best));
}
