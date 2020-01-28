<template>
  <div>
    <div class="navbar-wrapper">
      <!-- <header>
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
      </header> -->
      <b-navbar
        toggleable="lg"
        type="dark"
        class="main_bar"
        id="main_bar"
        fixed="top"
      >
        <b-navbar-brand to="/">
          <img
            class="header_logo"
            src="../assets/img/theep-logo-1.jpg"
            alt=""
          />
        </b-navbar-brand>

        <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>

        <b-collapse id="nav-text-collapse" is-nav>
          <b-navbar-nav class="ml-auto menu-items">
            <b-nav-item to="#Profile" v-scroll-to="'#Profile'"
              >Profile</b-nav-item
            >
            <b-nav-item to="#Skills" v-scroll-to="'#Skills'">Skills</b-nav-item>
            <b-nav-item to="#Portfolio" v-scroll-to="'#Portfolio'"
              >Portfolio</b-nav-item
            >
            <b-nav-item to="#Contact" v-scroll-to="'#Contact'"
              >Contact</b-nav-item
            >
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
//
<script>
// window.onscroll = function() {myfunction()};

// var navbar = document.getelementbyid("main_bar");
// var sticky = navbar.offsettop;

// function myfunction() {
//   if (window.pageyoffset >= sticky) {
//     navbar.classlist.add("sticky")
//   } else {
//     navbar.classlist.remove("sticky");
//   }
// }
//
</script>
