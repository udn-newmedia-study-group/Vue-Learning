import Vue from 'vue'

export default Vue.component('NavigationLinks', {
    template: `
        <div>
            <a
                href="https://www.google.com"
                class="nav-link"
                target="_blank"
            >
                <slot name="google">
                    Goto Google
                </slot>
            </a>
            <a
                href="https://tw.yahoo.com/"
                class="nav-link"
                target="_blank"
            >
                <slot name="yahoo">
                    Goto Yahoo
                </slot>
            </a>
            <a
                href="https://udn.com/news/index"
                class="nav-link"
                target="_blank"
            >
                <slot name="udn">
                    Goto Udn
                </slot>
            </a>
        </div>
    `
  })