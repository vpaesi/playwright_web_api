import { test, expect } from "@playwright/test";
import { TodoPage } from "./pages/TodoPage";

test.describe("Concluir e Filtrar Tarefas", () => {

  test("deve concluir uma tarefa e filtrar por Active", async ({ page }) => {
    const todoPage = new TodoPage(page);

    await todoPage.acessar();
    await todoPage.adicionarDuasTarefas();

    await todoPage.concluirTarefa(0);
    await todoPage.filtrarPor("Active");

    await expect(todoPage.tarefas).toHaveCount(1);
    await expect(todoPage.tarefas.first()).toHaveText("2ª tarefa");
    await expect(todoPage.tarefas).not.toContainText("1ª tarefa");
  });

  test("deve filtrar por Completed", async ({ page }) => {
    const todoPage = new TodoPage(page);

    await todoPage.acessar();
    await todoPage.adicionarDuasTarefas();

    await todoPage.concluirTarefa(0);
    await todoPage.filtrarPor("Completed");

    await expect(todoPage.tarefas).toHaveCount(1);
    await expect(todoPage.tarefas.first()).toHaveText("1ª tarefa");
    await expect(todoPage.tarefas).not.toContainText("2ª tarefa");
  });

});
