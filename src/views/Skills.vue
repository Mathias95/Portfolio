<template>
  <div class="skillspage">
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-10">
          <div class="skills-wrapper row">
            <div class="skills-frontend col-6">
              <div class="row">
                <div class="skills-card col-sm-6 col-lg-4">
                  <img class="skills-icon" src="../assets/img/skills/wordpress.png" alt="" />
                  <p class="skills-text">WORDPRESS</p>
                </div>
                <div class="skills-card col-sm-6 col-lg-4">
                  <img class="skills-icon" src="../assets/img/skills/wordpress.png" alt="" />
                  <p class="skills-text">Javascript</p>
                </div>
                <div class="skills-card col-sm-6 col-lg-4">
                  <img class="skills-icon" src="../assets/img/skills/wordpress.png" alt="" />
                  <p class="skills-text">Javascript</p>
                </div>
                <div class="skills-card col-sm-6 col-lg-4">
                  <img class="skills-icon" src="../assets/img/skills/wordpress.png" alt="" />
                  <p class="skills-text">Javascript</p>
                </div>
              </div>
            </div>
            <div class="skills-backend col-6">
              <div class="row">
                <div class="skills-card col-sm-6 col-lg-4">
                  <img class="skills-icon" src="../assets/img/skills/wordpress.png" alt="" />
                  <p class="skills-text">WORDPRESS</p>
                </div>
                <div class="skills-card col-sm-6 col-lg-4">
                  <img class="skills-icon" src="../assets/img/skills/wordpress.png" alt="" />
                  <p class="skills-text">Javascript</p>
                </div>
                <div class="skills-card col-sm-6 col-lg-4">
                  <img class="skills-icon" src="../assets/img/skills/wordpress.png" alt="" />
                  <p class="skills-text">WORDPRESS</p>
                </div>
                <div class="skills-card col-sm-6 col-lg-4">
                  <img class="skills-icon" src="../assets/img/skills/wordpress.png" alt="" />
                  <p class="skills-text">Javascript</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="cv-wrapper col-12 col-md-2">
          <div id="cv" v-animate-css.hover="'flash'">
            <a
              href="https://drive.google.com/file/d/1ZqASnWeS5IfPXbFuIEf8-DuOqR2LtMvB/view?usp=sharing"
              target="_blank"
              ><img src="../assets/img/skills/resumepdf.png" alt=""
            /></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoadingExample'
}
</script>
