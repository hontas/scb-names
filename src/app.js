import {app} from 'hyperapp';
import { location } from "@hyperapp/router";

import {state} from './state';
import {actions} from './actions';
import View from './view.jsx';

window.__app = app(state, actions, View, document.body);
const unsubscribe = location.subscribe(__app.location);