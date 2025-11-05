import { defineConfig } from "vite";
import path from "path";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    dts({
      insertTypesEntry: true,
      include: ["src/*.ts"],
      exclude: ["**/*.spec.ts", "**/*.test.ts"],
    }),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "TailwindcssStyled",
      fileName: (format) => `tailwindcss-styled.${format}.js`,
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
