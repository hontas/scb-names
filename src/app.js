import { h, app } from 'hyperapp';
import { location } from '@hyperapp/router';

import state from './state/state';
import actions from './state/actions';

import Layout from './components/layout/layout.jsx';
import Router from './components/router.jsx';

import './app.css';

const View = (s, a) => (
  <Layout>
    <Router state={s} actions={a} />
  </Layout>
);

const main = app(state, actions, View, document.body);
main.getNames();
window.__app = main; // eslint-disable-line no-underscore-dangle
const unsubscribe = location.subscribe(window.__app.location); // eslint-disable-line
