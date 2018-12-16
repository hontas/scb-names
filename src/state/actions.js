import { location } from '@hyperapp/router';

export default {
  location: location.actions,
  getState: () => (state) => state,
  debug: () => (state) => console.log(state) // eslint-disable-line no-console
};
