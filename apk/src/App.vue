<template>
  <div id="app">
    <Header/>
    <router-view path="$router.key" />
  </div>
</template>

<script>
import './style/reset.css'
import Header from './components/Header.vue'
export default {
  name: 'App',
  components: {
    Header
  }
}
</script>
