
export default {
  plugins: [
    '~/plugins/json-data'
  ],
  modules: [
    function () {
      this.nuxt.hook('vue-renderer:ssr:context', (ssrContext) => {
        const renderScripts = ssrContext.renderScripts
        ssrContext.renderScripts = function () {
          return `${
            renderScripts(arguments)
          }<script type="application/json" id="__NUXT_JSON_DATA__">${
            JSON.stringify(ssrContext.nuxt)
          }</script>`
        }
        ssrContext.beforeRenderFns.push(() => {
          ssrContext.nuxt = {
            layout: 'default',
            data: [],
            error: null,
            serverRendered: true,
            logs: []
          }
        })
      })
    }
  ]
}
