<template>
  <div class="HelloThree">
    <h3>{{ msg }}</h3>
  </div>
</template>

<script>
export default {
  name: 'HelloThree',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.HelloThree {
    background-color: yellow;
}
</style>
