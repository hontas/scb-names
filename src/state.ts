import { location } from "@hyperapp/router";

export type State = {
  location: Any,
  meta: {
    title: String,
    description: String
  },
  view: {
    message: String
  }
};

export const state:State = {
  location: location.state,
  meta: {
    title: 'Hyperapp',
    description: 'Test out hyperapp'
  },
  view: {
    message: ''
  }
};