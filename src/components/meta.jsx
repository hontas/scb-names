import {h} from 'hyperapp';

let lastPath;
export default ({ title = 'title', description = 'description' }) => {
  if (lastPath != location.pathname) {
    document.querySelector('title').textContent = title;
    document
      .querySelector('meta[name=description]')
      .setAttribute('content', description)
    lastPath = location.pathname
  }
};