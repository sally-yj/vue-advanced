import axios from 'axios';

const config = {
  baseUrl: 'https://api.hnpwa.com/v0',
};

const getNewsList = () => {
  return axios.get(`${config.baseUrl}/news/1.json`);
};

const getAskList = () => {
  return axios.get(`${config.baseUrl}/ask/1.json`);
};

const getJobsList = () => {
  return axios.get(`${config.baseUrl}/jobs/1.json`);
};

export { getNewsList, getAskList, getJobsList };
