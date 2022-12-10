import { terser } from "rollup-plugin-terser";

export default {
  input: "src/main.js",
  output: [
    {
      file: "js/min.js",
      format: "cjs",
      sourcemap: true,
      plugins: [terser()],
    },
  ],
};
