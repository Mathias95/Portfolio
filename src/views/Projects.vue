<template>
  <div class="animated zoomInDown delay-4s.click">
    <div class="Projects container">
      <div class="row">
        <div class="col-12 col-xl-9 projects-wrapper">
          <div class="project-hovereffect" v-animate-css.hover="'bounce'">
            <a class="project-link" href="https://mfdminiproject.netlify.com/" target="_blank"
              ><img
                class="proimg-responsive"
                src="../assets/img/mfdminiproject.jpg"
                alt=""
            /></a>
          </div>

          <div class="project-hovereffect" v-animate-css.hover="'bounce'">
            <a class="project-link" href="http://frontend.prozero.dk/" target="_blank"
              ><img
                class="proimg-responsive"
                src="../assets/img/tuco.jpg"
                alt=""
            /></a>
          </div>

          <div class="project-hovereffect" v-animate-css.hover="'bounce'">
            <a class="project-link" href="https://prozero.dk/" target="_blank"
              ><img
                class="proimg-responsive"
                src="../assets/img/prozero.jpg"
                alt=""
            /></a>
          </div>

          <div class="project-hovereffect" v-animate-css.hover="'bounce'">
            <a
              class="project-link" href="https://github.com/theep1891/InventoryManagement"
              target="_blank"
              ><img
                class="proimg-responsive"
                src="../assets/img/ba_inventory.jpg"
                alt=""
            /></a>
          </div>
        </div>
        <div class="col-12 col-xl-3 projects-button">
          <div class="mprojects">
            <b-button variant="danger" v-animate-css.hover="'flash'"
              ><router-link class="mproject-txt" to="/MoreProjects"
                >More Projects</router-link
              ></b-button
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
