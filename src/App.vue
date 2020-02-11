<template>
  <!-- <div id="app">
    <div id="nav">
      <router-link to="/">Profile</router-link> |
      <router-link to="/Skills">Skills</router-link> |
       <router-link to="/Portfolio">Portfolio</router-link> |
      <router-link to="/Contact">Contact</router-link>
    </div>
    <router-view/>
  </div> -->
  <div class="default_layout">
    <Header />
    <router-view />
  </div>
</template>
<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'

export default {
  components: {
    Header
  }
}
</script>

<style lang="scss">
//Import global scss styling
@import "./assets/scss/main";
</style>
