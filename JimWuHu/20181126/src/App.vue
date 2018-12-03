<template>
  <div id="app">

    <!-- 組件註冊 -->
    <h1>組件註冊</h1>
    <h3>全局注册</h3>
    <the-ruling-Party></the-ruling-Party>
    <br>
    <h3>局部註冊</h3>
    <ComponentPartial></ComponentPartial>
    <AppButton></AppButton>
    <br>
    <h3>模塊註冊</h3>
    <HelloOne msg="hello1"></HelloOne>
    <HelloTwo msg="hello2"></HelloTwo>
    <HelloThree msg="hello3"></HelloThree>
    <HelloFour msg="hello4"></HelloFour>
    <HelloFive msg="hello5"></HelloFive>
    
    <!-- Prop -->
    <h1>Prop</h1>
    <h3>Prop 大小寫與類型</h3>
    <BlogPost post-title="注意 Prop 的大小寫 (camelCase vs kebab-case)"></BlogPost>
    <h3>Prop 靜態與動態</h3>
    <BlogPost post-title="文字標題" :post-likes="520" :post-is-published="true" :postComment-ids="[1, 2, 3]" :post-author="{'name': 'peter'}"></BlogPost>
    <p>如果要傳字串以外的質進去只能用動態</p>
    <h3>單向數據流</h3>
    <ol>
      <li>prop 用来传递一个初始值；这个子组件接下来希望将其作为一个本地的 prop 数据来使用</li>
      <li> prop 以一种原始的值传入且需要进行转换</li>
    </ol>
    <h3>非 Prop 的特性</h3>
    <button > 編輯 </button>
    <div class="edit">
      <textarea v-model="msg" name="" id="" cols="50" rows="10"></textarea>
    </div>
    <div class="title">及時編輯板</div>
    <vue-markdown :emoji="false" :source="msg">{{ msg }}</vue-markdown>
    
    <h5>替换/合并已有的特性</h5>
    <p>如果像 type 或 palceholder 已經有的特定，就會被替換掉，如果像是 class 或 style 就會合併</p>
    <h5>禁用繼承特性</h5>
    <BaseInput
      v-model="username"
      class="username-input"
      placeholder="Enter your username">
    </BaseInput>

    <h1>自定義事件</h1>
    <h3>事件名</h3>
    <myComponent v-on:my-event="doSomething"></myComponent>

    <h3>自定義組件的 v-model</h3>
    <BaseCheckbox v-model="lovingVue"></BaseCheckbox>

    <h3>将原生事件绑定到组件</h3>
    <BaseInput v-on:focus.native="onFocus"></BaseInput>

    <h3>.sync 修饰符</h3>

    <!-- Slot -->
    <h1>插槽</h1>

    <NavigationLink url="https://www.google.com">
      <div class="active">Hello</div>
    </NavigationLink>

    <h3>具名插槽</h3>
    <NavigationLinks>
      <template slot="google">
        <div>Goto google</div>
      </template>

      <template slot="yahoo">
        <div>Goto yahoo</div>
      </template>

      <template slot="udn">
         <div>Goto udn</div>
      </template>
    </NavigationLinks>
    <h3>插槽的默认内容</h3>
    <NavigationLinks></NavigationLinks>
    <h3>編譯作用域 解構寫法</h3>
    <TodoLists v-bind:todos="todos">
      <template slot-scope="slotProps">
        <span v-if="slotProps.todo.isComplete">✓</span>
        {{ slotProps.todo.text }}
      </template>
    </TodoLists>
    <h1>動態組件與異步組件</h1>
    <AsyncOne></AsyncOne>
    <!-- <AsyncTwo></AsyncTwo> -->
    <h1>处理边界情况</h1>
    <p>$root, $parent, $refs</p>
    <HelloWorld></HelloWorld>

    <h3>依赖注入</h3>
    <h5>大范围有效的 prop</h5>
    <ol>
      <li>祖先组件不需要知道哪些后代组件使用它提供的属性</li>
      <li>后代组件不需要知道被注入的属性来自哪里</li>
    </ol>
    <PracticeInjection>
      <mychild></mychild>
    </PracticeInjection>

    <h3>程序化的事件侦听器</h3>
    <Datepicker></Datepicker>
    <p style="backgroundColor: gray; color: white; padding: 10px">注意 Vue 的事件系统不同于浏览器的 EventTarget API。尽管它们工作起来是相似的，但是 $emit、$on, 和 $off 并不是 dispatchEvent、addEventListener 和 removeEventListener 的别名。</p>

    <h3>循环引用</h3>
    <h5>遞迴組件</h5>
    <h5>組件間循環引用</h5>

    <h5>模板定义的替代品</h5>
    <p>script + type=X-Templates </p>
    <h3>控制更新</h3>
    <p>如果你发现你自己需要在 Vue 中做一次强制更新，99.9% 的情况，是你在某个地方做错了事。</p>
    <p>通过 v-once 创建低开销的静态组件</p>
    <!-- <HelloOne></HelloOne> -->
  </div>
</template>

<script>
import Vue from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import AppButton from '@/assets/JS/UI/AppButton'
import BaseInput from '@/assets/JS/UI/BaseInput'
import BaseCheckbox from '@/assets/JS/UI/BaseCheckbox'
import NavigationLink from '@/assets/JS/UI/NavigationLink'
import NavigationLinks from '@/assets/JS/UI/NavigationLinks'
import TodoLists from '@/assets/JS/UI/TodoLists'
import AsyncOne from '@/assets/JS/UI/AsyncOne'
import AsyncTwo from '@/assets/JS/UI/AsyncTwo'
import Datepicker from '@/assets/JS/UI/Datepicker'
import BlogPost from '@/assets/JS/UI/BlogPost'
import PracticeInjection from '@/assets/JS/UI/PracticeInjection'
import VueMarkdown from 'vue-markdown'
import HelloOne from '@/components/UI/HelloOne.vue'
import myComponent from '@/assets/JS/UI/myComponent'
import CollectComponents from '../plugins/CollectComponents.js'

Vue.use(CollectComponents)

var ComponentPartial = {
    data: function () {
        return {
        slogan: '我是局部註冊組件',
        count: 1,
        lovingVue: false
        }
    },
    template: '<button v-on:click="count++">{{ slogan }}, 我擁有的票數： {{ count }} 票</button>'
}

var mychild = {
  name: 'mychild',
  inject: ['getInfo'],
  template: '<h5>{{ getInfo }}</h5>'
}

export default {
  name: 'app',
  components: {
    HelloWorld,
    AppButton,
    myComponent,
    ComponentPartial,
    BlogPost,
    BaseInput,
    BaseCheckbox,
    NavigationLink,
    NavigationLinks,
    TodoLists,
    AsyncOne,
    AsyncTwo,
    Datepicker,
    VueMarkdown,
    PracticeInjection,
    mychild,
    HelloOne
  },
  data () {
    return {
      username: 'Please insert something',
      lovingVue: false,
      parentMark: '我是根目錄的資料',
      msg: 'I want to write something',
      todos: [
        {
          id: 1,
          text: 'do something1',
          isComplete: true
        },
        {
          id: 2,
          text: 'do something2',
          isComplete: false
        },
        {
          id: 3,
          text: 'do something3',
          isComplete: true
        }
      ]
    }
  },
  methods: {
    doSomething () {
       alert("OK")
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.username-input {
  width: 100px;
  height: 50px;
  border: solid 1px black;
}
.active {
  color: green;
  background-color: black;
}
</style>
