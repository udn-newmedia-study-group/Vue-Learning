export default {
    install(Vue){
        const context = require.context('../src/components/UI/', true, /\.vue/)
        
        context.keys().forEach(key => {
            const component = context(key).default
            Vue.component(component.name, component)
        })
    }
}