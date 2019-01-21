import { location } from '@hyperapp/router';
import * as scb from '../api/scb';

export default {
  location: location.actions,
  getNamesByYear: (year) => (state, actions) =>
    scb.getNewbornNameTopListByYear(year).then((res) => {
      actions.setNames(res);
    }),
  setNames: (names) => ({ names }),
  getNames: () => (state, actions) =>
    scb.getNewbornNameTopList().then((res) => {
      const years = res.variables.find(({ code }) => code === 'Tid');
      actions.setYears(years.values);
    }),
  setYears: (years) => (state) => ({
    ...state,
    years
  }),
  getState: () => (state) => state,
  debug: () => (state) => console.log(state) // eslint-disable-line no-console
};
