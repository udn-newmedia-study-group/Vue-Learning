<template>
  <div class="HelloTwo">
    <h2>{{ msg }}</h2>
  </div>
</template>

<script>
export default {
  name: 'HelloTwo',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.HelloTwo {
    background-color: orange;
}
</style>
