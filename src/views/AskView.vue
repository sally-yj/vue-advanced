<template>
  <div>
    <div class="list" v-for="item in fetchedAsk" :key="item.id">
      {{ item.title }}
    </div>
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
