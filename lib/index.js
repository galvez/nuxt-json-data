import { resolve } from 'path'

export default function () {
  const renderer = this.nuxt.renderer
  if (renderer) {
    const renderRoute = renderer.renderRoute
    renderer.renderRoute = async function (_, ctx) {
      const result = await renderRoute.apply(this, arguments)
      if (result.html) {
        result.html = result.html.replace(
          /<head\s*>\n/,
          `<head>\n<script type="application/json" id="__NUXT_JSON_DATA__">${
            JSON.stringify(ctx.req.$jsonData)
          }</script>`
        )
      }
      return result
    }
  }
  this.nuxt.hook('vue-renderer:ssr:context', (ssrContext) => {
    ssrContext.req.$jsonData = Object.assign({}, ssrContext.nuxt)
    ssrContext.nuxt.data = []
    ssrContext.nuxt.state = {}
  })
  this.addPlugin({
    ssr: false,
    src: resolve(__dirname, 'plugin.js'),
    fileName: 'plugins/nuxt-json-data'
  })
}
