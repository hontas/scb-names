import { location } from "@hyperapp/router";
import {State} from './state';

export const actions = {
  location: location.actions,
  meta: {
    title: (title) => () => ({
      title
    }),
    description: (description) => () => ({
      description
    })
  },
  view: {
    oninput: (e) => (state:State, actions) => ({
      message: e.target.value
    })
  },
  print: () => (state:State) => console.log(state)
};