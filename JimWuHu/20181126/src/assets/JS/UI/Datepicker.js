import Vue from 'vue'
import Pikaday from 'pikaday'

export default Vue.component('Datepicker', {
    template: `
            <input 
            ref="dateInput"
            v-model="date"
            type="date"
        >
    `,
    data () {
        return {
            date: null
        } 
    },
    mounted: function () {
        // Pikaday 是一个第三方日期选择器的库
        this.picker = new Pikaday({
          field: this.$refs.input,
          format: 'YYYY-MM-DD'
        })

        this.$once('hook:beforeDestroy', function () {
            picker.destroy()
          })
      },
  })


