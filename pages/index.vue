<template>
  <p>{{ msg }}</p>
</template>

<script>
export default {
  data: () => ({
    msg: null,
  }),
  asyncData: () => ({
      msg: 'Hello world!'
  })
}
</script>
