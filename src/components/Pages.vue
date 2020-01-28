<template>
<div>
    <div class="section-slider">
    <b-navbar-nav class="slider-nav">
        <b-nav-item to='#Profile' v-scroll-to="'#Profile'">01</b-nav-item>
        <b-nav-item to='#Skills' v-scroll-to="'#Skills'">02</b-nav-item>
        <b-nav-item to='#Portfolio' v-scroll-to="'#Portfolio'">03</b-nav-item>
        <b-nav-item to='#Contact' v-scroll-to="'#Contact'">04</b-nav-item>
    </b-navbar-nav>
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
        <div class="text-wr">
            <h1 class="title">Skills</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
        </div>
    </div>
    <div id="Portfolio" class="section">
        <div class="text-wr">
            <h1 class="title">Portfolio</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
        </div>
    </div>
    <div id="Contact" class="section">
        <div class="text-wr">
            <h1 class="title">Contact</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
        </div>
    </div>
</div>

</template>
