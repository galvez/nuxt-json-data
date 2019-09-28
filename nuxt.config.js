export default {
  plugins: [
    '~/plugins/json-data'
  ],
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
        return renderRoute(arguments)
      }
    }
  ]
}
