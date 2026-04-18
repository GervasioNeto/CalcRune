# ᚱ Rune Knight — Rune Calc

Calculadora de craft de runas para **Rune Knight** no Ragnarok Online.  
Informe seus atributos e os preços de mercado do seu servidor para descobrir qual **Runa Bruta** tem o menor custo esperado por craft bem-sucedido.

🔗 **[Acesse online →](https://seu-usuario.github.io/rk-rune-calc/)**

---

## Como funciona

A fórmula oficial de chance de craft é:

```
Chance = [Base + (DES÷30 + SOR÷10 + Nv.Classe÷10) + Raridade − Dificuldade]%
```

A calculadora usa essa chance para calcular o **custo esperado por sucesso**:

```
Custo esperado = (preço da runa bruta + materiais) × (100 ÷ chance%)
```

Isso permite comparar diretamente se vale mais comprar uma Runa Bruta Comum barata (chance menor) ou uma Runa Bruta Mística cara (chance maior).

---

## Funcionalidades

- Selecione qualquer uma das 10 runas (Thurisaz → Luxanima)
- Insira os preços reais dos materiais do seu servidor
- Veja a chance de sucesso para cada tipo de Runa Bruta
- Resultado: custo esperado por craft bem-sucedido + comparativo automático de qual bruta compensa mais

---

## Estrutura do projeto

```
rk-rune-calc/
├── index.html          # HTML principal — estrutura e seções
├── css/
│   └── style.css       # Estilos (tema dark medieval)
├── js/
│   └── ui.js           # Renderização do DOM e estado da aplicação
├── data/
│   └── runas.js        # Dados das runas, materiais e runas brutas
└── README.md
```

- **`data/runas.js`** — fonte da verdade: todos os dados de runas e materiais em um só lugar
- **`js/calc.js`** — lógica pura de cálculo (sem dependência de DOM), fácil de testar
- **`js/ui.js`** — gerencia o estado e atualiza o DOM
- **`index.html`** — só estrutura e imports, sem lógica embutida

---

## Como hospedar no GitHub Pages

1. Faça um fork ou clone este repositório
2. Vá em **Settings → Pages**
3. Em **Source**, selecione `main` branch e pasta `/root`
4. Salve — seu site estará disponível em `https://seu-usuario.github.io/rk-rune-calc/`

> O projeto usa ES Modules nativos (`type="module"`) — funciona sem bundler, direto no navegador.

---

## Como contribuir

Encontrou algum dado errado ou quer adicionar suporte a outro servidor/versão?

1. Fork o repositório
2. Edite `data/runas.js` com os dados corretos
3. Abra um Pull Request descrevendo a mudança

---

## Dados

Baseados na wiki oficial de Rune Knight (habilidade `RK_RUNEMASTERY`, ID 2010).  
Preços das Runas Brutas são os valores padrão de NPC — substitua pelos valores reais do seu servidor nos campos da calculadora.

---

*Feito para a comunidade RK. Contribuições são bem-vindas!*
