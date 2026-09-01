# Automação de testes Web e API com Playwright
* Repositório criado para automatizar 2 cenários web e 2 cenários API, utilizando Playwright + TypeScript, conforme segue:

## Cenários automatizados
### Web
- W1 - Adicionar tarefas
- W2 - Concluir e filtrar tarefas

### API
- A1 - Consulta de usuário válido
- A2 - Consulta de usuário inexistente

## Rode na sua máquina
### Pré requisito de instalação
- Node.js

### Execução
No terminal, dentro da pasta do repositório, execute os seguintes comandos:

1️⃣ Instalação dos pacotes
```bash
npm install
npx playwright install
```

2️⃣ Rodar os testes
```bash
npm run test
```
2️⃣.1️⃣ Rodar teste de um arquivo específico:
```bash
npm run test <nome-do-arquivo>
# ex: npm run test produtos
```
2️⃣.2️⃣ Executar apenas um teste:
```bash
# altere o nome do teste colocando `.only`, exemplo:
test.only("nome-do-teste")...
```
2️⃣.3️⃣ Executar testes com debug*:
```bash
npm playwright test --debug
```

3️⃣ Rodar os testes através da interface (opcional)
```bash
npx playwright test --ui
```

4️⃣ Visualizar relatório (opcional)
```bash
npx playwright show-report
```

_*além das ferramentas de debug da própria IDE, o playwright possibilita o debug com acesso à page testada, através do Playwright Inspector***, permitindo verificar o teste step by step_

_**com o Playwright Inspector também é possível verificar locators da page a ser testada_

## Relatório e verificação
- Ao rodar os testes, é gerado um `index.html` em `playwright-report` que pode ser aberto no navegador para visualizar resultados.

