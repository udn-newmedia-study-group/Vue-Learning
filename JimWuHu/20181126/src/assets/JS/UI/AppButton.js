import Vue from 'vue'

export default Vue.component("AppButton", {
    data: function () {
        return {
        slogan: '我是局部註冊組件',
        count: 1
        }
    },
    template: '<button v-on:click="count++">{{ slogan }}, 我擁有的票數： {{ count }} 票</button>'
})