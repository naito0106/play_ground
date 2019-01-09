<template>
  <div class="side-menu">
    <li class="brand">
    </li>
    
    <li class="menu-item">
      <i class="fa fa-home" aria-hidden="true"></i><span @click="toHome">HOME</span>
    </li>
    <li class="menu-item">
      <i class="fa fa-list-ul" aria-hidden="true"></i><span @click="toGame">GAME</span>
    </li>
    <li class="menu-item">
      <i class="fa fa-comments" aria-hidden="true"></i>TEST
    </li>
  </div>
  
</template>

<script>
  export default {
    name: 'side-menu',
    data() {
      return {
   
      }
    },
    methods: {
      toHome() {
        this.$router.push('/')
      },
      toGame() {
        this.$router.push({ name: 'game', params: { gameId: 2 }})
      }
    }
  }
</script>

<style scoped>
  ul, li {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  
  .side-menu {
    background-color: gray;
    color: white;
    position: absolute;
    height: 100%;
    width: 45px;
    white-space: nowrap;
    overflow: hidden;
    transition: width 0.1s ease-in;
    transition-delay: 0.3s;
  }
  .side-menu:hover {
    width: 200px;
  }
  
  .brand {
    height: 70px;
  }
  
  .menu-item .fa {
    font-size: 19px;
    width: 46px;
    text-align: center;
  }
  
  .menu-item {
    line-height: 35px;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;
  }
  .menu-item:hover {
    background: #4d294d;
  }
</style>