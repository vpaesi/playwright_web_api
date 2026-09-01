import { test, expect } from "@playwright/test";

test.describe("Adicionar Tarefas", () => {
  test("deve adicionar duas tarefas", async ({ page }) => {
    await page.goto("https://demo.playwright.dev/todomvc/#/");
    await expect(page.locator("h1")).toHaveText("todos");

    await page.locator(".new-todo").fill("1ª tarefa");
    await page.locator(".new-todo").press("Enter");
    await page.locator(".new-todo").fill("2ª tarefa");
    await page.locator(".new-todo").press("Enter");

    const tarefas = page.locator(".todo-list li");
    await expect(tarefas).toHaveCount(2);
    await expect(tarefas.first()).toHaveText("1ª tarefa");
    await expect(tarefas.last()).toHaveText("2ª tarefa");
  });
});
