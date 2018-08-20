import Vue from 'vue'
import App from './App.vue'
import { catchDecoratorStore } from './catchDecorator'

Vue.config.productionTip = false
catchDecoratorStore.setHandler((error) => console.warn('Error from global handler'))

new Vue({
  render: h => h(App)
}).$mount('#app')
