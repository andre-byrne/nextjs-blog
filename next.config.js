module.exports = {
  // these env variables will be available on the client
  // so don't put secrets in here, only put things in here
  // that we are OK with the client seeing
  // for secret keys etc, put them in .env.local which is
  // only seen on the server
  env: {
    EDVISOR_I18N_URL: 'http://127.0.0.1:4001',
  },
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true
  },
  experimental: {
    appDir: true
  }
}