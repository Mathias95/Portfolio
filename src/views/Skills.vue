<template>
  <div id="skillspage">
 <b-container  fluid="sm" class="skillscontainer">
  <b-row>
    <b-col cols="6"  md="5" id="front-end"  fluid="sm">
        <div class="skills-img-f">
        <div id="html5">
        <img class="img-responsive" src="../assets/img/skills/html5.png" alt="" />HTML5
      </div>
      <div id="css">
          <img
            class="img-responsive"
            src="../assets/img/skills/css.png"
            alt=""
          />CSS3
        </div>
        <div id="nuxt">
          <img
            class="img-responsive"
            src="../assets/img/skills/nuxt.png"
            alt=""
          />NUXT
        </div>
        <div id="javascript">
          <img
            class="img-responsive"
            src="../assets/img/skills/javascript.png"
            alt=""
          />JAVASCRIPT
        </div>
        <div id="sass">
          <img
            class="img-responsive"
            src="../assets/img/skills/sass.png"
            alt=""
          />SASS
        </div>
          <div id="vuejs">
          <img
            class="img-responsive"
            src="../assets/img/skills/vuejs.png"
            alt=""
          />VUE.JS
        </div>
         <div id="wordpress">
          <img
            class="img-responsive"
            src="../assets/img/skills/wordpress.png"
            alt=""
          />WORDPRESS
        </div>
    </div>
    </b-col>
    <b-col cols="6"  md="5" id="back-end">
    <div id="c">
       <img
            class="img-responsive"
            src="../assets/img/skills/csharp.png"
            alt=""
          />C#
    </div>
    <div id="asp">
          <img
            class="img-responsive"
            src="../assets/img/skills/asp.png"
            alt=""
          />ASP.NET
        </div>
        <div id="git">
          <img
            class="img-responsive"
            src="../assets/img/skills/github.png"
            alt=""
          />GIT
        </div>
        <div id="umbraco">
          <img
            class="img-responsive"
            src="../assets/img/skills/umbraco.png"
            alt=""
          />UMBRACO
        </div>
        <div id="xamarin">
          <img
            class="img-responsive"
            src="../assets/img/skills/xamarin.png"
            alt=""
          />XAMARIN
        </div>
          <div id="sql">
          <img
            class="img-responsive"
            src="../assets/img/skills/sql.jpg"
            alt=""
          />SQL
        </div>
         <div id="strapi">
          <img
            class="img-responsive"
            src="../assets/img/skills/strapi.png"
            alt=""
          />STRAPI
        </div>
    </b-col>
    <b-col cols="6" md="2">
       <div id="cv"  v-animate-css.hover ="'flash'">
      <a href ="https://drive.google.com/file/d/1ZqASnWeS5IfPXbFuIEf8-DuOqR2LtMvB/view?usp=sharing" target="_blank" ><img src="../assets/img/skills/resumepdf.png" alt="" /></a>
    </div>
    </b-col>
  </b-row>
</b-container>
    </div>
</template>

<script>
export default {
  name: 'LoadingExample'
}
</script>
