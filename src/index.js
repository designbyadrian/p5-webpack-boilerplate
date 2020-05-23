import Sketch from './Sketch';

require('./style.sass');

document.addEventListener('DOMContentLoaded', () => {
  const r = new Sketch(document.getElementById('sketch'));

  return r;
});
