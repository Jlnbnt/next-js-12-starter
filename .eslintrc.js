module.exports = {
  // This is the root ESLint configuration.
  root: true,
  // Use the '@typescript-eslint/parser' for parsing TypeScript code.
  parser: '@typescript-eslint/parser',
  // Configure parser options, particularly where to find 'tsconfig.json'.
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
  // Settings to detect React version dynamically.
  settings: { react: { version: 'detect' } },
  // Set the environments where the code will run, such as browser, node, and ES6.
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  // Ignore specific patterns (e.g., '*.js' and '*.d.ts') during linting.
  ignorePatterns: ['*.js', '*.d.ts'],
  // ESLint plugins.
  plugins: ['@typescript-eslint', 'jsdoc', 'import', 'jsx-a11y'],
  // ESLint extended rules.
  extends: [
    // Basic ESLint recommended rules.
    'eslint:recommended',
    // Next.js specific rules.
    'next',
    // Next.js core web vitals.
    'next/core-web-vitals',
    // TypeScript recommended rules.
    'plugin:@typescript-eslint/recommended',
    // TypeScript recommended rules.
    'plugin:@typescript-eslint/stylistic',
    // React recommended rules.
    'plugin:react/recommended',
    // React hooks recommended rules.
    'plugin:react-hooks/recommended',
    // Accessibility recommended rules.
    'plugin:jsx-a11y/recommended',
    // Prettier formatting rules.
    'prettier',
  ],
  // Extend ESLint configurations to include recommended rules.
  rules: {
    // Enforce consistent brace style for all control statements (ex : return statements).
    curly: 'error',

    // Require the use of === and !== operators .
    eqeqeq: ['error', 'always'],

    // Disallow specified warning terms in comments.
    'no-warning-comments': ['error', { terms: ['import'] }],

    // Warn on the use of console.log() allow console.error/warn().
    'no-console': ['error', { allow: ['warn', 'error'] }],

    // Disallow duplicate module imports.
    'no-duplicate-imports': 'error',

    // Disallow comparisons where both sides are exactly the same.
    'no-self-compare': 'error',

    // Disallow if statements as the only statement in else blocks.
    'no-lonely-if': 'error',

    // Disallow the use of alert, confirm, and prompt.
    'no-alert': 'error',

    // Disallow ternary operators when simpler alternatives exist.
    'no-unneeded-ternary': 'error',

    // Require template literals instead of string concatenation.
    'prefer-template': 'error',

    // Enforce consistent spacing after the // or /* in a comment.
    'spaced-comment': 'error',

    // Allow non-href links and custom link behavior (NextJs's <Link>).
    'jsx-a11y/anchor-is-valid': 'off',

    // Disable the requirement for display names in React components.
    'react/display-name': 'off',

    // Allow the use of the 'autofocus' attribute on elements.
    'jsx-a11y/no-autofocus': 'off',

    // Disable React prop-types checks since using TypeScript.
    'react/prop-types': 'off',

    // Disable React in JSX scope check since using Next.js.
    'react/react-in-jsx-scope': 'off',

    // Enforce TypeScript report unused variables in the code.
    '@typescript-eslint/no-unused-vars': 'error',

    // Disable the requirement for explicitly specifying module boundary types in TypeScript functions.
    '@typescript-eslint/explicit-module-boundary-types': 'off',

    // Disallow the any type.
    '@typescript-eslint/no-explicit-any': 'error',

    // Disallow empty exports that don't change anything in a module file.
    '@typescript-eslint/no-useless-empty-export': 'error',

    // Require each enum member value to be explicitly initialized.
    '@typescript-eslint/prefer-enum-initializers': 'error',

    // Enforce using concise optional chain expressions instead of chained logical ands, negated logical ors, or empty objects.
    '@typescript-eslint/prefer-optional-chain': 'error',

    // Configure grouping rules.
    'import/order': [
      'warn',
      {
        'newlines-between': 'always',
        pathGroups: [
          {
            pattern: 'next/*',
            group: 'builtin',
          },
          {
            pattern: 'react',
            group: 'builtin',
          },
          {
            pattern: '@mui/*',
            group: 'external',
            position: 'before',
          },
        ],
        groups: [
          'builtin',
          'internal',
          'external',
          ['parent', 'sibling'],
          'object',
          'unknown',
          'index',
          'type',
        ],
        pathGroupsExcludedImportTypes: ['builtin', 'internal', 'parent'],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],

    // Configure import ordering.
    'sort-imports': [
      'error',
      {
        ignoreDeclarationSort: true,
      },
    ],

    // JSDoc.
    'jsdoc/require-jsdoc': [
      'error',
      {
        // Disables the ESLint auto-fixer for JSDoc comments.
        enableFixer: false,
        // Disables checking JSDoc for constructors.
        checkConstructors: false,
        require: {
          // Requires JSDoc comments for function declarations.
          FunctionDeclaration: true,
          // Requires JSDoc comments for method definitions.
          MethodDefinition: true,
          // Requires JSDoc comments for arrow function expressions.
          ArrowFunctionExpression: true,
        },
      },
    ],
  },
  // Override rules.
  overrides: [
    {
      files: ['**/*.tsx', '**/*.option.ts', '**/*.config.ts', '**hook.ts'],
      // Turn off the 'jsdoc/require-jsdoc' rule for the specified file patterns.
      rules: { 'jsdoc/require-jsdoc': 'off' },
    },
  ],
}
