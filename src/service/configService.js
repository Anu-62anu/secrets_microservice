// Central place to read/shape config. Easy to swap to Secret Manager later.
const { loadEnv } = require('../config');

function getCoreConfig() {
  const { LOOKERSDK_CLIENT_ID, LOOKERSDK_CLIENT_SECRET, LOOKER_EMBED_HOST } = loadEnv();
  return {
    LOOKERSDK_CLIENT_ID: LOOKERSDK_CLIENT_ID || null,
    LOOKERSDK_CLIENT_SECRET: LOOKERSDK_CLIENT_SECRET || null,
    LOOKER_EMBED_HOST: LOOKER_EMBED_HOST || null,
  };
}

function getRuntimeFlags() {
  const { LOOKERSDK_CLIENT_ID, LOOKERSDK_CLIENT_SECRET, LOOKER_EMBED_HOST } = loadEnv();
  return {
    LOOKERSDK_CLIENT_ID: !!LOOKERSDK_CLIENT_ID,
    LOOKERSDK_CLIENT_SECRET: !!LOOKERSDK_CLIENT_SECRET,
    LOOKER_EMBED_HOST: !!LOOKER_EMBED_HOST,
  };
}

module.exports = { getCoreConfig, getRuntimeFlags };
