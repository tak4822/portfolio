let rose;
let planet;
let women;
const beepos = { x: 0, y: 0 };
const mouse = { x: 0, y: 0 };
export const getMouse = (e) => {
  mouse.x = e.pageX;
  mouse.y = e.pageY;
};

export const assignAnimation = () => {
  const requestAnimationFrame = window.requestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.msRequestAnimationFrame;
  window.requestAnimationFrame = requestAnimationFrame;
  rose = document.getElementById('rose');
  planet = document.getElementById('planet');
  women = document.getElementById('women');
};

export const interactiveTAK = () => {
  const distX = (((window.innerWidth / 2) - mouse.x) / 500) - (beepos.x / 20);
  const distY = (((window.innerHeight / 2) - mouse.y) / 500) - (beepos.y / 20);
  beepos.x += distX;
  beepos.y += distY;
  rose.style = `transform:translate(${-beepos.x}px, ${beepos.y}px); -webkit-transform: translate(${-beepos.x}px, ${beepos.y}px); -moz-transform: translate(${-beepos.x}px, ${beepos.y}px);`;
  planet.style = `transform: translate(${beepos.x}px, ${-beepos.y}px); -webkit-transform: translate(${beepos.x}px, ${-beepos.y}px); -moz-transform: translate(${beepos.x}px, ${-beepos.y}px);`;
  women.style = `transform:translate(${-beepos.x}px, ${-beepos.y}px); -webkit-transform: translate(${-beepos.x}px, ${-beepos.y}px); -moz-transform: translate(${-beepos.x}px, ${-beepos.y}px);`;
  requestAnimationFrame(interactiveTAK);
};
