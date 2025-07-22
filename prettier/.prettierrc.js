export default {
  // Line length - balances readability with screen space
  printWidth: 80,

  // Use 2 spaces for indentation (widely adopted in modern JS)
  tabWidth: 2,
  useTabs: false,

  // Add semicolons for statement termination (reduces ASI issues)
  semi: true,

  // Use single quotes for string literals (popular in modern JS codebases)
  singleQuote: true,

  // Modern trailing comma style (helps with cleaner git diffs)
  trailingComma: 'all',

  // Spacing in object literals
  bracketSpacing: true,

  // JSX formatting
  jsxSingleQuote: false,
  bracketSameLine: false,

  // Modern arrow function parentheses handling
  arrowParens: 'always',

  // Consistent end of line style
  endOfLine: 'lf',

  // Embedded language formatting
  embeddedLanguageFormatting: 'auto',

  // Parser options
  singleAttributePerLine: false,

  // Newer options (as of 2025)
  quoteProps: 'as-needed',
  vueIndentScriptAndStyle: false,
  htmlWhitespaceSensitivity: 'css',
  proseWrap: 'preserve',

  // Prettier plugins
  plugins: ['@ianvs/prettier-plugin-sort-imports'],
  importOrder: [
    '<BUILTIN_MODULES>',
    '',
    '^react$',
    '<THIRD_PARTY_MODULES>',
    '',
    '^@/(.*)$',
    '^~/(.*)$',
    '',
    '^[..]',
    '^[.]',
  ],
  importOrderBuiltinModulesToTop: true,
  importOrderCaseInsensitive: true,
  importOrderMergeDuplicateImports: true,
  importOrderCombineTypeAndValueImports: true,
  importOrderSortSpecifiers: true,
};
