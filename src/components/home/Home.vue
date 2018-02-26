<template>
  <div class="home-container">
    <transition name="greeting" appear>
      <div class="greeting">
        <h1 class="greeting-text">Hi, I’m Tak.  Front-end creative developper.</h1>
        <div>
          <span class="greeting-text border"> | </span>
          <a class="greeting-text contact" href="mailto:takeshi@gmail.com">CONTACT</a>
        </div>
      </div>
    </transition>

    <div
      class="home-nav-wrapper works"
      :class="{'to-work': toWork, 'not-active-nav': toAbout}">
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
      :class="{'to-about': toAbout, 'not-active-nav': toWork}">
      <router-link to="/about">
        <div class="home-nav out">
          <img src="../../assets/img/assets/about_top.svg" alt="">
        </div>
        <div class="home-nav inside">
          <img src="../../assets/img/assets/about_bottom.svg" alt="">
        </div>
      </router-link>
    </div>
    <div class="home-wrapper" :class="{'home-wrapper-leave': leave}">
      <div class="home-name-images home-t">
        <div class="collage-wrap rose collage">
          <div :class="{'block-reveal' : showBlock}"></div>
          <img
            :class="{'hidden': !showRose}"
            src="../../assets/img/assets/rose.png"
            alt=""
            id="rose">
        </div>
        <div class="svg-wrapper" id="nameT">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 210.5 315">
            <clipPath id="t">
              <polygon
                class="svg-name t"
                points="181 0 113.5 0 0 0 52 97 113.5 97 113.5 315 210.5 315 210.5 0 181 0"
              ></polygon>
            </clipPath>
            <image clip-path="url(#t)" xlink:href="../../assets/img/assets/bg_blue.jpg"></image>
          </svg>
        </div>
      </div>
      <div class="home-name-images home-a">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 234.4 203">
          <polygon class="svg-name a" points="0 203 234.4 203 117.2 0 0 203"></polygon>
        </svg>
      </div>
      <div class="home-name-images home-k">
        <img class="planet collage" src="../../assets/img/assets/planet.png" alt="" id="planet">
        <img class="women collage" src="../../assets/img/assets/women.png" alt="" id="women">
        <div class="svg-wrapper" id="nameK">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 181 316">
            <clipPath id="k">
              <polygon
                class="svg-name k"
                points="181 0 0 0 0 1 0 311 0 316 180.7 316 89.56 157.12 181 0"
              ></polygon>
            </clipPath>
            <image
              clip-path="url(#k)"
              height="100%"
              xlink:href="../../assets/img/assets/bg_red.jpg">
            </image>
          </svg>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
// import { mapGetters } from 'vuex';
import { assignAnimation, getMouse, interactiveTAK } from '../../utils/homeMouseOver';

export default {
  data() {
    return {
      showBlock: false,
      showRose: false,
      leave: false,
      toAbout: false,
      toWork: false,
    };
  },
  // computed: {
  //   ...mapGetters({
  //     isLeaving: 'isLeaving',
  //   }),
  // },
  // watch: {
  //   isLeaving(val) {
  //     console.log('watch', val);
  //   },
  // },
  methods: {
    triggerCollage() {
      this.showBlock = true;
      setTimeout(() => {
        this.showRose = true;
      }, 500);
    },
    reset() {
      this.leave = false;
      this.toAbout = false;
      this.toWork = false;
    },
  },
  mounted() {
    this.triggerCollage();
    assignAnimation();
    window.addEventListener('mousemove', getMouse, false);
    interactiveTAK();
  },
  beforeRouteLeave(to, from, next) {
    this.leave = true;
    console.log(to.path);
    if (to.path === '/about') {
      console.log('toAbout');
      this.toAbout = true;
    } else if (to.path === '/works') {
      console.log('toWork');
      this.toWork = true;
    }
    setTimeout(() => {
      next();
      this.reset();
    }, 1500);
  },
};
</script>

<style scoped lang="scss">
  .home-wrapper-leave {
    animation: home-wrapper-leave forwards;
    animation-duration: 1s;
  }
  @keyframes home-wrapper-leave {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(1500px);
    }
  }

  .hidden {
    opacity: 0;
  }

  .homeWrapper-leave-active {
    opacity: 0.5;
    animation: bounce forwards;
    animation-duration: 1s;
  }
  @keyframes home-leave {
    from {
      top: 12%;
    }
    to {
      top: 100%;
    }
  }
  .block-reveal {
    z-index: 1;
    position: absolute;
    top: 0;
    right: 100%;
    width: 100%;
    height: 100%;
    background: black;
    animation: block-reveal forwards;
    animation-duration: 1s;
  }


  @keyframes block-reveal {
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

  .greeting {
    display: flex;
    font-size: 16px;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 50px auto 0 ;
    .greeting-text {
      font-size: 16px;
      font-weight: 200;
    }
    .border {
      margin: 0 20px;
    }
  }

  .home-wrapper {
    background: $beige;
    position: absolute;
    top: 12%;
    left: 8%;
    right: 8%;
    bottom: 12%;
    height: 76%;
    width: 84%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
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
      top: calc(52% + 128px);
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
      top: calc(44% - 116px);
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
      transform: translateX(60px);
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
      transform: translateX(-60px);
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
  /* ========  TO ABOUT ========== */


  /* =====  SVG  ====== */
  .home-name-images {
    width: 320px;
    height: 400px;
    position: relative;
    z-index: 100;
    transform-style: preserve-3d;
    .svg-wrapper {
      width: 100%;
      height: 100%;
      svg {
        height: 100%;
      }
    }

  }
  svg {
    z-index: 10;
  }
  .svg-name {
    fill: white;
  }
  .collage-wrap {
    overflow: hidden;
    img {
      width: 100%;
    }
  }
  .collage {
    position: absolute;
    z-index:-1;
  }

  /* =====  T  ====== */
  .home-t {
    margin-right: 100px;
    text-align: right;
    position: relative;
    .svg-wrapper {
      &:after {
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
    svg {
      width: 100%
    }
  }
  /* =====  K  ====== */
  .home-k {
    margin-left: 100px;
    .svg-wrapper {
      &:after {
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
