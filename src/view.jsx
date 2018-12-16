import {h} from 'hyperapp';
import Meta from './components/meta.jsx';
import Layout from './components/layout.jsx';
import Router from './router.jsx';

import './view.css';

const View = (state, actions) =>  (
  <Layout>
    <Meta {...state.meta} />
    <Router />
  </Layout>
);

export default View;