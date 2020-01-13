<template>
  <div>
    <div class="navbar-wrapper">
      <header>
        <div class="container-fluid top_bar">
          <div class="row">
            <div class="col">
               <ul class="header-contact">
                <li><font-awesome-icon :icon="['fas', 'mobile-alt']"/><a href="tel:+45 71170470">+45 7117 0470</a></li>
                <li><font-awesome-icon :icon="['fas', 'envelope']"/><a href="mailto:someone@example.com?Subject=Hello%20again">theep1891@gmail.com</a></li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      <b-navbar toggleable="lg" type="dark" class="main_bar">
         <b-navbar-brand href="/">
          <img class="header_logo" src="../assets/img/theep-logo.png" alt="">
        </b-navbar-brand>

        <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>

        <b-collapse id="nav-text-collapse" is-nav>
          <b-navbar-nav class="ml-auto menu-items">
            <b-nav-item> <router-link to v-scroll-to="'/'">Profile</router-link></b-nav-item>
            <b-nav-item> <router-link to v-scroll-to="'#Skills'">Skills</router-link></b-nav-item>
            <b-nav-item> <router-link to v-scroll-to="'#Portfolio'">Portfolio</router-link></b-nav-item>
            <b-nav-item> <router-link to v-scroll-to="'#Contact'">Contact</router-link></b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>
