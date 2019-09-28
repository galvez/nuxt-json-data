<template>
  <p>{{ $jsonData.msg }}</p>
</template>

<script>
export default {
  serverPrefetch () {
    const jsonData = {
      msg: 'Hello world!'
    }
    this.$ssrContext.jsonData = jsonData
    const oldRenderScripts = this.$ssrContext.renderScripts
    this.$ssrContext.renderScripts = function () {
      return `${oldRenderScripts(arguments)}<script type="application/json" id="__NUXT_JSON_DATA__">${
        JSON.stringify(jsonData)}</` + `script>`
    }
  }
}
</script>
