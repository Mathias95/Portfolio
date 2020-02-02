<template>
<div>
    <div class="section-slider">
    <div class="slider-nav">
        <router-link class="slider-link" to='#Profile' v-scroll-to="'#Profile'">01</router-link>
        <router-link class="slider-link" to='#Skills' v-scroll-to="'#Skills'">02</router-link>
        <router-link class="slider-link" to='#Projects' v-scroll-to="'#Projects'">03</router-link>
        <router-link class="slider-link" to='#Contact' v-scroll-to="'#Contact'">04</router-link>
    </div>
</div>
  <div id="Profile" class="section">
        <div class="text-wr">
            <h1 class="title">
                <div class="title-top">Profile</div>
                <div class="title-tx">Section 1</div>
            </h1>
        </div>
    </div>
    <div id="Skills" class="section">
        <Skills/>
    </div>
    <div id="Projects" class="section">
      <Projects/>
    </div>
    <div id="Contact" class="section">
      <Contact/>
    </div>
</div>

</template>
<script>
import Contact from '@/views/Contact.vue'
import Projects from '@/views/Projects.vue'
import Skills from '@/views/Skills.vue'

export default {
  components: {
    Contact,
    Projects,
    Skills
  }
}
</script>
