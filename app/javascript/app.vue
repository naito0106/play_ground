<template>
  <div id="app">
    <side-menu></side-menu>
    <div class="contents">
      <router-view />
    </div>
   
  </div>
</template>

<script>
import sideMenu from './components/side_menu.vue'

export default {
  data: function () {
    return {
      message: "Hello Vue!"
    }
  },
  components: {
    'side-menu': sideMenu
  }
}
</script>

<style scoped>
#app {
  height: 100%;
}
p {
  font-size: 2em;
}
.contents {
  background-color: #f7faff;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
  margin-left: 45px;
}
</style>
