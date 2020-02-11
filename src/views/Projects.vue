<template>
<div class="animated zoomInDown delay-4s.click">
  <div class="Projects">
    <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
      <div class="hovereffect">
        <img
          class="img-responsive"
          src="../assets/img/mfdminiproject.jpg"
          alt=""
        />
        <div class="overlay">
          <a href="https://mfdminiproject.netlify.com/"></a>
        </div>
      </div>
    </div>
    <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
      <div class="hovereffect">
        <img class="img-responsive" src="../assets/img/prozero.jpg" alt="" />
        <div class="overlay">
          <a href="https://prozero.dk/"></a>
        </div>
      </div>
    </div>
    <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
      <div class="hovereffect">
        <img class="img-responsive" src="../assets/img/tuco.jpg" alt="" />
        <div class="overlay">
          <p>
            <a href="http://frontend.prozero.dk/"></a>
          </p>
        </div>
      </div>
    </div>
    <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
      <div class="hovereffect">
        <img class="img-responsive" src="../assets/img/tuco.jpg" alt="" />
        <div class="overlay">
          <p>
            <a href="http://frontend.prozero.dk/"></a>
          </p>
        </div>
      </div>
    </div>
    <div class="mprojects">
      <!-- <router-link class="" to="/MoreProjects">More Projects</router-link> -->
        <!-- <b-button variant="danger"><router-link class="" to="../MoreProjects">More Projects</router-link></b-button><br><br> -->
        <b-button variant="danger"><router-link class="" to="/MoreProjects">MoreProjects</router-link></b-button><br><br>
      <b-button variant="danger" onClick="location.href='/MoreProjects'" type="submit">MoreProjects</b-button><br><br>
   </div>
  </div>
   </div>
</template>
