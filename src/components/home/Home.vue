<template>
  <div class="home-container">
    <div class="greeting" :class="{'greeting-leave': leave, 'enter': enter }">
      <div class="greeting-inside">
        <h1 class="greeting-text">
          Hi, I’m Tak.  Front-end creative developer.
        </h1>
        <div>
          <span class="greeting-text border"> | </span>
          <a class="greeting-text contact" href="mailto:takeshi@gmail.com">CONTACT</a>
        </div>
        <span class="block-reveal"></span>
      </div>
    </div>
    <div
      class="home-nav-wrapper works"
      :class="{'to-work': toWork, 'not-active-nav': toAbout, 'enter': enter }">
      <router-link to="/works">
        <div class="home-nav out">
          <img src="../../assets/img/assets/works_top.svg" alt="">
        </div>
        <div class="home-nav inside">
          <img src="../../assets/img/assets/works_bottom.svg" alt="">
        </div>
      </router-link>
    </div>
    <div
      class="home-nav-wrapper about"
      :class="{'to-about': toAbout, 'not-active-nav': toWork, 'enter': enter }">
      <router-link to="/about">
        <div class="home-nav out">
          <img src="../../assets/img/assets/about_top.svg" alt="">
        </div>
        <div class="home-nav inside">
          <img src="../../assets/img/assets/about_bottom.svg" alt="">
        </div>
      </router-link>
    </div>
    <div
      class="home-wrapper"
      :class="{'home-wrapper-leave': leave, 'home-wrapper-enter': enter }">
      <div class="inside-block one"></div>
      <div class="inside-block two"></div>
      <div class="inside-block three"></div>
      <div class="inside-block four"></div>
      <div class="inside-block five"></div>
      <div class="home-wrapper-inside">
        <div class="home-name-images home-t">
          <div class="collage-wrap">
            <img
              class="rose collage"
              src="../../assets/img/assets/rose.png"
              alt=""
              id="rose">
          </div>
          <div class="svg-wrapper" id="nameT">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 210.5 315">
              <polygon
                id="pol-t"
                class="svg-name t"
                points="181 0 113.5 0 0 0 52 97 113.5 97 113.5 315 210.5 315 210.5 0 181 0"
              ></polygon>
              <clipPath id="t">
                <use xlink:href="#pol-t"></use>
              </clipPath>
              <image
                clip-path="url(#t)"
                class="svg-inside-image"
                xlink:href="../../assets/img/assets/bg_blue.jpg"></image>
            </svg>
          </div>
        </div>
        <div class="home-name-images home-a">
          <!--<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 234.4 203">-->
            <!--<polygon class="svg-name a" points="0 203 234.4 203 117.2 0 0 203"></polygon>-->
          <!--</svg>-->
          <app-triangle/>
        </div>
        <div class="home-name-images home-k">
          <img class="planet collage" src="../../assets/img/assets/planet.png" alt="" id="planet">
          <img class="women collage" src="../../assets/img/assets/women.png" alt="" id="women">
          <div class="svg-wrapper" id="nameK">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 181 316">
              <polygon
                id="pol-k"
                class="svg-name k"
                points="181 0 0 0 0 1 0 311 0 316 180.7 316 89.56 157.12 181 0"
              ></polygon>
              <clipPath id="k">
                <use xlink:href="#pol-k"></use>
              </clipPath>
              <image
                class="svg-inside-image"
                clip-path="url(#k)"
                height="100%"
                xlink:href="../../assets/img/assets/bg_red.jpg">
              </image>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { assignAnimation, getMouse, interactiveTAK } from '../../utils/homeMouseOver';
import Triangle from './Triangle';

export default {
  data() {
    return {
      leave: false,
      toAbout: false,
      toWork: false,
      enter: false,
    };
  },
  methods: {
    reset() {
      this.leave = false;
      this.toAbout = false;
      this.toWork = false;
    },
  },
  mounted() {
    this.enter = true;
    assignAnimation();
    window.addEventListener('mousemove', getMouse, false);
    interactiveTAK();
  },
  beforeRouteLeave(to, from, next) {
    this.leave = true;
    if (to.path === '/about') {
      this.toAbout = true;
    } else if (to.path === '/works') {
      this.toWork = true;
    }
    setTimeout(() => {
      next();
      this.reset();
    }, 1500);
  },
  components: {
    appTriangle: Triangle,
  },
};

</script>

<style scoped lang="scss">
  .home-wrapper-leave, .greeting-leave {
    animation: home-leave forwards;
    animation-duration: 0.3s;
  }
  .hidden {
    opacity: 0;
  }
  .greeting {
    font-size: 16px;
    margin: 50px auto 0;
    text-align: center;
    .greeting-inside {
      position: relative;
      overflow: hidden;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      text-align: center;
    }
    .greeting-text {
      font-size: 16px;
      font-weight: 200;
      position: relative;
      opacity: 0;
    }
    .border {
      margin: 0 20px;
    }
    .block-reveal {
      position: absolute;
      top: 0;
      right: 100%;
      width: 100%;
      height: 100%;
      background: black;
    }
    &.enter {
      /*animation: greeting-enter 1s linear forwards 3.5s ;*/
      .greeting-text {
        animation: greeting-text-enter 0.1s forwards 5.25s
      }
      .block-reveal {
        animation: greeting-enter 1.5s ease-in-out forwards 4.5s
      }
    }
  }
  @keyframes greeting-text-enter {
    to {
      opacity: 1;
    }
  }
  @keyframes greeting-enter {
    from {
      right: 100%;
    }
    50% {
      right: 0;
    }
    to {
      right: -100%;
    }
  }

  .home-wrapper {
    position: absolute;
    overflow: hidden;
    top: 12%;
    left: 8%;
    right: 8%;
    bottom: 12%;
    height: 76%;
    width: 84%;
    .inside-block {
      position: absolute;
      width: 20%;
      height: 100%;
      background: $beige;
      transform: translateY(100%);
      &.one{
        left: 0;
      }
      &.two{
        left: 20%;
      }
      &.three{
        left: 40%;
      }
      &.four{
        left: 60%;
      }
      &.five{
        left: 80%;
      }
    }
  }
  .home-wrapper-enter {
    .inside-block {
      &.one{
        animation: blockUp 1s ease-out forwards 2s;
      }
      &.two{
        animation: blockUp 1s ease-out forwards 2.1s;
      }
      &.three{
        animation: blockUp 1s ease-out forwards 2.15s;
      }
      &.four{
        animation: blockUp 1s ease-out forwards 2.18s;
      }
      &.five{
        animation: blockUp 1s ease-out forwards 2.2s;
      }
    }
    .svg-name {
      animation: svg-draw 3s linear forwards 0.3s;
    }
    .svg-inside-image {
      animation: fade-in 1s linear forwards 2s ;
    }
    .svg-wrapper {
      &:after {
        animation: fade-in 1s linear forwards 2.5s ;
      }
    }
    .collage {
      animation: fade-in 1s linear forwards 4.5s ;
    }
  }
  @keyframes blockUp {
    from {
      transform: translateY(100%);
    }
    to {
      transform: translateY(0);
    }
  }
  @keyframes svg-draw {
    from {
      stroke-dashoffset: 2000;
      opacity: 1;
    }
    80% {
      stroke-dashoffset: 0;
    }
    80% {
      opacity: 1;
    }
    to {
      stroke-dashoffset: 0;
      opacity: 0;
    }
  }
  .home-nav-wrapper{
    &.enter {
      &.works {
        animation: workEnter .5s ease-out forwards 3s;
        /*.home-nav.inside {*/
          /*animation: insideUp 4s linear .5s;*/
        /*}*/
        /*.home-nav.out {*/
          /*animation: outDown 4s ease-in .5s;*/
        /*}*/
      }
      &.about {
        animation: aboutEnter .5s ease-out forwards 3s;
        /*.home-nav.inside {*/
          /*animation: outDown 4s linear .5s;*/
        /*}*/
        /*.home-nav.out {*/
          /*animation: insideUp 4s linear .5s;*/
        /*}*/
      }
    }
  }
  @keyframes workEnter {
    to {
      top: calc(52% + 128px);
    }
  }
  @keyframes insideUp {
    from {
      transform: translateX(0);
    }
    95% {
      transform: translateX(0);
    }
    to {
      transform: translateX(15px);
    }
  }
  @keyframes outDown {
    from {
      transform: translateX(0);
    }
    95% {
      transform: translateX(0);
    }
    to {
      transform: translateX(-15px);
    }
  }
  @keyframes aboutEnter {
    to {
      top: calc(44% - 116px);
    }
  }

  .home-wrapper-inside {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
  /* =====  nav  ====== */
  .home-nav {
    height: 26px;
    img {
      height: 100%;
    }
  }

  .home-nav-wrapper {
    z-index: 1000;
    position: absolute;
    transform: rotate(-90deg);
    cursor: pointer;
    &.works {
      top: -500px;
      left: calc(8% - 26px);
      transform-origin: 0 0;
      .inside, .out {
        transition: all 0.4s ease;
      }
      .inside {
        padding-left: 2.2%;
        transform: translateX(15px);
      }
      .out {
        transform: translateX(-15px);
      }
      &.to-work {
        animation: toWork forwards;
        animation-duration: 1.4s;
        .out, .inside {
          overflow: hidden;
        }
        .inside {
          padding-left: 2.4%;
          animation: work-nav-inside-move forwards;
          animation-duration: 0.7s;
          img {
            animation: home-nav-inside-leave forwards;
            animation-delay: 1.2s;
            animation-duration: 0.3s;
          }
        }
        .out {
          animation: work-nav-outside-move forwards;
          animation-duration: 0.7s;
          img {
            animation: home-nav-outside-leave forwards;
            animation-delay: 1.2s;
            animation-duration: 0.3s;
          }
        }
      }
    }
    &.about {
      top: calc(100% + 200px);
      right: calc(8% - 26px);
      transform-origin: 100% 100%;
      .inside, .out {
        transition: all 0.4s ease;
      }
      .inside {
        margin-left: -3.8%;
        transform: translateX(-15px);
      }
      .out {
        transform: translateX(15px);
      }
      &.to-about {
        animation: toAbout forwards;
        animation-duration: 1.4s;
        .out, .inside {
          overflow: hidden;
        }
        .inside {
           padding-left: -3.6%;
           animation: about-nav-inside-move forwards;
           animation-duration: 0.7s;
           img {
             animation: home-nav-inside-leave forwards;
             animation-delay: 1.2s;
             animation-duration: 0.3s;
           }
         }
        .out {
          animation: about-nav-outside-move forwards;
          animation-duration: 0.7s;
          img {
            animation: home-nav-outside-leave forwards;
            animation-delay: 1.2s;
            animation-duration: 0.3s;
          }
        }
      }
    }
    &:hover {
      .out, .inside {
        transform: translateX(0);
      }
    }
    &.not-active-nav {
      .inside {
        overflow: hidden;
        img {
          animation: home-nav-inside-leave forwards;
          animation-duration: 0.3s;
        }
      }
      .out {
        overflow: hidden;
        img {
          animation: home-nav-outside-leave forwards;
          animation-duration: 0.3s;
        }
      }
    }
  }

  /* =====  SVG  ====== */
  .home-name-images {
    width: 320px;
    height: 400px;
    position: relative;
    z-index: 100;
    transform-style: preserve-3d;
    perspective: 1000px;
    &.home-a {
      width: 500px;
    }
    .svg-wrapper {
      width: 100%;
      height: 100%;
      svg {
        height: 100%;
        .svg-name {
          stroke: black;
          stroke-width: 10px;
          fill-opacity: 0;
          stroke-dasharray: 2000;
          stroke-dashoffset: 2000;
        }
      }
    }
  }
  .svg-inside-image {
    opacity: 0;
    transition: all 0.8s ease-in;
  }
  /*.home-wrapper-enter {*/
    /*.svg-wrapper {*/
      /*animation: takAppear .5s ease-in forwards 0.4s;*/
    /*}*/
  /*}*/
  svg {
    z-index: 10;
  }
  .collage-wrap {
    overflow: hidden;
    img {
      width: 100%;
    }
  }
  .collage {
    opacity: 0;
    position: absolute;
    z-index:-1;
  }

  /* =====  T  ====== */
  .home-t {
    // margin-right: 100px;
    text-align: right;
    position: relative;
    .svg-wrapper {
      &:after {
        opacity: 0;
        content: url("../../assets/img/assets/t_shadow.png");
        position: absolute;
        width: 100%;
        height: 100%;
        top: -10%;
        left: 0;
        z-index: -2;
      }
    }
  }
  /* =====  A ====== */
  .home-a {
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      width: 54%
    }
  }
  /* =====  K  ====== */
  .home-k {
    // margin-left: 100px;
    .svg-wrapper {
      &:after {
        opacity: 0;
        content: url("../../assets/img/assets/k_shadow.png");
        position: absolute;
        width: 100%;
        height: 100%;
        top: -10%;
        left: -10%;
        z-index: -2;
      }
    }
  }
  .rose {
    width: 285px;
    top: 68%;
    right: -8%;
  }
  .planet {
    width: 225px;
    bottom: calc(100% - 130px);
    left: -130px;
  }
  .women {
    height: 180px;
    position: absolute;
    top: 76%;
    right: -14%;
  }

</style>
