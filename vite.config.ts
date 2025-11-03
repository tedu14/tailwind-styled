import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "TailwindStyled",
      fileName: (format) => `tailwind-styled.${format}.js`,
      formats: ["es", "cjs"],
    },
    rollupOptions: {
      external: ["react", "react/jsx-runtime", "clsx", "tailwind-merge"],
      output: {
        globals: {
          react: "React",
        },
        preserveModules: false,
      },
    },
    sourcemap: true,
    target: "es2015",
    minify: false,
  },
});
