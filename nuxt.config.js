export default {
  modules: [
    function () {
      const renderer = this.nuxt.renderer
      const renderRoute = renderer.renderRoute.bind(renderer)
      renderer.renderRoute = function() {
        const renderScripts = this.serverContext.renderScripts
        const nuxtState = this.serverContext.nuxt
        this.serverContext.renderScripts = function () {
          return `${
            renderScripts(arguments)
          }<script type="application/json" id="__NUXT_JSON_DATA__">${
            JSON.stringify(nuxtState)
          }</script>`
        }
        this.serverContext.nuxt = {}
        return renderRoute(arguments)
      }
      this.nuxt.hook('before:build', () => {
        const pluginPath = join(this.options.buildDir, 'json-data-plugin.js')
        writeFileSync(pluginPath, `
          export default () => {
            if (process.client) {
              window.__NUXT__ = JSON.parse(document.getElementById('__NUXT_JSON_DATA__').textContent)
            }
          }      
        `)
        this.addPlugin({
          src: pluginPath,
          fileName: 'plugins/nuxt-json-data.js'
        })
      }
    }
  ]
}
