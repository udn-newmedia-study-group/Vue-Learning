import Vue from 'vue'
import TestComponent from './TestComponent.vue'

new Vue({
  el: '#app',
  components: { TestComponent },
  data: {
    message: "Hello Vue"
  }
})
