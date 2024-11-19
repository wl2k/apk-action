// @ts-check

import core from './actions/core.js';

const URL =
  'https://github.com/WaterLemons2k/gradle-minimum/raw/main/version/java';

async function fetchJavaVersion() {
  const r = await fetch(URL);
  if (!r.ok) {
    core.warning(`Failed to fetch Java version from ${URL}: ${r.statusText}`);
    return '';
  }
  return r.text();
}

/**
 * Gets the Java version to use.
 *
 * Uses the `java-version` input if set. Otherwise, it fetches the contents of
 * {@link URL} and use its contents as the Java version.
 *
 * If fetching fails, it logs a warning and returns an empty string.
 *
 * @returns The Java version
 */
export default core.getInput('java-version') || (await fetchJavaVersion());
