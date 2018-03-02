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
      <transition name="lSide ">
        <div
          v-if="isShowing"
          class="ripple"
          :class="{'to-detail': toDetail}"
          :style="{'background-color': selectedWork.color}"></div>
      </transition>
      <transition name="rSide">
        <div
          v-if="isShowing"
          class="ripple r-side"
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
  }
  .three-d-door {
    top: calc(50% - 300px);
    left: calc(50% - 100px);
    width: 200px;
    height: 600px;
    position: absolute;
    display: flex;
    flex-direction: column;
  }
  /* ===== To Detail animation ====== */
  @keyframes zoom-work {
    from {
      width: 400px;
      height: 300px;
      top: calc(50% - 150px);
      left: calc(50% - 200px);
    }
    to {
      width: 70vw;
      height: 60vh;
      left: calc(50% - 40vw);
      top: calc(50% - 30vh);
    }
  }
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
    from {
      top: calc(50% - 300px);
    }
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
  @keyframes door-enter {
    from {
      left: calc(50% - 100px);
      transform: rotateY(0) translateZ(0);
    }
    50% {
      left: 100%;
      transform: rotateY(0) translateZ(0);
    }
    to {
      left: 100%;
      transform: rotateY(90deg) translateZ(-100px);
    }
  }
  @keyframes  door-appear-top {
    from {
      transform: translateY(300px);
    }
    to {
      transform: translateY(0);
    }
  }
  @keyframes  door-appear-bottom {
    from {
      transform: translateY(-300px);
    }
    to {
      transform: translateY(0);
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
    width: 400px;
    height: 300px;
    top: calc(50% - 150px);
    left: calc(50% - 200px);
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 250px;
      height: 250px;
      object-fit: contain;
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
    }
  }
  .door {
    width: 30px;
    height: 500px;
    position: absolute;
    top: calc(50% - 250px);
    right: 0;
    transform: translateZ(100px);
  }

  /* ======  animation ======*/
  .come-enter {
    opacity: 0;
  }

  .come-enter-active {
    animation: come-in .8s ease-out forwards;
    transition: all .3s;
  }

  .come-leave-active {
    animation: come-out .3s linear forwards;
    transition: all .1s
  }

  @keyframes come-in {
    from {
      transform: translateX(700px);
    }
    70% {
      transform: translateX(100px);
    }
    95% {
      transform: translateX(-10px);
    }
    to {
      transform: translateX(0);
    }
  }

  @keyframes come-out {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-500px);
    }
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

  @keyframes slide-in {
    from {
      transform: translateX(-30px);
    }
    to {
      transform: translateX(0);
    }
  }
  @keyframes slide-out {
    from {
      transform: translateX(0);
      opacity: 1;
    }
    to {
      transform: translateX(-30px);
      opacity: 0;
    }
  }

  /* ========  ripple  =========*/
  .ripple {
    width: 150px;
    height: 150px;
    background-color: yellow;
    overflow: hidden;
    border-radius: 50%;
    position: absolute;
    right: -125px;
    top: calc(50% - 75px);
  }
  .ripple {
    &.to-detail {
      opacity: 0;
    }
  }
  .rSide-enter-active {
    animation: r-side-ripple;
    animation-duration: .7s;
    animation-delay: 0.6s;
  }
  .lSide-enter-active {
    animation: l-side-ripple;
    animation-duration: .7s;
    animation-delay: 0.6s;
  }
  @keyframes l-side-ripple {
    0% {
      top: calc(50% - 75px);
      right: -125px;
    }
    30% {
      top: calc(50% - 75px);
      right: -125px;
    }
    45% {
      top: calc(50% - 75px);
      right: -30px;
    }
    50% {
      top: calc(50% - 130px);
      right: -125px;
    }
    60% {
      top: calc(50% - 250px);
      right: -110px;
    }
    100% {
      top: calc(50% - 300px);
      right: -125px;
    }
  }
  @keyframes r-side-ripple {
    0% {
      top: calc(50% - 75px);
      right: -125px;
    }
    30% {
      top: calc(50% - 75px);
      right: -125px;
    }
    45% {
      top: calc(50% - 75px);
      right: -30px;
    }
    50% {
      top: calc(50% - 20px);
      right: -125px;
    }
    60% {
      top: calc(50% + 100px);
      right: -110px;
    }
    100% {
      top: calc(50% + 150px);
      right: -125px;
    }
  }
</style>
