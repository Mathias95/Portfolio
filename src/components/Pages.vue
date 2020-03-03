<template>
  <div>
    <div id="maincontent">
      <div class="section-slider">
        <div class="slider-nav animated zoomInDown delay-15s">
          <router-link
            class="slider-link "
            to="#Profile"
            v-scroll-to="'#Profile'"
            title="Profile"
            >01</router-link
          >
          <router-link
            class="slider-link"
            to="#Skills"
            v-scroll-to="'#Skills'"
            title="Skills"
            >02</router-link
          >
          <router-link
            class="slider-link"
            to="#Projects"
            v-scroll-to="'#Projects'"
            title="Projects"
            >03</router-link
          >
          <router-link
            class="slider-link"
            to="#Contact"
            v-scroll-to="'#Contact'"
            title="Contact"
            >04</router-link
          >
        </div>
      </div>
      <div id="mainpage">
        <div id="Profile" class="section">
          <Profile />
        </div>
        <div id="Skills" class="section ">
          <Skills />
        </div>
        <div id="Projects" class="section">
          <Projects />
        </div>
        <div id="Contact" class="section">
          <Contact />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Contact from '@/views/Contact.vue'
import Projects from '@/views/Projects.vue'
import Skills from '@/views/Skills.vue'
import Profile from '@/views/Profile.vue'

export default {
  components: {
    Contact,
    Projects,
    Skills,
    Profile
  }
}
</script>
