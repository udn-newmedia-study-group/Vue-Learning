import Vue from 'vue'

export default Vue.component('AsyncOne', function (resolve, reject) {
    setTimeout(function () {
      // 向 `resolve` 回调传递组件定义
      resolve({
        template: '<div>I am async!</div>'
      })
    }, 1000)
  })