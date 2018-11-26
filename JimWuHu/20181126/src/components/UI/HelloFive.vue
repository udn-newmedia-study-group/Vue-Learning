<template>
  <div class="HelloFive">
    <h2>{{ msg }}</h2>
  </div>
</template>

<script>
export default {
  name: 'HelloFive',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.HelloFive {
    background-color: blue;
}
</style>
