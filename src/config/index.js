// Minimal config loader. If you later fetch from Google Secret Manager,
// do it here and keep the rest of the app unchanged.
function loadEnv() {
  return {
    LOOKERSDK_CLIENT_ID: process.env.LOOKERSDK_CLIENT_ID,
    LOOKERSDK_CLIENT_SECRET: process.env.LOOKERSDK_CLIENT_SECRET,
    LOOKER_EMBED_HOST: process.env.LOOKER_EMBED_HOST,
  };
}

module.exports = { loadEnv };
