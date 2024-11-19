// @ts-check

import crypto from 'crypto';
import path from 'path';

import core from './actions/core.js';
import javaVersion from './java-version.js';

/**
 * Generates a random short UUID.
 */
const randID = () => crypto.randomUUID().split('-', 1)[0];

/**
 * Defines the environment used during the action:
 *
 * - `KEYSTORE_PATH`
 * - `JAVA_VERSION`
 *
 * @returns The defined environments
 */
export default function defineEnv() {
  const env = {
    keystorePath: path.join(
      process.env.RUNNER_TEMP || '/tmp',
      `${randID()}.jks`
    ),
    javaVersion
  };

  core.exportVariable('KEYSTORE_PATH', env.keystorePath);
  core.exportVariable('JAVA_VERSION', env.javaVersion);

  return env;
}
