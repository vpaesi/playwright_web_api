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

* 1️⃣ Instalação dos pacotes
```bash
npm install
npx playwright install
```

* 2️⃣ Rodar os testes
```bash
npx playwright test
```

* 3️⃣ Rodar os testes através da interface (opcional)
```bash
npx playwright test --ui
```

* 4️⃣ Visualizar relatório (opcional)
```bash
npx playwright show-report
```