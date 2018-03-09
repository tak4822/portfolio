<template>
  <div class="screen-container">
    <app-links
      :linksAppear="linksAppear"
    />
    <transition name="slide" mode="out-in">
      <app-explanatory
        :key="selectedWork.name"
        :selectedWork="selectedWork"
        v-if="selectedWork.name"
      />
    </transition>
    <div class="filter-container" :class="{'to-detail': toDetail}">
      <transition name="come" mode="out-in">
        <div
          class="image-wrap"
          :class="{'to-detail': toDetail}"
          :key="selectedWork.name"
          :style="{'background-color': selectedWork.color}">
          <img :src="getImageSrc()" alt="">
          <div
            :class="{'to-detail': toDetail}"
            class="image-shadow"
            v-if="selectedWork.name"></div>
        </div>
      </transition>
      <div
        class="door"
        :class="{'to-detail': toDetail}"
        :style="{'background-color': selectedWork.color, }"></div>
      <transition name="lSide">
        <div
          v-if="isShowing"
          class="ripple"
          :class="{'to-detail': toDetail}"
          :style="{'background-color': selectedWork.color}"></div>
      </transition>
      <transition name="rSide">
        <div
          v-if="isShowing"
          class="ripple"
          :class="{'to-detail': toDetail}"
          :style="{'background-color': selectedWork.color}"></div>
      </transition>
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
        <defs>
          <filter id="fancy-goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="15" result="blur"></feGaussianBlur>
            <feColorMatrix in="blur" mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo"></feColorMatrix>
            <feComposite in="SourceGraphic" in2="goo" operator="over"></feComposite>
          </filter>
        </defs>
      </svg>
    </div>
    <div
      :class="{'door-enter': pageEnter, 'to-detail': toDetail}"
      class="three-d-door">
      <div class="door-color-wrapper top">
        <div class="door-color-top" :style="{'background-color': selectedWork.color}"></div>
      </div>
      <div class="door-color-wrapper bottom">
        <div class="door-color-bottom" :style="{'background-color': selectedWork.color}"></div>
      </div>
    </div>
    <div class="scroll-icon-wrap" :class="{ 'to-detail': toDetail }" v-if="showScrollIcon">
      <div class="scroll-icon"></div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Links from './Links';
import Explanatory from './Explanatory';

const images = require.context('../../assets/img/mainImages/', false, /^\.\//);

export default {
  data() {
    return {
      pageEnter: false,
      linksAppear: false,
    };
  },
  computed: {
    ...mapGetters({
      selectedWork: 'selectedWork',
      isShowing: 'isShowing',
      toDetail: 'toDetail',
      showScrollIcon: 'showScrollIcon',
    }),
  },
  methods: {
    getImageSrc() {
      if (this.selectedWork.mainImage === undefined) return '';
      return images(`./${this.selectedWork.mainImage}`);
    },
  },
  components: {
    appLinks: Links,
    appExplanatory: Explanatory,
    // appInteractiveScreen: InteractiveScreen,
  },
  mounted() {
    this.pageEnter = true;
    setTimeout(() => {
      this.linksAppear = true;
    }, 1500);
  },
};

</script>

<style scoped lang="scss">
  .scroll-icon-wrap {
    position: absolute;
    width: 1px;
    height: 100px;
    bottom: -50px;
    left: 50%;
    overflow: hidden;
    @media screen and (max-width: 1500px) {
      bottom: -100px;
    }
    &.to-detail {
      .scroll-icon {
        width: 100%;
        height: 100%;
        background: black;
        transform: translateY(-100%);
        animation: scroll-icon infinite;
        animation-delay: 1s;
        animation-duration: 1.6s;
      }
    }
  }
  @keyframes scroll-icon {
    from {
      transform: translateY(-100%);
    }
    to {
      transform: translateY(100%);
    }
  }

  .screen-container {
    position: relative;
    width: 700px;
    height: 600px;
    margin: 180px auto;
    display: flex;
    align-items: center;
    justify-content: center;
    perspective: 1000px;
    @media screen and (max-width: 1500px) {
      width: 400px;
      height: 340px;
      margin: 230px auto;
    }
  }
  .three-d-door {
    top: calc(50% - 300px);
    left: calc(50% - 100px);
    width: 200px;
    height: 600px;
    position: absolute;
    display: flex;
    flex-direction: column;
    @media screen and (max-width: 1500px) {
      height: 340px;
      top: calc(50% - 170px);
    }
  }
  /* ===== To Detail animation ====== */
  .image-shadow {
    &.to-detail {
      animation: fade-out forwards linear;
      animation-duration: 0.5s;
    }
  }
  .door {
    &.to-detail {
      animation: door-to-detail forwards;
      animation-duration: 0.6s;
      transition-timing-function: cubic-bezier(.14,0,.39,.75);
    }
  }
  .three-d-door {
    &.to-detail {
      animation: three-d-door-to-detail forwards;
      animation-duration: 0.6s;
      transition-timing-function: cubic-bezier(.14,0,.39,.75);
    }
  }
  @keyframes door-to-detail {
    to {
      top: -1000px;
    }
  }
  @keyframes three-d-door-to-detail {
    from {
      left: 100%;
      transform: rotateY(90deg) translateZ(-100px) translateY(0);
    }
    to {
      left: 100%;
      transform: rotateY(90deg) translateZ(-100px) translateY(-1000px);
    }
  }
  /* ===== page enter animation ====== */
  .door-color-wrapper {
    width: 100%;
    height: 50%;
    overflow: hidden;
  }
  .door-color-top {
    width: 100%;
    height: 100%;
    background: black;
    transform: translateY(300px);
  }
  .door-color-bottom {
    width: 100%;
    height: 100%;
    background: black;
    transform: translateY(-300px);
  }
  .door-enter {
    transform-origin: center center;
    animation: door-enter forwards;
    animation-delay: 0.5s;
    animation-duration: 1s;
    /*@media screen and (max-width: 1500px) {*/
      /*animation: door-enter-small forwards;*/
      /*animation-delay: 0.5s;*/
      /*animation-duration: 1s;*/
    /*}*/
    .door-color-top {
      animation: door-appear-top forwards;
      animation-duration: 0.5s;
      transition-timing-function: ease;
    }
    .door-color-bottom {
      animation: door-appear-bottom forwards;
      animation-duration: 0.5s;
      transition-timing-function: ease;
    }
  }

  .screen-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .filter-container {
    filter: url('#fancy-goo');
    position:relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    &.to-detail {
      overflow: visible;
    }
  }
  .image-wrap {
    height: 300px;
    width: 400px;
    top: calc(50% - 150px);
    left: calc(50% - 200px);
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 1500px) {
      height: 200px;
      width: 250px;
      top: calc(50% - 100px);
      left: calc(50% - 125px);
    }
    img {
      width: 250px;
      height: 250px;
      object-fit: contain;
      @media screen and (max-width: 1500px) {
        width: 150px;
        height: 150px;
      }
    }
    .image-shadow {
      width: 400px;
      height: 3px;
      background: rgba(0,0,0,0.2);
      position: absolute;
      left: calc(50% - 200px);
      bottom: -140px;
      border-radius: 50%;
      filter: blur(5px);
      @media screen and (max-width: 1500px) {
        height: 2px;
        width: 200px;
        left: calc(50% - 100px);
        bottom: -68px;
      }
    }
  }
  .door {
    width: 30px;
    height: 500px;
    position: absolute;
    top: calc(50% - 250px);
    right: 0;
    transform: translateZ(100px);
    @media screen and (max-width: 1500px) {
      width: 15px;
      height: 280px;
      top: calc(50% - 140px);
    }
  }

  /* ======  animation ======*/
  .come-enter {
    opacity: 0;
  }

  .come-enter-active {
    animation: come-in .8s ease-out forwards;
    transition: all .3s;
    @media screen and (max-width: 1500px) {
      animation: come-in-small .8s ease-out forwards;
      transition: all .3s;
    }
  }

  .come-leave-active {
    animation: come-out .3s linear forwards;
    transition: all .1s
  }

  .slide-enter {
    opacity: 0;
  }
  .slide-enter-active {
    animation: slide-in .4s linear forwards;
    transition: all .4s;
  }

  .slide-leave-active {
    animation: slide-out .4s linear forwards;
    transition: all .1s;
  }

  /* ========  ripple  =========*/
  .ripple {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    position: absolute;
    right: -125px;
    top: calc(50% - 75px);
    @media screen and (max-width: 1500px) {
      width: 80px;
      height: 80px;
      right: -65px;
      top: calc(50% - 40px);
    }
  }
  .ripple {
    &.to-detail {
      opacity: 0;
    }
  }
  .rSide-enter-active {
    background: blue;
    animation: r-side-ripple;
    animation-duration: .7s;
    animation-delay: 0.6s;
    @media screen and (max-width: 1500px) {
      animation: r-side-ripple-small;
      animation-duration: .7s;
      animation-delay: 0.6s;
    }
  }
  .lSide-enter-active {
    animation: l-side-ripple;
    animation-duration: .7s;
    animation-delay: 0.6s;
    @media screen and (max-width: 1500px) {
      animation: l-side-ripple-small;
      animation-duration: .7s;
      animation-delay: 0.6s;
    }
  }
</style>
