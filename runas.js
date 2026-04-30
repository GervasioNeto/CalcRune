// data/runas.js — dados de todas as runas e runas brutas
// Fonte: wiki Rune Knight / Maestria em Runas (RK_RUNEMASTERY 2010)

export const RUNAS_BRUTAS = [
  {
    nome: "Comum",
    preco: 1000,
    raridade: 4,
    imgUrl: "https://static.divine-pride.net/images/items/item/12737.png",
  },
  {
    nome: "Forte",
    preco: 2500,
    raridade: 8,
    imgUrl: "https://static.divine-pride.net/images/items/item/12734.png",
  },
  {
    nome: "Rara",
    preco: 7500,
    raridade: 15,
    imgUrl: "https://static.divine-pride.net/images/items/item/12738.png",
  },
  {
    nome: "Antiga",
    preco: 18000,
    raridade: 30,
    imgUrl: "https://static.divine-pride.net/images/items/item/12735.png",
  },
  {
    nome: "Mística",
    preco: 50000,
    raridade: 60,
    imgUrl: "https://static.divine-pride.net/images/items/item/12736.png",
  },
];

// mat: [galho_antigo, item1, item2?, item3?]
// qty: quantidade de cada material (default 1)
export const RUNAS = [
  {
    nome: "Thurisaz",
    habilidade: "Força Titânica",
    dif: 5,
    mat: [
      {
        nome: "Galho Antigo",
        qty: 1,
        obrigatorio: true,
        imgUrl: "https://static.divine-pride.net/images/items/item/7939.png",
      },
      {
        nome: "Cabelo Azul",
        qty: 1,
        obrigatorio: true,
        imgUrl: "https://static.divine-pride.net/images/items/item/1034.png",
      },
      {
        nome: "Garra de Lobo do Deserto",
        qty: 1,
        obrigatorio: true,
        imgUrl: "https://static.divine-pride.net/images/items/item/7030.png",
      },
    ],
    imgUrl: "https://static.divine-pride.net/images/items/item/12731.png",
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
      {
        nome: "Galho Antigo",
        qty: 1,
        obrigatorio: true,
        imgUrl: "https://static.divine-pride.net/images/items/item/7939.png",
      },
      {
        nome: "Coração Incandescente",
        qty: 1,
        obrigatorio: true,
        imgUrl: "https://static.divine-pride.net/images/items/item/7097.png",
      },
    ],
    imgUrl: "https://static.divine-pride.net/images/items/item/12728.png",
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
      {
        nome: "Galho Antigo",
        qty: 1,
        obrigatorio: true,
        imgUrl: "https://static.divine-pride.net/images/items/item/7939.png",
      },
      {
        nome: "Partículas de Luz",
        qty: 1,
        obrigatorio: true,
        imgUrl: "https://static.divine-pride.net/images/items/item/7938.png",
      },
      {
        nome: "Corrente",
        qty: 1,
        obrigatorio: true,
        imgUrl: "https://static.divine-pride.net/images/items/item/7221.png",
      },
      {
        nome: "Canino de Dragão",
        qty: 1,
        obrigatorio: true,
        imgUrl: "https://static.divine-pride.net/images/items/item/1035.png",
      },
    ],
    imgUrl: "https://static.divine-pride.net/images/items/item/12732.png",
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
      {
        nome: "Galho Antigo",
        qty: 1,
        obrigatorio: true,
        imgUrl: "https://static.divine-pride.net/images/items/item/7939.png",
      },
      {
        nome: "Casca Arredondada",
        qty: 1,
        obrigatorio: true,
        imgUrl: "https://static.divine-pride.net/images/items/item/1096.png",
      },
      {
        nome: "Pele de Dragão",
        qty: 1,
        obrigatorio: true,
        imgUrl: "https://static.divine-pride.net/images/items/item/7123.png",
      },
    ],
    imgUrl: "https://static.divine-pride.net/images/items/item/12733.png",
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
      {
        nome: "Galho Antigo",
        qty: 1,
        obrigatorio: true,
        imgUrl: "https://static.divine-pride.net/images/items/item/7939.png",
      },
      {
        nome: "Partículas de Luz",
        qty: 1,
        obrigatorio: true,
        imgUrl: "https://static.divine-pride.net/images/items/item/7938.png",
      },
      {
        nome: "Dente de Ogro",
        qty: 1,
        obrigatorio: true,
        imgUrl: "https://static.divine-pride.net/images/items/item/7002.png",
      },
    ],
    imgUrl: "https://static.divine-pride.net/images/items/item/12729.png",
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
      {
        nome: "Galho Antigo",
        qty: 1,
        obrigatorio: true,
        imgUrl: "https://static.divine-pride.net/images/items/item/7939.png",
      },
      {
        nome: "Cabelo Horrendo",
        qty: 1,
        obrigatorio: true,
        imgUrl: "https://static.divine-pride.net/images/items/item/1048.png",
      },
      {
        nome: "Mel",
        qty: 1,
        obrigatorio: true,
        imgUrl: "https://static.divine-pride.net/images/items/item/518.png",
      },
    ],
    imgUrl: "https://static.divine-pride.net/images/items/item/12730.png",
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
      {
        nome: "Galho Antigo",
        qty: 1,
        obrigatorio: true,
        imgUrl: "https://static.divine-pride.net/images/items/item/7939.png",
      },
      {
        nome: "Partículas de Luz",
        qty: 1,
        obrigatorio: true,
        imgUrl: "https://static.divine-pride.net/images/items/item/7938.png",
      },
      {
        nome: "Gema Vermelha",
        qty: 1,
        obrigatorio: false,
        imgUrl: "https://static.divine-pride.net/images/items/item/716.png",
      },
    ],
    imgUrl: "https://static.divine-pride.net/images/items/item/12726.png",
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
      {
        nome: "Galho Antigo",
        qty: 1,
        obrigatorio: true,
        imgUrl: "https://static.divine-pride.net/images/items/item/7939.png",
      },
      {
        nome: "Partículas de Luz",
        qty: 1,
        obrigatorio: true,
        imgUrl: "https://static.divine-pride.net/images/items/item/7938.png",
      },
      {
        nome: "Armadura Destruída",
        qty: 1,
        obrigatorio: false,
        imgUrl: "https://static.divine-pride.net/images/items/item/7069.png",
      },
      {
        nome: "Pergaminho Antigo",
        qty: 1,
        obrigatorio: false,
        imgUrl: "https://static.divine-pride.net/images/items/item/7099.png",
      },
    ],
    imgUrl: "https://static.divine-pride.net/images/items/item/12725.png",
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
      {
        nome: "Galho Antigo",
        qty: 1,
        obrigatorio: true,
        imgUrl: "https://static.divine-pride.net/images/items/item/7939.png",
      },
      {
        nome: "Armadura de Dullahan",
        qty: 1,
        obrigatorio: true,
        imgUrl: "https://static.divine-pride.net/images/items/item/7210.png",
      },
    ],
    imgUrl: "https://static.divine-pride.net/images/items/item/12727.png",
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
      {
        nome: "Galho Antigo",
        qty: 1,
        obrigatorio: true,
        imgUrl: "https://static.divine-pride.net/images/items/item/7939.png",
      },
      {
        nome: "Partículas de Luz",
        qty: 3,
        obrigatorio: true,
        imgUrl: "https://static.divine-pride.net/images/items/item/7938.png",
      },
      {
        nome: "Ouro",
        qty: 3,
        obrigatorio: true,
        imgUrl: "https://static.divine-pride.net/images/items/item/969.png",
      },
    ],
    imgUrl: "https://static.divine-pride.net/images/items/item/22540.png",
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
