import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.component('the-ruling-Party', {
  data: function () {
    return {
      slogan: '我是全域組件',
      count: 10000000 
    }
  },
  template: '<button v-on:click="count--">{{ slogan }}, 我擁有的票數： {{ count }} 票</button>'
})

new Vue(App).$mount('#app')
