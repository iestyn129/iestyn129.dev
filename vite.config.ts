import { defineConfig } from "vite";

export default defineConfig({
	build: {
		rolldownOptions: {
			input: {
				index: "index.html",
				error: "404.html",
			},
		},
	},
});
