<template>
  <p>{{ msg }}</p>
</template>

<script>
export default {
  asyncData: () => ({
      msg: 'Hello world!'
  })
}
</script>
