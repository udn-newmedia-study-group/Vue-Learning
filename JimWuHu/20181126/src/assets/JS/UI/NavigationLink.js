import Vue from 'vue'

export default Vue.component('NavigationLink', {
    props: ['url'],
    template: `
        <a
            v-bind:href="url"
            class="nav-link"
        >
            <slot></slot>
        </a>
    `
  })