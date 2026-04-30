# ᚱ Rune Knight — Rune Calc

Calculadora de craft de runas para **Rune Knight** no Ragnarok Online.  
Informe seus atributos e os preços de mercado do seu servidor para descobrir qual **Runa Bruta** tem o menor gasto médio por runa criada.

🔗 **[Acesse online →](https://gervasioneto.github.io/CalcRune/)**

---

## Como funciona

A fórmula oficial de chance de craft é:

```
Chance = (30 + Perícia×2) + (DES÷30 + SOR÷10 + Nv.Classe÷10) + Raridade − Dificuldade
```

A quantidade de runas produzidas por craft depende do nível de **Perícia em Runas**:

| Nível de Perícia | Runas criadas |
|-----------------|---------------|
| 1 – 4           | 2             |
| 5 – 9           | 2 ~ 4         |
| 10              | 2 ~ 6         |

O gasto médio por runa leva em conta a chance de sucesso, o custo de cada tentativa e a quantidade média produzida.

---

## Funcionalidades

- 10 runas disponíveis (Thurisaz → Luxanima) com imagens e descrições
- Imagens dos ingredientes de cada runa
- Atributos configuráveis: DES, SOR, Nível de Classe e Nível de Perícia em Runas
- Preços dos materiais por runa com formatação de milhar
- Comparativo automático entre todas as Runas Brutas
- Layout em duas colunas com resultado fixo na tela
- Responsivo para mobile

---

## Estrutura do projeto

```
CalcRune/
├── index.html    # estrutura e seções
├── style.css     # tema dark medieval
├── ui.js         # renderização do DOM e estado
├── calc.js       # lógica de cálculo (sem DOM)
├── runas.js      # dados das runas, materiais e runas brutas
├── api.js        # utilitários de integração com Divine Pride
└── favicon.ico
```

---

## Como hospedar no GitHub Pages

1. Fork ou clone o repositório
2. Vá em **Settings → Pages**
3. Em **Source**, selecione `main` branch e pasta `/root`
4. Salve — seu site estará disponível em `https://seu-usuario.github.io/CalcRune/`

> Usa ES Modules nativos (`type="module"`) — sem bundler, funciona direto no navegador.

---

## Dados

Baseados na wiki oficial de Rune Knight (habilidade `RK_RUNEMASTERY`, ID 2010).  
Imagens via [Divine Pride](https://www.divine-pride.net).  
Preços são do seu servidor — insira os valores reais nos campos da calculadora.

---

*Feito para a comunidade RK. Contribuições são bem-vindas!*
