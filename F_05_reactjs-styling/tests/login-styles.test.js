import { readFile } from "node:fs/promises";
import test from "node:test";
import assert from "node:assert/strict";

const indexCssUrl = new URL("../src/index.css", import.meta.url);
const loginCssUrl = new URL("../src/components/Login.module.css", import.meta.url);

test("loads the shared design tokens", async () => {
	const indexCss = await readFile(indexCssUrl, "utf8");

	assert.match(indexCss, /@import\s+["']\.\/root\.css["']/);
});

test("styles every login form control and mobile layout", async () => {
	const loginCss = await readFile(loginCssUrl, "utf8");

	for (const selector of [
		".form",
		".input",
		".submit",
		".or",
		".social",
		".socialBtn",
		"@media",
	]) {
		assert.ok(loginCss.includes(selector), `Missing ${selector} styles`);
	}
});
