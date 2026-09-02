import { Page, Locator } from "@playwright/test";

export class TodoPage {
  readonly page: Page;
  readonly tarefas: Locator;
  readonly contadorItens: Locator;

  constructor(page: Page) {
    this.page = page;
    this.tarefas = page.locator(".todo-list li");
    this.contadorItens = page.locator(".todo-count");
  }

  async acessar() {
    await this.page.goto("https://demo.playwright.dev/todomvc/#/");
  }

  async adicionarTarefa(tarefa: string) {
    await this.page.locator(".new-todo").fill(tarefa);
    await this.page.locator(".new-todo").press("Enter");
  }

  async adicionarDuasTarefas() {
    await this.adicionarTarefa("1ª tarefa");
    await this.adicionarTarefa("2ª tarefa");
  }

  async concluirTarefa(indice: number) {
    await this.tarefas.nth(indice).locator(".toggle").check();
  }

  async filtrarPor(filtro: "All" | "Active" | "Completed") {
    await this.page.getByRole("link", { name: filtro }).click();
  }
}