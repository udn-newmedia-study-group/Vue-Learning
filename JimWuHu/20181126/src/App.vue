<template>
  <div id="app">
    <the-ruling-Party></the-ruling-Party>
    <AppButton></AppButton>
    <BaseInput
      v-model="username"
      class="username-input"
      placeholder="Enter your username">
    </BaseInput>
    <BaseCheckbox></BaseCheckbox>
    <NavigationLink url="https://www.google.com">
      <div class="active">Hello</div>
    </NavigationLink>
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
    <NavigationLinks></NavigationLinks>
    <TodoLists v-bind:todos="todos">
      <template slot-scope="slotProps">
        <span v-if="slotProps.todo.isComplete">✓</span>
        {{ slotProps.todo.text }}
      </template>
    </TodoLists>
    <AsyncOne></AsyncOne>
    <!-- <AsyncTwo></AsyncTwo> -->
    <Datepicker></Datepicker>
  </div>
</template>

<script>
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

export default {
  name: 'app',
  components: {
    HelloWorld,
    AppButton,
    BaseInput,
    BaseCheckbox,
    NavigationLink,
    NavigationLinks,
    TodoLists,
    AsyncOne,
    AsyncTwo,
    Datepicker
  },
  data () {
    return {
      username: 'Please insert something',
      lovingVue: false,
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
