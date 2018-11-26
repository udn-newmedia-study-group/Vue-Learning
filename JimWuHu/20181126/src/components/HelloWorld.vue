<template>
  <div class="hello">
    <p>我是組件Hello</p>
    <h3>{{ mark }}</h3>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  computed: {
    mark: function () { 
      return this.$root.parentMark
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  border: solid 1px black;
}
h3 {
  color:aqua;
}
</style>
