// @ts-check

import fs from 'fs';

/**
 * @see [npm:@actions/core](https://npmjs.com/package/@actions/core)
 */
export default {
  exportVariable(name, value) {
    process.env[name] = value;

    const { GITHUB_ENV } = process.env;
    GITHUB_ENV && fs.appendFileSync(GITHUB_ENV, `${name}=${value}\n`);
  },

  /**
   * Gets the value of an input.
   *
   * Assuming the environment is converted to uppercase and replace `-` to `_`.
   *
   * @example 'input-name' => 'INPUT_INPUT_NAME'
   *
   * @param {string} name name of the input to get
   * @returns {string}
   */
  getInput(name) {
    return process.env[`INPUT_${name.replace(/-/g, '_').toUpperCase()}`] || '';
  },
  warning(message) {
    console.log(`::warning::${message}`);
  }
};
