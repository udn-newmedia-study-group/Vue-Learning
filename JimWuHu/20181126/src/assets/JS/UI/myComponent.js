import Vue from 'vue'

export default Vue.component('myComponent', {
    data: function () {
        return {
          msg: '按我觸發事件'
        }
    },
    methods: {
        handleClick () {
            console.log("hello")
            this.$emit("my-event")
        }
    },
    template: `
        <button v-on:click="handleClick">{{ msg }}</button>
    `
  })