<template>
  <div class="home">
    <div class="nav">
      <h1>Hello world</h1>
      <router-link to="/typography">
        <h2>Typography</h2>
      </router-link>
      <router-link to="/assets">
        <h2>Assets</h2>
      </router-link>
    </div>
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
}

.home {
  display: flex;
}
</style>
