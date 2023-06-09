// This is the configuration file for ESLint, the TypeScript linter
// https://eslint.org/docs/user-guide/configuring
module.exports = {
  extends: [
    // The linter base is the IsaacScript mod config
    // https://github.com/IsaacScript/eslint-config-isaacscript/blob/main/mod.js
    "eslint-config-isaacscript/mod",
  ],

  parserOptions: {
    // ESLint needs to know about the project's TypeScript settings in order for TypeScript-specific
    // things to lint correctly
    // We do not point this at "./tsconfig.json" because certain files (such at this file) should be
    // linted but not included in the actual project output
    project: "./tsconfig.eslint.json",
  },

  // We modify the linting rules from the base for some specific things
  // (listed in alphabetical order)
  rules: {
    // Insert changed or disabled rules here, if necessary
    "isaacscript/complete-sentences-line-comments": "off"
  },
};
