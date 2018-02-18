<template>
  <div class="screen-container">
    <app-interactive-screen
      class="screen-bg"
    />
    <app-links
      @select="selectWork"
    />
    <transition name="slide" mode="out-in">
      <app-explanatory
        :key="selected"
        :selectedWork="selectedWork"
        v-if="selected !== null"
      />
    </transition>
    <transition name="slide" mode="out-in">
      <div class="image-wrap" :key="selected">
        <img
          :src="getImageSrc()"
          alt="">
      </div>
    </transition>
    <div class="baby-contaiiner">
      <img src="../../assets/img/assets/babies.png" alt="">
    </div>
  </div>
</template>

<script>
import Links from './Links';
import Explanatory from './Explanatory';
import works from '../../data/works';
import InteractiveScreen from './InteractiveScreen';

const images = require.context('../../assets/img/mainImages/', false, /^\.\//);

export default {
  data() {
    return {
      selected: null,
    };
  },
  computed: {
    selectedWork() {
      if (this.selected !== null) return works[this.selected];
      return '';
    },
  },
  components: {
    appLinks: Links,
    appExplanatory: Explanatory,
    appInteractiveScreen: InteractiveScreen,
  },
  methods: {
    selectWork(id) {
      this.selected = id;
    },
    getImageSrc() {
      if (this.selected === null) return '';
      return images(`./${works[this.selected].mainImage}`);
    },
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
  }
  .screen-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .image-wrap {
    width: 250px;
    height: 250px;
    position: absolute;
    top: calc(50% - 125px);
    left: calc(50% - 125px);
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 100%;
    }
  }
  .baby-contaiiner {
   position: absolute;
    top: calc(100% - 50px);
    right: 70px;
    width: 150px;
    img {
      width: 100%;
    }
  }

  /* ======  animatino ======*/
  .slide-enter {
    opacity: 0;
  }

  .slide-enter-active {
    animation: slide-in .5s cubic-bezier(.13,.75,.61,1) forwards;
    transition: all .3s;
    // transform-origin: 0% 100%;
  }

  .slide-leave-active {
    animation: slide-out .3s linear forwards;
    transition: all .1s;
    // transform-origin: 0% 100%;
  }

  @keyframes slide-in {
    from {
      // transform: rotate(30deg) translate3d(30px, 30px, 30px);
      transform: translateX(30px);
    }
    to {
      // transform: rotate(0deg) translate3d(0, 0, 0);
      transform: translateX(0);
    }
  }

  @keyframes slide-out {
    from {
      // transform: rotate(0deg) translateY(0);
      transform: translateX(0);
      opacity: 1;
    }
    to {
      // transform: rotate(30deg) translateY(30px);
      transform: translateX(30px);
      opacity: 0;
    }
  }

</style>
