<template>
  <p>{{ $jsonData.msg }}</p>
</template>

<script>
function jsonData(vm, data) {
  vm.$ssrContext.jsonData = data
  const oldRenderScripts = vm.$ssrContext.renderScripts
  vm.$ssrContext.renderScripts = function () {
    return `${oldRenderScripts(arguments)}<script type="application/json" id="__NUXT_JSON_DATA__">${
      JSON.stringify(data)}</` + `script>`
  }
}

export default {
  serverPrefetch () {
    jsonData(this, {
      msg: 'Hello world!'
    })
  }
}
</script>
