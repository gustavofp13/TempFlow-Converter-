# TempFlow 🌡️

Projeto de estudo: um conversor de temperatura entre Celsius, Fahrenheit e Kelvin, feito para praticar HTML, CSS e JavaScript.

## Sobre o projeto

TempFlow é um exercício de front-end onde o objetivo é reproduzir, com HTML, CSS e JavaScript puros, uma interface de conversor de temperatura a partir de um design de referência — trabalhando conceitos como flexbox, box model (margin/padding/border), estruturação semântica de elementos de formulário e, agora, manipulação do DOM e lógica de conversão.

## Status

🚧 Em desenvolvimento

- [x] Estrutura HTML (input, select, botão, área de resultado)
- [x] Estilização com CSS (layout, cores, bordas, responsividade do card)
- [x] Lógica de conversão em JavaScript (Celsius ↔ Fahrenheit ↔ Kelvin)
- [ ] Corrigir reset dos rótulos de resultado ao trocar de unidade
- [ ] Refatorar fórmulas repetidas em funções separadas
- [ ] Validação de entrada (campo vazio / unidade não selecionada)

## Tecnologias

- HTML5
- CSS3 (Flexbox)
- JavaScript (Vanilla)

## Progresso e aprendizados

Este projeto tem sido usado também como exercício de debugging — a versão atual do JS já passou por (e corrigiu) alguns erros clássicos de quem está começando com a linguagem:

- **Atribuição vs. comparação**: `if (x = "Celsius")` sempre executa, porque atribui em vez de comparar. Corrigido para `===`.
- **`onclick` inline sem chamar a função**: `onclick="calcularTemp"` referencia a função sem executá-la; migrado para `addEventListener` no JS, separando comportamento de estrutura (HTML limpo, sem lógica misturada).
- **Concatenação em vez de soma**: `input.value` sempre retorna string, então `valor + 273` concatenava texto em vez de somar números. Resolvido usando `input.valueAsNumber`.
- **Escopo de variável**: variáveis usadas só dentro da função de conversão foram mantidas locais (`let`/`const`), evitando poluição do escopo global.

Próximo passo de aprendizado: identificar e corrigir um bug de estado (os rótulos de resultado não voltam ao padrão ao alternar entre unidades) e reduzir repetição de código extraindo as fórmulas de conversão em funções reutilizáveis.

## Como rodar localmente

1. Clone o repositório
   ```bash
   git clone git@github.com:gustavofp13/TempFlow-Converter-.git
   ```
2. Abra o arquivo `index.html` no navegador (ou use a extensão Live Server do VS Code)

## Estrutura de arquivos

```
├── index.html
├── style.css
├── script.js
└── img/
    └── logo.png
```

## Autor

Gustavo Fialho Pinheiro
