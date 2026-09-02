import { test, expect } from "@playwright/test";

test.describe("Valida usuário", () => {
  test("deve validar usuário existente", async ({ request }) => {
    const response = await request.get("https://api.github.com/users/octocat");

    expect(response.status()).toBe(200);

    const body = await response.json();

    expect(body).toHaveProperty("login");
    expect(body).toHaveProperty("id");
    expect(body).toHaveProperty("public_repos");

    expect(body.login).toBe("octocat");
  });
});
