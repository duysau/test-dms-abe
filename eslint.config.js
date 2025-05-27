import js from "@eslint/js";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";

export default tseslint.config(
  // Specify files and folders to ignore during linting
  { ignores: ["dist", "build", "node_modules", "*.min.js", "coverage"] },
  {
    // Extend recommended configs for JavaScript and TypeScript
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    // Specify file patterns to apply this config to
    files: ["**/*.{js,jsx,ts,tsx}"],
    // Register ESLint plugins
    plugins: {
      react,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    // Set language options for ECMAScript and JSX
    languageOptions: {
      ecmaVersion: "latest", // Use the latest ECMAScript version
      sourceType: "module", // Use ES modules
      parserOptions: {
        ecmaFeatures: {
          jsx: true, // Enable JSX parsing
        },
      },
    },
    // Define custom linting rules
    rules: {
      // Include recommended React Hooks rules
      ...reactHooks.configs.recommended.rules,

      // React-specific rules
      "react/react-in-jsx-scope": "off", // Not needed in React 17+
      "react/prop-types": "off", // Using TypeScript for prop validation
      "react/jsx-uses-react": "off", // Not needed in React 17+
      "react/jsx-uses-vars": "error", // Prevent unused variables in JSX
      "react/jsx-key": "error", // Require keys in lists

      // TypeScript-specific rules
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_" }, // Ignore unused variables starting with _
      ],
      "@typescript-eslint/no-explicit-any": "warn", // Warn on usage of 'any'
      "@typescript-eslint/explicit-function-return-type": "off", // Don't require explicit return types
      "@typescript-eslint/explicit-module-boundary-types": "off", // Don't require explicit module boundary types
      "@typescript-eslint/no-empty-function": "warn", // Warn on empty functions
      debugger: "off", // Disable debugger rule
      // General code quality rules
      "no-console": "error", // Error on console usage
      "no-unused-vars": "off", // Disable base rule in favor of TS version
      "prefer-const": "error", // Prefer const over let
      "no-var": "error", // Disallow var
      eqeqeq: ["error", "always"], // Require === and !==
      "no-multiple-empty-lines": ["error", { max: 1 }], // Limit empty lines
      "no-trailing-spaces": "error", // Disallow trailing spaces
      semi: ["error", "always"], // Require semicolons
    },
    // Additional settings for plugins
    settings: {
      react: {
        version: "detect", // Auto-detect React version
      },
      "import/resolver": {
        node: {
          paths: ["src"], // Resolve imports from 'src'
          extensions: [".js", ".jsx", ".ts", ".tsx"], // Supported file extensions
        },
      },
    },
  }
);
