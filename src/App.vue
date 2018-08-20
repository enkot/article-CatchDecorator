<template>
  <p style="color: red;">{{ errorMessage }}</p>
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'
import api from './api.js'
import Catch from './catchDecorator'

const getDataErrorHandler = (error, ctx) => {
  ctx.errorMessage = error.message
}

@Component
export default class App extends Vue {
  errorMessage = null

  @Catch(getDataErrorHandler)
  async created() {
    const data = await api.getData() // throws Error
    return data
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
</style>
