<template>
  <div class="header">
    <router-link to="/news">News</router-link>
    <router-link to="/ask">Ask</router-link>
    <router-link to="/jobs">Jobs</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.header {
  background-color: #42b683;
  display: flex;
  padding: 8px;
}

.header a {
  color: #7de0b6;
  padding: 20px;
  text-decoration: none;
}
.header .router-link-exact-active {
  color: white;
  font-weight: bold;
}
</style>
