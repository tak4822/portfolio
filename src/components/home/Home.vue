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

    <div class="home-nav-wrapper works">
      <router-link to="/works">
        <div class="home-nav out">
          <img src="../../assets/img/assets/works_top.svg" alt="">
        </div>
        <div class="home-nav inside">
          <img src="../../assets/img/assets/works_bottom.svg" alt="">
        </div>
      </router-link>
    </div>
    <div class="home-nav-wrapper about">
      <div class="about-link">
        <router-link to="/about">
          <div class="home-nav out">
            <img src="../../assets/img/assets/about_top.svg" alt="">
          </div>
          <div class="home-nav inside">
            <img src="../../assets/img/assets/about_bottom.svg" alt="">
          </div>
        </router-link>
      </div>
    </div>
    <transition name="homeWrapper" appear>
      <div class="home-wrapper">
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
    </transition>
  </div>
</template>

<script>
import { assignAnimation, getMouse, interactiveTAK } from '../../utils/homeMouseOver';

export default {
  data() {
    return {
      showBlock: false,
      showRose: false,
    };
  },
  methods: {
    triggerCollage() {
      this.showBlock = true;
      setTimeout(() => {
        this.showRose = true;
      }, 500);
    },
  },
  mounted() {
    this.triggerCollage();
    assignAnimation();
    window.addEventListener('mousemove', getMouse, false);
    interactiveTAK();
  },
};
</script>

<style scoped lang="scss">
  .hidden {
    opacity: 0;
  }

  .homeWrapper-leave-active {
    animation: home-leave forwards;
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


  @keyframes bounce {
    from,
    20%,
    53%,
    80%,
    to {
      -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }

    40%,
    43% {
      -webkit-animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
      animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
      -webkit-transform: translate3d(0, -30px, 0);
      transform: translate3d(0, -30px, 0);
    }

    70% {
      -webkit-animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
      animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
      -webkit-transform: translate3d(0, -15px, 0);
      transform: translate3d(0, -15px, 0);
    }

    90% {
      -webkit-transform: translate3d(0, -4px, 0);
      transform: translate3d(0, -4px, 0);
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
        margin-left: 2.2%;
        transform: translateX(15px);
      }
      .out {
        transform: translateX(-15px);
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
    }
    &:hover {
      .out, .inside {
        transform: translateX(0);
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
