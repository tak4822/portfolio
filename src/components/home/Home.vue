<template>
  <div class="home-container">
    <div class="greeting" :class="{'greeting-leave': leave, 'enter': enter }">
      <div class="greeting-inside">
        <h1 class="greeting-text">
          Hi, I’m Tak.  Front-end creative developer.
        </h1>
        <div>
          <span class="greeting-text border"> | </span>
          <a class="greeting-text contact" href="mailto:tkc4822@gmail.com">CONTACT</a>
        </div>
        <span class="block-reveal"></span>
      </div>
    </div>
    <div
      class="home-nav-wrapper works"
      :class="{'to-work': toWork, 'not-active-nav': toAbout, 'enter': enter }">
      <router-link to="/works">
        <div class="out-in">
          <div class="home-nav out">
            <img src="../../assets/img/assets/works_top.svg" alt="">
          </div>
        </div>
        <div class="inside-in">
          <div class="home-nav inside">
            <img src="../../assets/img/assets/works_bottom.svg" alt="">
          </div>
        </div>
      </router-link>
    </div>
    <div
      class="home-nav-wrapper about"
      :class="{'to-about': toAbout, 'not-active-nav': toWork, 'enter': enter }">
      <router-link to="/about">
        <div class="out-in">
          <div class="home-nav out">
            <img src="../../assets/img/assets/about_top.svg" alt="">
          </div>
        </div>
        <div class="inside-in">
          <div class="home-nav inside">
            <img src="../../assets/img/assets/about_bottom.svg" alt="">
          </div>
        </div>
      </router-link>
    </div>
    <div
      class="home-wrapper"
      :class="{
        'home-wrapper-leave': leave,
        'home-wrapper-enter': enter,
        'finishEnter': finishEnter }">
      <div class="inside-block one"></div>
      <div class="inside-block two"></div>
      <div class="inside-block three"></div>
      <div class="inside-block four"></div>
      <div class="inside-block five"></div>
      <div class="inside-block six"></div>
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
            <img class="svg-inside-image t" src="../../assets/img/assets/home_t.png" alt="">
          </div>
        </div>
        <div class="home-name-images home-a">
          <app-triangle v-if="enter"/>
        </div>
        <div class="home-name-images home-k">
          <img class="planet collage" src="../../assets/img/assets/planet.png" alt="" id="planet">
          <img class="women collage" src="../../assets/img/assets/women.png" alt="" id="women">
          <div class="svg-wrapper" id="nameK">
            <img class="svg-inside-image t" src="../../assets/img/assets/home_k.png" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { assignAnimation, getMouse, interactiveTAK } from '../../utils/homeMouseOver';
import Triangle from './Triangle';
import preloadImg from '../../utils/preload';
import image1 from '../../assets/img/assets/home_t.png';
import image2 from '../../assets/img/assets/home_k.png';
import image3 from '../../assets/img/assets/t_shadow.png';
import image4 from '../../assets/img/assets/k_shadow.png';
import '../works/Works';
import '../about/About';

export default {
  data() {
    return {
      finishEnter: false,
      leave: false,
      toAbout: false,
      toWork: false,
    };
  },
  computed: {
    ...mapGetters({
      enter: 'enter',
    }),
  },
  methods: {
    reset() {
      this.leave = false;
      this.toAbout = false;
      this.toWork = false;
    },
    ...mapActions({
      finishPreloading: 'finishPreloading',
    }),
  },
  beforeRouteEnter(to, from, next) {
    if (window.innerWidth <= 1024) {
      next('/mobile');
    } else {
      next();
    }
  },
  mounted() {
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
  created() {
    const imageArr = [image1, image2, image3, image4];
    Promise.all(imageArr.map(img => preloadImg(img)))
      .then(() => {
        this.finishPreloading();
        setTimeout(() => {
          this.finishEnter = true;
        }, 4000);
      });
  },
  components: {
    appTriangle: Triangle,
  },
};

</script>

<style scoped lang="scss">
  .home-container {
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: hidden;
  }
  .home-wrapper-leave, .greeting-leave {
    animation: home-leave forwards;
    animation-duration: 0.3s;
  }
  .hidden {
    opacity: 0;
  }
  .home-wrapper-inside {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  /* =====  SVG  ====== */
  .home-name-images {
    width: 320px;
    height: 400px;
    position: relative;
    z-index: 100;
    @media screen and (max-width: 1400px) {
      width: 250px;
      height: 300px;
    }
    @media screen and (max-width: 1100px) {
      width: 200px;
      height: 250px;
    }
    &.home-a {
      width: 36%;
    }
    .svg-wrapper {
      width: 100%;
      height: 100%;
      position: relative;
      overflow: hidden;
      svg {
        fill-opacity: 0;
        height: 100%;
      }
      &::after {
        content: '';
        background-size: contain;
        background-repeat: no-repeat;
        position: absolute;
        top: -5%;
        left: -5%;
        width: 120%;
        height: 120%;
        z-index: -2;
        opacity: 0;
      }
    }
  }
  .svg-inside-image {
    height: 100%;
    transform: translateY(110%);
  }
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
    text-align: right;
    position: relative;
    .svg-wrapper {
      &::after {
        background-image: url("../../assets/img/assets/t_shadow.png");
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
    .svg-wrapper {
      &:after {
        background-image: url("../../assets/img/assets/k_shadow.png");
      }
    }
  }
  .rose {
    width: 70%;
    top: 65%;
    right: -12%;
  }
  .planet {
    width: 73%;
    bottom: calc(100% - 130px);
    left: -130px;
    @media screen and (max-width: 1400px) {
      bottom: calc(100% - 100px);
      left: -100px;
    }
    @media screen and (max-width: 1100px) {
      left: -80px;
      bottom: calc(100% - 80px);
    }
  }
  .women {
    width: 190%;
    position: absolute;
    top: 76%;
    right: -14%;
  }
  /* ========  GREETING ========== */
  .greeting {
    font-size: 16px;
    margin: 3% auto 0;
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
      .greeting-text {
        animation: block-reveal-text 0.1s forwards 4.75s
      }
      .block-reveal {
        animation: block-reveal-block 1.3s ease-in-out forwards 4s
      }
    }
  }
  /* ========  ENTER ========== */
  .home-wrapper {
    position: absolute;
    overflow: hidden;
    top: 12%;
    left: 8%;
    right: 8%;
    bottom: 12%;
    height: 76%;
    width: 84%;
    &.finishEnter {
      background: $beige;
      overflow: visible;
      .inside-block {
        display: none;
      }
    }
    .inside-block {
      position: absolute;
      width: 71%;
      height: 50%;
      background: $beige;
      transform: skew(-45deg) rotate(-45deg) translateX(100%);
      transform-origin: left center;
      &.one{
        top: -13%;
      }
      &.two{
        top: 22.2%;
      }
      &.three{
        top: 57.5%;
      }
      &.four{
        top: 92.7%;
      }
      &.five{
        top: 128%;
      }
      &.six{
        top: 163.3%;
      }
    }
  }
  .home-wrapper-enter {
    .inside-block {
      &.one{
        animation: blockUp 1s cubic-bezier(1,0,.47,1) forwards 1s;
      }
      &.two{
        animation: blockDown 1s cubic-bezier(1,0,.47,1) forwards 1s;
      }
      &.three{
        animation: blockUp 1s cubic-bezier(1,0,.47,1) forwards 1s;
      }
      &.four{
        animation: blockDown 1s cubic-bezier(1,0,.47,1) forwards 1s;
      }
      &.five{
        animation: blockUp 1s cubic-bezier(1,0,.47,1) forwards 1s;
      }
      &.six{
        animation: blockDown 1s cubic-bezier(1,0,.47,1) forwards 1s;
      }
    }
    .svg-inside-image {
      animation: slide-Up 1s forwards 0.5s ;
    }
    .svg-wrapper {
      &:after {
        animation: fade-in 1.2s forwards 3.2s ;
      }
    }
    .collage {
      animation: fade-in 1.2s linear forwards 3.2s ;
    }
  }
  .home-nav-wrapper{
    &.enter {
      &.works {
        animation: workEnter .6s ease-out forwards 1.9s;
        .inside-in {
          animation: insideUp 2.8s ease-in forwards .5s;
        }
        .out-in {
          animation: outDown 2.8s ease-in forwards .5s;
        }
      }
      &.about {
        animation: aboutEnter .6s ease-out forwards 1.9s;
        .inside-in {
          animation: outDown 2.8s ease-in forwards .5s;
        }
        .out-in {
          animation: insideUp 2.8s ease-in forwards .5s;
        }
      }
    }
  }
  /* =====  NAVIGATION ====== */
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

  /* ========  TO WORK ========== */
  @keyframes toWork {
    from {
      top: calc(52% + 128px);
      left: calc(8% - 26px);
      transform: rotate(-90deg);
    }
    25% {
      top: calc(50% - 30px);
      left: calc(8% - 26px);
      transform: rotate(0);
    }
    60% {
      top: calc(50% - 30px);
      left: calc(50% - 128px);
      transform: rotate(0);
    }
    to {
      top: calc(50% - 30px);
      left: calc(50% - 128px);
      transform: rotate(0);
    }
  }
  @keyframes work-nav-inside-move {
    from {
      transform: translateX(0);
    }
    60% {
      transform: translateX(0);
    }
    90% {
      transform: translateX(30px);
    }
    to {
      transform: translateX(0);
    }
  }
  @keyframes work-nav-outside-move {
    from {
      transform: translateX(0);
    }
    40% {
      transform: translateX(0);
    }
    85% {
      transform: translateX(50px);
    }
    to {
      transform: translateX(0);
    }
  }
  /* ========  TO About ========== */
  @keyframes toAbout {
    from {
      top: calc(44% - 116px);
      right: calc(8% - 26px);
      transform: rotate(-90deg);
    }
    25% {
      top: calc(50% - 30px);
      right: calc(8% - 26px);
      transform: rotate(0);
    }
    60% {
      top: calc(50% - 30px);
      right: calc(50% - 116px);
      transform: rotate(0);
    }
    to {
      top: calc(50% - 30px);
      right: calc(50% - 116px);
      transform: rotate(0);
    }
  }
  @keyframes about-nav-inside-move {
    from {
      transform: translateX(0);
    }
    60% {
      transform: translateX(0);
    }
    90% {
      transform: translateX(-30px);
    }
    to {
      transform: translateX(0);
    }
  }
  @keyframes about-nav-outside-move {
    from {
      transform: translateX(0);
    }
    40% {
      transform: translateX(0);
    }
    85% {
      transform: translateX(-60px) ;
    }
    to {
      transform: translateX(0);
    }
  }
  /* ========  TO WORK & ABOUT LEAVE ========== */
  @keyframes home-nav-inside-leave {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(-30px);
    }
  }
  @keyframes home-nav-outside-leave {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(30px);
    }
  }

  /* ========  LEAVE GENERAL ========== */
  @keyframes home-leave {
    from {
      opacity: 1;
      transform: translateY(0);
    }
    to {
      opacity: 0;
      transform: translateY(-50px);
    }
  }

  /* ========  ENTER ========== */
  @keyframes slide-Up {
    from {
      transform: translateY(110%);
    }
    to {
      transform: translateY(0);;
    }
  }
  @keyframes blockUp {
    from {
      transform: skew(-45deg) rotate(-45deg) translateX(100%);
    }
    to {
      transform: skew(-45deg) rotate(-45deg) translateX(0);
    }
  }
  @keyframes blockDown {
    from {
      transform: skew(-45deg) rotate(-45deg) translateX(-100%);
    }
    to {
      transform: skew(-45deg) rotate(-45deg) translateX(0);
    }
  }
  @keyframes workEnter {
    75% {
      top: calc(52% + 148px);
    }
    to {
      top: calc(52% + 128px);
    }
  }
  @keyframes aboutEnter {
    75% {
      top: calc(44% - 136px);
    }
    to {
      top: calc(44% - 116px);
    }
  }
  @keyframes insideUp {
    from {
      transform: translateX(-15px);
    }
    90% {
      transform: translateX(-15px);
    }
    to {
      transform: translateX(0);
    }
  }
  @keyframes outDown {
    from {
      transform: translateX(15px);
    }
    90% {
      transform: translateX(15px);
    }
    to {
      transform: translateX(0);
    }
  }


</style>
