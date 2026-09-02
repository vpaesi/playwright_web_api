import { test, expect } from "@playwright/test";
import { TodoPage } from "./pages/TodoPage";

test.describe("Adicionar Tarefas", () => {

  test("deve adicionar duas tarefas", async ({ page }) => {
    const todoPage = new TodoPage(page);

    await todoPage.acessar();

    await expect(page.locator("h1")).toHaveText("todos");

    await todoPage.adicionarDuasTarefas();

    await expect(todoPage.tarefas).toHaveCount(2);
    await expect(todoPage.tarefas.first()).toHaveText("1ª tarefa");
    await expect(todoPage.tarefas.last()).toHaveText("2ª tarefa");
  });

});