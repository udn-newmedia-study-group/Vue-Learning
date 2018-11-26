<template>
  <div class="HelloFour">
    <h4>{{ msg }}</h4>
  </div>
</template>

<script>
export default {
  name: 'HelloFour',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.HelloFour {
    background-color: green;
}
</style>
