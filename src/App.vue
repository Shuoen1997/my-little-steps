<template>
  <div id="app" class="container-fluid">
    <Main msg="The Little Steps"/>
  </div>
</template>

<script>
import Main from './components/Main.vue'

export default {
  name: 'App',
  components: {
    Main
  }
}
</script>

<style>
.ProseMirror:focus {
    outline: none;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #02C3BD;
  background-color: #04052E;
}
</style>
