<template>
  <div class="home">
    <Sidebar></Sidebar>
    <!-- <div class="nav">
      <h1>Markr.</h1>
      <router-link to="/typography">
        <h2>Typography</h2>
      </router-link>
      <router-link to="/router-linkssets">
        <h2>Assets</h2>
      </router-link>
    </div> -->
    <router-view id="router-view" />
  </div>
</template>

<script setup>
import Sidebar from "@/components/Sidebar.vue";

const API =
  process.env.ENV === "LOCAL" ? process.env.LOCAL_API : process.env.HOSTED_API;
// export default {
//   name: 'App',
//   components: {
//     Sidebar
//   }
// data (){
// }
</script>

<style>
@import url("https://markr-admin-server.vercel.app/api/brandguides/Johnny Walker/fonts");
@import url("http://localhost:3000/api/brandguides/Johnny Walker/fonts");
@import url("https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap");

@font-face {
  font-family: "Gilroy Extrabold";
  src: local("Gilroy Extrabold"), url(./assets/fonts/Gilroy-ExtraBold.otf);
}

@font-face {
  font-family: "Gilroy Light";
  src: local("Gilroy Light"), url(./assets/fonts/Gilroy-Light.otf);
}

:root {
  --main-accent-color: #e9baed;
  --main-primary-color: #191827;
  --test-color: v-bind("theme.color");
}

* {
  list-style: none;
  text-decoration: none;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Gilroy;
  -webkit-font-smoothing: antialiased;
  text-align: center;
  -moz-osx-font-smoothing: grayscale;
  font-family: Gilroy Light !important;
}

#app {
  background-color: #e4e4e4;
}

#router-view {
  background-color: #f1f2f4;
  width: 50%;
  margin: 0 auto;
}

.home {
  display: flex;
}

.page-title {
  font-size: 2rem;
}
</style>
