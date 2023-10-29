module.exports = {
  // Configure lint-staged to target TypeScript and TypeScript React files for type checking.
  '**/*.(ts|tsx)': () => 'yarn type-check',

  // Configure lint-staged to target JavaScript, TypeScript, and TypeScript React files for linting and formatting.
  '**/*.(js|ts|tsx)': (filenames) => [
    // Run ESLint with the --fix flag to automatically fix linting issues in staged files.
    `yarn eslint --fix ${filenames.join(' ')}`,

    // Run Prettier to format staged files and save the changes.
    `yarn prettier --write ${filenames.join(' ')}`,
  ],
}
