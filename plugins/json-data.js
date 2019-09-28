export default () => {
  if (process.client) {
    window.__NUXT__ = JSON.parse(document.getElementById('__NUXT_JSON_DATA__').textContent)
  }
}
