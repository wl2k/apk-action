// @ts-check

import fs from 'fs';

/**
 * @see [npm:@actions/core](https://npmjs.com/package/@actions/core)
 */
export default {
  /**
   * Sets an environment variable for this action and future actions in the job.
   *
   * @param {string} name name of the environment variable to set
   * @param {string} value value of the environment variable
   */
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
  /**
   * Logs a warning message.
   *
   * @param {string} message The warning message
   */
  warning(message) {
    console.log(`::warning::${message}`);
  },
  /**
   * Logs an error message.
   *
   * @param {string} message The error message
   */
  error(message) {
    console.log(`::error::${message}`);
  },
  /**
   * Logs a debug message.
   *
   * @param {string} message The debug message
   */
  debug(message) {
    console.log(`::debug::${message}`);
  }
};
