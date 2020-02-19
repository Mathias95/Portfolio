<template>
<div class="animated zoomInDown delay-4s.click">
  <div class="Projects">
    <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
      <div class="project-hovereffect" v-animate-css.hover="'bounce'">
        <a href="https://mfdminiproject.netlify.com/" target="_blank"><img class="proimg-responsive" src="../assets/img/mfdminiproject.jpg" alt="" /></a>
        <!-- <div class="overlay">
          <a href="https://mfdminiproject.netlify.com/"></a>
        </div> -->
      </div>
    </div>
    <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
      <div class="project-hovereffect"  v-animate-css.hover="'bounce'">
          <a href="https://prozero.dk/" target="_blank"><img class="proimg-responsive" src="../assets/img/prozero.jpg" alt="" /></a>
        <!-- <div class="overlay">
          <a href="https://prozero.dk/"></a>
        </div> -->
      </div>
    </div>
    <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
      <div class="project-hovereffect"  v-animate-css.hover="'bounce'">
        <a href="http://frontend.prozero.dk/"  target="_blank"><img class="proimg-responsive" src="../assets/img/tuco.jpg" alt="" /></a>
        <!-- <div class="overlay">
          <p>
            <a href="http://frontend.prozero.dk/"></a>
          </p>
        </div> -->
      </div>
    </div>
    <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12"  v-animate-css.hover="'bounce'">
      <div class="project-hovereffect">
        <a href="https://github.com/theep1891/InventoryManagement"  target="_blank"><img class="proimg-responsive" src="../assets/img/ba_inventory.jpg" alt="" /></a>
        <!-- <div class="overlay">
          <p>
            <a href="http://frontend.prozero.dk/"></a>
          </p>
        </div> -->
      </div>
    </div>
    <div class="mprojects"  >
        <!-- <b-button variant="danger"><router-link class="" to="../MoreProjects">More Projects</router-link></b-button><br><br> -->
        <b-button variant="danger" v-animate-css.hover="'flash'"><router-link class="mproject-txt" to="/MoreProjects">More Projects</router-link></b-button><br><br>
      <!-- <b-button variant="danger" onClick="location.href='/MoreProjects'" type="submit">MoreProjects</b-button><br><br> -->
   </div>
  </div>
   </div>
</template>
