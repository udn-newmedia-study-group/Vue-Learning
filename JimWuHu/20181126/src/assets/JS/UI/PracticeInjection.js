import Vue from 'vue'

export default Vue.component('PracticeInjection', {
    data () {
      return {
          getInfo: 'This info is of the top of the component'
      }
    },
    provide: function () {
        return {
          getInfo: this.getInfo
        }
    },
    template: `
        <a
            v-bind:href="url"
            class="nav-link"
        >
            <slot></slot>
        </a>
    `
  })


