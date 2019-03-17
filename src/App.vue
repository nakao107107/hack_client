<template>
  <div id="app">
    <app-header/>
    <router-view/>
  </div>
</template>

<script>
import Header from '@/global/Header'
export default {
  name: 'App',
  components: {
    'app-header': Header
  }
}
</script>

<style>
#app {
  font-family: 'dnp-shuei-gothic-kin-std','proxima-nova', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

* {
  margin: 0;
  padding: 0;
}
</style>
