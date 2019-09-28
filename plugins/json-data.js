export default (ctx, inject) => {
  ctx.$jsonData = ctx.ssrContext
    ? ctx.ssrContext.jsonData || {}
    : JSON.parse(document.getElementById('__NUXT_JSON_DATA__').textContent)
  inject('jsonData', ctx.$jsonData)
}
