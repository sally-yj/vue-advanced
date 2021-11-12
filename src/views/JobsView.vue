<template>
  <div>
    <div class="list" v-for="item in this.$store.state.jobs" :key="item.id">
      {{ item.title }}
    </div>
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
