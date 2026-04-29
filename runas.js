// data/runas.js — dados de todas as runas e runas brutas
// Fonte: wiki Rune Knight / Maestria em Runas (RK_RUNEMASTERY 2010)

export const RUNAS_BRUTAS = [
  { nome: "Comum", preco: 1000, raridade: 4 },
  { nome: "Forte", preco: 2500, raridade: 8 },
  { nome: "Rara", preco: 7500, raridade: 15 },
  { nome: "Antiga", preco: 18000, raridade: 30 },
  { nome: "Mística", preco: 50000, raridade: 60 },
];

// mat: [galho_antigo, item1, item2?, item3?]
// qty: quantidade de cada material (default 1)
export const RUNAS = [
  {
    nome: "Thurisaz",
    habilidade: "Força Titânica",
    dif: 5,
    mat: [
      { nome: "Galho Antigo", qty: 1, obrigatorio: true },
      { nome: "Cabelo Azul", qty: 1, obrigatorio: true },
      { nome: "Garra de Lobo do Deserto", qty: 1, obrigatorio: true },
    ],
    imgUrl: "https://www.divine-pride.net/img/items/item/LATAM/12731",
    runeDesc: `-------------------------
      FOR +30.
      Dano físico corpo a corpo +15%.
      Dano físico no ataque básico +250%.
      (No PvP, o dano é de 125% e não funciona com Golpe Titânico).
      Ao realizar ataques básicos:
      30% de chance de causar 2,5 a mais de dano.
      -------------------------
      Altera a propriedade do [Sopro do Dragão] para Sagrado.
      -------------------------
      Duração: 15 minutos
      Peso: 1`,
  },
  {
    nome: "Isa",
    habilidade: "Vitalidade Rúnica",
    dif: 10,
    mat: [
      { nome: "Galho Antigo", qty: 1, obrigatorio: true },
      { nome: "Coração Incandescente", qty: 1, obrigatorio: true },
    ],
    imgUrl: "https://www.divine-pride.net/img/items/item/LATAM/12728",
    runeDesc: `-------------------------
      Cura recebida +50%.
      Resistência a danos refletidos +50%.
      -------------------------
      Duração: 15 minutos
      Peso: 1`,
  },
  {
    nome: "Wyrd",
    habilidade: "Explosão Rúnica",
    dif: 10,
    mat: [
      { nome: "Galho Antigo", qty: 1, obrigatorio: true },
      { nome: "Partículas de Luz", qty: 1, obrigatorio: true },
      { nome: "Corrente", qty: 1, obrigatorio: true },
      { nome: "Canino de Dragão", qty: 1, obrigatorio: true },
    ],
    imgUrl: "https://www.divine-pride.net/img/items/item/LATAM/12732",
    runeDesc: `-------------------------
      Causa dano físico corpo a corpo na área de 7x7 células ao redor do usuário.
      O dano é influenciado pelo nível de [Perícia em Runas], FOR e nível de base do usuário.
      Tem possibilidade do ataque ser crítico.
      -------------------------
      Recarga: 1 segundo
      Peso: 1`,
  },
  {
    nome: "Hagalaz",
    habilidade: "Escamas Rochosas",
    dif: 5,
    mat: [
      { nome: "Galho Antigo", qty: 1, obrigatorio: true },
      { nome: "Casca Arredondada", qty: 1, obrigatorio: true },
      { nome: "Pele de Dragão", qty: 1, obrigatorio: true },
    ],
    imgUrl: "https://www.divine-pride.net/img/items/item/LATAM/12733",
    runeDesc: `-------------------------
      Drena 20% do HP máx.
      Bônus de DEF e DEFM de acordo com o nível de [Perícia em Runas] e o nível de classe do usuário.
      Ao sofrer danos físicos corpo a corpo:
      30% de chance de destruir a arma do oponente.
      (Em monstros normais, ATQ -25% por 10 segundos).
      -------------------------
      Duração: 15 minutos
      Peso: 1`,
  },
  {
    nome: "Othila",
    habilidade: "Aura de Combate",
    dif: 5,
    mat: [
      { nome: "Galho Antigo", qty: 1, obrigatorio: true },
      { nome: "Partículas de Luz", qty: 1, obrigatorio: true },
      { nome: "Dente de Ogro", qty: 1, obrigatorio: true },
    ],
    imgUrl: "https://www.divine-pride.net/img/items/item/LATAM/12729",
    runeDesc: `-------------------------
      ATQ +70.
      Aumenta a velocidade de ataque.
      -------------------------
      Altera a propriedade do [Bafo do Dragão] para Fantasma.
      -------------------------
      Duração: 15 minutos
      Peso: 1`,
  },
  {
    nome: "Uruz",
    habilidade: "Regeneração Espiritual",
    dif: 15,
    mat: [
      { nome: "Galho Antigo", qty: 1, obrigatorio: true },
      { nome: "Cabelo Horrendo", qty: 1, obrigatorio: true },
      { nome: "Mel", qty: 1, obrigatorio: true },
    ],
    imgUrl: "https://www.divine-pride.net/img/items/item/LATAM/12730",
    runeDesc: `-------------------------
      Regenera 60 de SP a cada 10 segundos.
      -------------------------
      Duração: 15 minutos
      Peso: 1`,
  },
  {
    nome: "Raido",
    habilidade: "Golpe Titânico",
    dif: 5,
    mat: [
      { nome: "Galho Antigo", qty: 1, obrigatorio: true },
      { nome: "Partículas de Luz", qty: 1, obrigatorio: true },
      { nome: "Gema Vermelha", qty: 1, obrigatorio: false },
    ],
    imgUrl: "https://www.divine-pride.net/img/items/item/LATAM/12726",
    runeDesc: `-------------------------
      O próximo ataque básico causará um dano físico maior.
      Tem 20% de chance de destruir a sua arma.
      O efeito termina se o usuário atacar, mudar de arma ou não atacar nos próximos 30 segundos.
      Deve ter uma arma equipada.
      -------------------------
      Em Milagre das Runas:
      Por 30 segundos, usuário não pode ser empurrado.
      -------------------------
      Duração: 30 segundos
      Recarga: 30 segundos
      Peso: 1`,
  },
  {
    nome: "Nauthiz",
    habilidade: "Purificação",
    dif: 15,
    mat: [
      { nome: "Galho Antigo", qty: 1, obrigatorio: true },
      { nome: "Partículas de Luz", qty: 1, obrigatorio: true },
      { nome: "Armadura Destruída", qty: 1, obrigatorio: false },
      { nome: "Pergaminho Antigo", qty: 1, obrigatorio: false },
    ],
    imgUrl: "https://www.divine-pride.net/img/items/item/LATAM/12725",
    runeDesc: `-------------------------
      Regenera 25% de HP.
      Remove e garante imunidade a efeitos negativos.
      -------------------------
      Efeitos negativos:
      Atordoamento, Sono, Sono Profundo, Maldição, Petrificação, Envenenamento, Cegueira, Sangramento, Silêncio, Caos, Congelamento, Hipotermia, Cristalização, Incêndio, Grito da Mandrágora, Pântano de Nifflheim e algumas Toxinas de Sicário.
      -------------------------
      Recarga: 2 minutos
      Peso: 1`,
  },
  {
    nome: "Berkana",
    habilidade: "Escudos Milenares",
    dif: 20,
    mat: [
      { nome: "Galho Antigo", qty: 1, obrigatorio: true },
      { nome: "Armadura de Dullahan", qty: 1, obrigatorio: true },
    ],
    imgUrl: "https://www.divine-pride.net/img/items/item/LATAM/12727",
    runeDesc: `-------------------------
      Invoca entre 2 a 4 escudos de 1.000 de HP cada.
      Cada escudo possui a mesma DEF e DEFM do usuário.
      -------------------------
      Duração: 15 minutos
      Recarga: 1 minuto
      Peso: 1`,
  },
  {
    nome: "Luxanima",
    habilidade: "Luz da Alma",
    dif: 20,
    mat: [
      { nome: "Galho Antigo", qty: 1, obrigatorio: true },
      { nome: "Partículas de Luz", qty: 3, obrigatorio: true },
      { nome: "Ouro", qty: 3, obrigatorio: true },
    ],
    imgUrl: "https://www.divine-pride.net/img/items/item/LATAM/22540",
    runeDesc: `-------------------------
      Dano crítico +30%.
      HP e SP máx. +30%.
      Dano físico a distância +30%.
      Dano físico corpo a corpo +30%.
      Dano físico contra todos os tamanhos +30%.
      -------------------------
      Ao realizar ataques físicos:
      15% de chance de autoconjurar [Explosão Rúnica].
      -------------------------
      Altera a propriedade do [Bafo do Dragão] para Neutro.
      Altera a propriedade do [Sopro do Dragão] para Sombrio.
      -------------------------
      Duração: 15 minutos
      Recarga: 5 segundos
      Peso: 1`,
  },
];
