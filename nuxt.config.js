
export default {
  plugins: [
    '~/plugins/json-data'
  ],
  modules: [
    function () {
      this.nuxt.hook('vue-renderer:ssr:context', (ssrContext) => {
        const renderScripts = ssrContext.renderScripts
        const oldState = JSON.stringify(ssrContext.nuxt)
        ssrContext.renderScripts = function () {
          return `${
            renderScripts(arguments)
          }<script type="application/json" id="__NUXT_JSON_DATA__">${
            oldState
          }</script>`
        }
        ssrContext.nuxt = {
          layout: 'default',
          data: [],
          error: null,
          serverRendered: true,
          logs: []
        }
      })
    }
  ]
}
