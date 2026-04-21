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
    qtdCriada: "2",
    mat: [
      { nome: "Galho Antigo", qty: 1, obrigatorio: true },
      { nome: "Cabelo Azul", qty: 1, obrigatorio: true },
      { nome: "Garra de Lobo do Deserto", qty: 1, obrigatorio: true },
    ],
  },
  {
    nome: "Isa",
    habilidade: "Vitalidade Rúnica",
    dif: 10,
    qtdCriada: "2",
    mat: [
      { nome: "Galho Antigo", qty: 1, obrigatorio: true },
      { nome: "Coração Incandescente", qty: 1, obrigatorio: true },
    ],
  },
  {
    nome: "Wyrd",
    habilidade: "Explosão Rúnica",
    dif: 10,
    qtdCriada: "2",
    mat: [
      { nome: "Galho Antigo", qty: 1, obrigatorio: true },
      { nome: "Partículas de Luz", qty: 1, obrigatorio: true },
      { nome: "Corrente", qty: 1, obrigatorio: true },
      { nome: "Canino de Dragão", qty: 1, obrigatorio: true },
    ],
  },
  {
    nome: "Hagalaz",
    habilidade: "Escamas Rochosas",
    dif: 5,
    qtdCriada: "2",
    mat: [
      { nome: "Galho Antigo", qty: 1, obrigatorio: true },
      { nome: "Casca Arredondada", qty: 1, obrigatorio: true },
      { nome: "Pele de Dragão", qty: 1, obrigatorio: true },
    ],
  },
  {
    nome: "Othila",
    habilidade: "Aura de Combate",
    dif: 5,
    qtdCriada: "2",
    mat: [
      { nome: "Galho Antigo", qty: 1, obrigatorio: true },
      { nome: "Partículas de Luz", qty: 1, obrigatorio: true },
      { nome: "Dente de Ogro", qty: 1, obrigatorio: true },
    ],
  },
  {
    nome: "Uruz",
    habilidade: "Regeneração Espiritual",
    dif: 15,
    qtdCriada: "2",
    mat: [
      { nome: "Galho Antigo", qty: 1, obrigatorio: true },
      { nome: "Cabelo Horrendo", qty: 1, obrigatorio: true },
      { nome: "Mel", qty: 1, obrigatorio: true },
    ],
  },
  {
    nome: "Raido",
    habilidade: "Golpe Titânico",
    dif: 5,
    qtdCriada: "2 a 4",
    mat: [
      { nome: "Galho Antigo", qty: 1, obrigatorio: true },
      { nome: "Partículas de Luz", qty: 1, obrigatorio: true },
      { nome: "Gema Vermelha", qty: 1, obrigatorio: false },
    ],
  },
  {
    nome: "Nauthiz",
    habilidade: "Purificação",
    dif: 15,
    qtdCriada: "2",
    mat: [
      { nome: "Galho Antigo", qty: 1, obrigatorio: true },
      { nome: "Partículas de Luz", qty: 1, obrigatorio: true },
      { nome: "Armadura Destruída", qty: 1, obrigatorio: false },
      { nome: "Pergaminho Antigo", qty: 1, obrigatorio: false },
    ],
  },
  {
    nome: "Berkana",
    habilidade: "Escudos Milenares",
    dif: 20,
    qtdCriada: "2",
    mat: [
      { nome: "Galho Antigo", qty: 1, obrigatorio: true },
      { nome: "Armadura de Dullahan", qty: 1, obrigatorio: true },
    ],
  },
  {
    nome: "Luxanima",
    habilidade: "Luz da Alma",
    dif: 20,
    qtdCriada: "2 a 6",
    mat: [
      { nome: "Galho Antigo", qty: 1, obrigatorio: true },
      { nome: "Partículas de Luz", qty: 3, obrigatorio: true },
      { nome: "Ouro", qty: 3, obrigatorio: true },
    ],
  },
];
