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
    <Header/>
     <Pages/>
  </div>
</template>
<script>
// @ is an alias to /src
import Pages from '@/components/Pages.vue'
import Header from '@/components/Header.vue'
// import MoreProjects from '@/views/MoreProjects.vue'

export default {
  components: {
    Pages,
    Header
    // MoreProjects
  }
}
</script>

<style lang="scss">
  //Import global scss styling
  @import "./assets/scss/main";
</style>
