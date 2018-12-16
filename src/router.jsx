import {h} from 'hyperapp';
import { Route } from "@hyperapp/router";

import Home from './components/home.jsx';
import About from './components/about.jsx';
import MediaSessionApi from './components/mediaSessionApi.jsx';

export default () => (
  <main>
    <Route path="/" render={Home} />
    <Route path="/about" render={About} />
    <Route path="/media-session-api" render={MediaSessionApi} />
  </main>
);