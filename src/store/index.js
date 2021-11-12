import Vue from 'vue';
import Vuex from 'vuex';
import { getNewsList, getJobsList, getAskList } from '../api';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    news: [],
    jobs: [],
    ask: [],
  },
  getters: {
    fetchedAsk(state) {
      return state.ask;
    },
  },
  mutations: {
    SET_NEWS(state, payload) {
      state.news = payload;
    },
    SET_JOBS(state, payload) {
      state.jobs = payload;
    },
    SET_ASK(state, payload) {
      state.ask = payload;
    },
  },
  actions: {
    FETCH_NEWS(context) {
      getNewsList()
        .then(({ data }) => context.commit('SET_NEWS', data))
        .catch((err) => console.log(err));
    },
    FETCH_JOBS(context) {
      getJobsList()
        .then(({ data }) => context.commit('SET_JOBS', data))
        .catch((err) => console.log(err));
    },
    FETCH_ASK(context) {
      getAskList()
        .then(({ data }) => context.commit('SET_ASK', data))
        .catch((err) => console.log(err));
    },
  },
});
