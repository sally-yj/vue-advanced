<template>
  <div>
    <p class="list" v-for="item in fetchedAsk" :key="item.id">
      <a :href="item.url">{{ item.title }}</a>
      <small>{{ item.time_ago }} by {{ item.user }}</small>
    </p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      fetchedAsk: 'fetchedAsk',
    }),
  },
  // ...mapState({
  //   ask: (state) => state.ask,
  // }),
  created() {
    this.$store.dispatch('FETCH_ASK');
  },
};
</script>

<style scoped></style>
