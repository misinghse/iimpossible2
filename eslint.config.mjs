import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    files: ["**/*.tsx"],
    rules: {
      "react/no-unescaped-entities": "off", // Turn off unescaped character rules
      "@typescript-eslint/no-unused-vars": [
        "warn", // Warn for unused variables instead of error
        { argsIgnorePattern: "^_" }, // Allow unused vars prefixed with "_"
      ],
    },
  },
];

export default eslintConfig;
