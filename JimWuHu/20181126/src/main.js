import Vue from 'vue'
import App from './App.vue'
import upperFirst from 'lodash.upperfirst'
import camelCase from 'lodash.camelcase'

//
const requireComponent = require.context(
  // 其组件目录的相对路径
  './components/UI/',
  // 是否查询其子目录
  true,
  // 匹配基础组件文件名的正则表达式
  /Base[A-Z]\w+\.(vue|js)$/
)

requireComponent.keys().forEach(fileName => {
  // 获取组件配置
  const componentConfig = requireComponent(fileName)

  console.log(componentConfig)
  // 获取组件的 PascalCase 命名
  const componentName = upperFirst(
    camelCase(
      // 剥去文件名开头的 `./` 和结尾的扩展名
      fileName.replace(/^\.\/(.*)\.\w+$/, '$1')
    )
  )
  console.log(componentName)
  // 全局注册组件
  Vue.component(
    componentName,
    // 如果这个组件选项是通过 `export default` 导出的，
    // 那么就会优先使用 `.default`，
    // 否则回退到使用模块的根。
    componentConfig.default || componentConfig
  )
})

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

