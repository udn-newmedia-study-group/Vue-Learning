import Vue from 'vue'

export default Vue.component('AsyncTwo', function (resolve) {
    require(['./MyAsyncComponent'], resolve)
})