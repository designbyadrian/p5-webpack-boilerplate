import Renderer from './renderer';

require('./stylesheets/style.sass');

document.addEventListener('DOMContentLoaded', () => {
  const r = new Renderer(document.getElementById('sketchHolder'));

  return r;
});
