<template>
  <div>
    <p class="list" v-for="item in this.$store.state.jobs" :key="item.id">
      <a :href="item.url">{{ item.title }}</a>
      <small>{{ item.time_ago }}</small>
    </p>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch('FETCH_JOBS');
  },
};
</script>

<style scoped></style>
