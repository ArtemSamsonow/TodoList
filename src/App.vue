<template>
  <div class="TodoList">
    <HeaderApp></HeaderApp>
    <add-components-app></add-components-app>
    <get-component-app></get-component-app>
  </div>
</template>

<script>
import HeaderApp from './components/HeaderApp.vue'
import addComponentsApp from './components/addComponentsApp.vue'
import getComponentApp from './components/getComponentApp.vue'

export default {
  components: {
    HeaderApp,
    addComponentsApp,
    getComponentApp
  }
}
</script>
