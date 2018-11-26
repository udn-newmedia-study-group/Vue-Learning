<template>
  <div class="HelloOne">
    <h1>{{ msg }}</h1>
    <h2> Message of root: {{ mark }}</h2>
  </div>
</template>

<script>
export default {
  name: 'HelloOne',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.HelloOne {
  background-color: red;
}
</style>
