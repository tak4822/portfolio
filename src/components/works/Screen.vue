<template>
  <div class="screen-container">
    <app-links/>
    <transition name="slide" mode="out-in">
      <app-explanatory
        :key="selectedWork.name"
        :selectedWork="selectedWork"
        v-if="selectedWork !== null"
      />
    </transition>
    <div class="filter-container">
      <transition name="come" mode="out-in">
        <div
          class="image-wrap"
          :key="selectedWork.name"
          :style="{'background-color': selectedWork.color}">
        <img
          :src="getImageSrc()"
          alt="">
        </div>
      </transition>
      <div class="door" :style="{'background-color': selectedWork.color}"></div>
      <transition name="lSide">
        <div
          v-if="isShowing"
          class="ripple"
          :style="{'background-color': selectedWork.color}"></div>
      </transition>
      <transition name="rSide">
        <div
          v-if="isShowing"
          class="ripple r-side"
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
    <div class="three-d-door" :style="{'background-color': selectedWork.color}"></div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Links from './Links';
import Explanatory from './Explanatory';


const images = require.context('../../assets/img/mainImages/', false, /^\.\//);

export default {
  computed: {
    ...mapGetters({
      selectedWork: 'selectedWork',
      isShowing: 'isShowing',
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
};

</script>

<style scoped lang="scss">
  .screen-container {
    position: relative;
    width: 700px;
    height: 500px;
    margin: 230px auto;
    display: flex;
    align-items: center;
    justify-content: center;
    perspective: 1000px;
  }
  .three-d-door {
    position: absolute;
    left: 100%;
    width: 200px;
    height: 600px;
    background: black;
    transform: rotateY(90deg) translateZ(-100px);
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
  }
  .image-wrap {
    width: 400px;
    height: 300px;
    position: absolute;
    top: calc(50% - 150px);
    left: calc(50% - 200px);
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 250px;
      height: 250px;
      object-fit: contain;
    }
  }
  .door {
    width: 30px;
    height: 500px;
    background: black;
    position: absolute;
    top: calc(50% - 250px);
    right: 0;
    transform: translateZ(100px);
  }

  /* ======  animatino ======*/
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
    transition: all .3s;
    // transform-origin: 0% 100%;
  }

  .slide-leave-active {
    animation: slide-out .5s linear forwards;
    transition: all .1s;
    // transform-origin: 0% 100%;
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
