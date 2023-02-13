module.exports = {
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": [
    "react",
    "react-hooks",
    "@typescript-eslint",
    "@tanstack/query",
    "prettier"
  ],
  "rules": {
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": ["error"],
    "arrow-body-style": "error",
    "prettier/prettier": "error",
    "@typescript-eslint/ban-ts-comment": ["warn"],
    "@typescript-eslint/no-empty-function": ["off"]
  },
  "settings": {
    "import/resolver": {
      "typescript": {}
    }
  },
  "overrides": [
    {
      "files": ["*.config.js"],
      "env": {
        "node": true
      },
      "rules": {
        "@typescript-eslint/no-var-requires": "off"
      }
    }
  ]
}