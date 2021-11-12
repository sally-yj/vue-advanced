<template>
  <div id="app">
    <HeaderBar />
    <router-view></router-view>
  </div>
</template>

<script>
import HeaderBar from './components/HeaderBar.vue';

export default {
  name: 'App',
  components: {
    HeaderBar,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
  margin-top: 10px;
}
.list {
  margin: 30px 0;
}
</style>
