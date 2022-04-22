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
    <router-view />
  </div>
</template>

<script setup>
import Sidebar from "@/components/Sidebar.vue";

// export default {
//   name: 'App',
//   components: {
//     Sidebar
//   }
// data (){
// }
</script>

<style>
:root {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  text-decoration: none;
  list-style: none;
}

@font-face {
  font-family: "Gilroy Extrabold";
  src: local("Gilroy Extrabold"), url(./assets/fonts/Gilroy-ExtraBold.otf);
}

@font-face {
  font-family: "Gilroy Light";
  src: local("Gilroy Light"), url(./assets/fonts/Gilroy-Light.otf);
}

#app {
  font-family: Avenir,
    Helvetica,
    Arial,
    sans-serif;
  text-align: center;
}

.home {
  display: flex;
}
</style>
