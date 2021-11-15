import { getNewsList, getJobsList, getAskList } from '../api';

export default {
  FETCH_NEWS(context) {
    getNewsList()
      .then(({ data }) => context.commit('SET_NEWS', data))
      .catch((err) => console.log(err));
  },
  FETCH_JOBS({ commit }) {
    getJobsList()
      .then(({ data }) => commit('SET_JOBS', data))
      .catch((err) => console.log(err));
  },
  FETCH_ASK(context) {
    getAskList()
      .then(({ data }) => context.commit('SET_ASK', data))
      .catch((err) => console.log(err));
  },
};

// {commit} 디스트럭쳐링을 이용할 수 있다.
