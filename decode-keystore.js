#!/usr/local/bin/node

require('fs').writeFileSync(
  process.env.KEYSTORE_PATH,
  process.argv[2],
  'base64'
)
