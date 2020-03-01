<template>
  <div class="skillspage container">
    <b-container class="skillscontainer">
  <b-row>
    <b-col cols="6"  md="5" id="front-end" >
    <div class="skills-img-f">
      <b-row>
       <b-card-group deck >
      <b-card class="skills-img" img-alt="Card image" img-top>
         <img src="../assets/img/skills/html5.png" alt="" />
        <b-card-text>
          HTML
        </b-card-text>
      </b-card>
      <b-card class="skills-img" img-alt="Card image" img-top>
         <img src="../assets/img/skills/css.png" alt="" />
        <b-card-text>
          CSS
        </b-card-text>
      </b-card>
      <b-card class="skills-img" img-alt="Card image" img-top>
         <img src="../assets/img/skills/nuxt.png" alt="" />
        <b-card-text>
          NUXT
        </b-card-text>
      </b-card>
     </b-card-group>
      </b-row>
      <b-row>
       <b-card-group deck>
      <b-card class="skills-img" img-alt="Card image" img-top>
         <img src="../assets/img/skills/javascript.png" alt="" />
        <b-card-text>
          JAVA SCRIPT
        </b-card-text>
      </b-card>
      <b-card class="skills-img" img-alt="Card image" img-top>
         <img src="../assets/img/skills/sass.png" alt="" />
        <b-card-text>
          SASS
        </b-card-text>
      </b-card>
      <b-card class="skills-img" img-alt="Card image" img-top>
         <img src="../assets/img/skills/vuejs.png" alt="" />
        <b-card-text>
          VUE.JS
        </b-card-text>
      </b-card>
      </b-card-group>
      </b-row>
      <b-row>
       <b-card-group deck>
      <b-card class="skills-img" img-alt="Card image" img-top>
         <img src="../assets/img/skills/wordpress.png" alt="" />
        <b-card-text>
          WORDPRESS
        </b-card-text>
      </b-card>
      <!-- <b-card class="skills-img" img-alt="Card image" img-top>
         <img src="../assets/img/skills/sass.png" alt="" />
        <b-card-text>
          SASS
        </b-card-text>
      </b-card>
      <b-card class="skills-img" img-alt="Card image" img-top>
         <img src="../assets/img/skills/vuejs.png" alt="" />
        <b-card-text>
          VUE.JS
        </b-card-text>
      </b-card> -->
      </b-card-group>
      </b-row>
     </div>
    </b-col>
    <b-col cols="6"  md="5" id="back-end">
   <div class="skills-img-b">
     <row>
      <b-card-group deck>
     <b-card class="skills-img" img-alt="Card image" img-top>
         <img src="../assets/img/skills/csharp.png" alt="" />
        <b-card-text>
          C#
        </b-card-text>
      </b-card>
       <b-card class="skills-img" img-alt="Card image" img-top>
         <img src="../assets/img/skills/asp.png" alt="" />
        <b-card-text>
          ASP.NET
        </b-card-text>
      </b-card>
      <b-card class="skills-img" img-alt="Card image" img-top>
         <img src="../assets/img/skills/github.png" alt="" />
        <b-card-text>
          GIT
        </b-card-text>
      </b-card>
     </b-card-group>
      </row>
      <row>
      <b-card-group deck>
     <b-card class="skills-img" img-alt="Card image" img-top>
         <img src="../assets/img/skills/umbraco.png" alt="" />
        <b-card-text>
          UMBRACO
        </b-card-text>
      </b-card>
       <b-card class="skills-img" img-alt="Card image" img-top>
         <img src="../assets/img/skills/xamarin.png" alt="" />
        <b-card-text>
          XAMARIN
        </b-card-text>
      </b-card>
      <b-card class="skills-img" img-alt="Card image" img-top>
         <img src="../assets/img/skills/sql.jpg" alt="" />
        <b-card-text>
          SQL
        </b-card-text>
      </b-card>
     </b-card-group>
      </row>
      <row>
      <b-card-group deck>
     <b-card class="skills-img" img-alt="Card image" img-top>
         <img src="../assets/img/skills/strapi.png" alt="" />
        <b-card-text>
          STRAPI
        </b-card-text>
      </b-card>
       <!-- <b-card class="skills-img" img-alt="Card image" img-top>
         <img src="../assets/img/skills/asp.png" alt="" />
        <b-card-text>
          ASP.NET
        </b-card-text>
      </b-card>
      <b-card class="skills-img" img-alt="Card image" img-top>
         <img src="../assets/img/skills/github.png" alt="" />
        <b-card-text>
          GIT
        </b-card-text>
      </b-card> -->
     </b-card-group>
      </row>
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
