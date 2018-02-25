
<template>
  <div id="container"></div>
</template>

<script>
/* eslint-disable one-var, one-var-declaration-per-line, no-multi-assign */

const ROWS = 200;
const COLS = 300;
const NUM_PARTICLES = (ROWS * COLS),
  THICKNESS = 80 ** 2,
  SPACING = 3,
  COLOR = 220,
  DRAG = 0.95,
  EASE = 0.25;

let container,
  canvas,
  bounds,
  stats,
  list,
  ctx,
  tog,
  // man,
  dx, dy,
  mx, my,
  d, t, f,
  a, b,
  i, n,
  w, h,
  p
;

const particle = {
  vx: 0,
  vy: 0,
  x: 0,
  y: 0,
};

function init() {
  container = document.getElementById('container');
  canvas = document.createElement('canvas');
  ctx = canvas.getContext('2d');
  // man = false;
  tog = true;
  list = [];

  w = canvas.width = (COLS * SPACING);
  h = canvas.height = (ROWS * SPACING);

  // container.style.marginLeft = `${Math.round(w * -0.5)}px`;
  // container.style.marginTop = `${Math.round(h * -0.5)}px`;

  for (i = 0; i < NUM_PARTICLES; i += 1) {
    p = Object.create(particle);
    p.x = p.ox = (SPACING * (i % COLS));
    p.y = p.oy = (SPACING * Math.floor(i / COLS));

    list[i] = p;
  }

  container.addEventListener('mousemove', (e) => {
    bounds = container.getBoundingClientRect();
    mx = e.clientX - bounds.left;
    my = e.clientY - bounds.top;
    // man = true;
  });
  if (typeof Stats === 'function') {
    document.body.appendChild((stats = new Stats()).domElement); // eslint-disable-line no-undef
  }
  container.appendChild(canvas);
}

function step() {
  if (stats) stats.begin();
  if (tog = !tog) { // eslint-disable-line no-cond-assign
    // if (!man) {
    //   t = +new Date() * 0.001;
    //   mx = (w * 0.5) + (Math.cos(t * 2.1) * Math.cos(t * 0.9) * w * 0.45);
    //   my = (h * 0.5) + (Math.sin(t * 3.2) * Math.tan(Math.sin(t * 0.8)) * h * 0.45);
    // }

    for (i = 0; i < NUM_PARTICLES; i += 1) {
      p = list[i];
      d = ((dx = mx - p.x) * dx) + ((dy = my - p.y) * dy);
      f = -THICKNESS / d;

      if (d < THICKNESS) {
        t = Math.atan2(dy, dx);
        p.vx += f * Math.cos(t);
        p.vy += f * Math.sin(t);
      }

      p.x += (p.vx *= DRAG) + ((p.ox - p.x) * EASE);
      p.y += (p.vy *= DRAG) + ((p.oy - p.y) * EASE);
    }
  } else {
    b = (a = ctx.createImageData(w, h)).data;

    for (i = 0; i < NUM_PARTICLES; i += 1) {
      p = list[i];
      b[n = (Math.floor(p.x) + (Math.floor(p.y) * w)) * 4] = b[n + 1] = b[n + 2] = COLOR;
      b[n + 3] = 255;
    }
    ctx.putImageData(a, 0, 0);
  }
  if (stats) stats.end();
  requestAnimationFrame(step);
}

export default {
  mounted() {
    init();
    step();
  },
};

</script>
