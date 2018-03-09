<template>
  <div>
    <div class="pre-container" v-if="!enter && homePage">
      <div class="pre-svg-wrapper">
        <div class="pre-svg-leave" :class="{'leave': !preloading}">
          <svg class="pre-svg" :class="{'loading': preloading}"
               xmlns="http://www.w3.org/2000/svg" viewBox="0 0 234.4 203">
            <polygon class="svg-name a" points="0 203 234.4 203 117.2 0 0 203"></polygon>
          </svg>
        </div>
      </div>
    </div>
    <div id="app" v-if="desktop">
      <transition name="slide">
        <app-header v-show="!homePage"/>
      </transition>
      <transition
        :name="transitionName"
        mode="out-in"
        @leave="leavePage"
      >
          <router-view/>
      </transition>
      <div
        class="leave-normal-page"
        :class="{'leaving': normalLeave, 'change-detail': changeDetail}" >
        <div class="leave-normal-el black"></div>
        <div class="leave-normal-el white"></div>
      </div>
    </div>
    <div v-else>
      <app-mobile></app-mobile>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import Header from './components/shared/Header';
import Mobile from './components/mobile/Mobile';

export default {
  name: 'App',
  data() {
    return {
      transitionName: 'normal',
      normalLeave: false,
    };
  },
  computed: {
    ...mapGetters({
      changeDetail: 'changeDetail',
      preloading: 'preloading',
      enter: 'enter',
    }),
    homePage() {
      if (this.$route.path === '/') {
        return true;
      }
      return false;
    },
    desktop() {
      console.log(window.innerWidth);
      return window.innerWidth > 1000;
    },
  },
  methods: {
    ...mapActions({
      leaveHome: 'leaveHome',
      resetWork: 'resetWork',
      toDetail: 'toDetail',
      resetToDetail: 'resetToDetail',
    }),
    leavePage(el, done) {
      this.resetToDetail();
      if (this.transitionName === 'normal') {
        this.normalLeave = true;
        setTimeout(() => {
          done();
          this.normalLeave = false;
        }, 1600);
      }
      if (this.transitionName === 'home') {
        done();
      }
      if (this.transitionName === 'toDetail') {
        done();
      }
    },
  },
  watch: {
    $route(to, from) {
      const toDepthLength = to.path.split('/').length;
      // const fromDepthLength = from.path.split('/').length;
      if (from.path === '/' || to.path === '/') {
        this.transitionName = 'home';
      } else if (toDepthLength === 3) {
        this.transitionName = 'toDetail';
      } else if (toDepthLength === 4) {
        this.transitionName = 'changeDetail';
      } else {
        this.transitionName = 'normal';
      }
      // console.log('route transition', this.transitionName);
      if (this.transitionName === 'toDetail') {
        this.toDetail();
      }
      if (to.path === '/works') {
        this.resetToDetail();
        this.resetWork();
      }
    },
  },
  components: {
    appHeader: Header,
    appMobile: Mobile,
  },
};
</script>

<style lang="scss">
  .pre-container {
    width: 100%;
    height: 100vh;
    position: fixed;
    z-index: 10;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .pre-svg-wrapper {
    width: 500px;
    height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }
  .pre-svg-leave {
    width: 20%;
    transition: all 0.5s ease-out;
    &.leave {
      transform: rotateY(90deg);
    }
  }
  .pre-svg {
    width: 100%;
    &.loading {
      animation: preloading infinite;
      animation-duration: 3s;
      transform-origin: center;
    }
  }
  @keyframes preloading {
    from {
      transform: rotate(0);
    }
    33% {
      transform: rotate(120deg);
    }
    66% {
      transform: rotate(240deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  /* ==========  TRANSITION ============= */
  .slide-enter-active {
    animation: slide-in 400ms ease-in forwards;
  }

  .slide-leave-active {
    animation: slide-out 400ms ease-in-out forwards;
  }

  @keyframes  slide-in {
    from {
      transform: translateY(-30px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes  slide-out{
    from {
      transform: translateY(0);
      opacity: 1;
    }
    to {
      transform: translateY(-30px);
      opacity: 0;
    }
  }
  .leave-normal-page {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .leave-normal-el{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: translateX(-100%);
    &.black {
      background: $text;
    }
    &.white {
      z-index: 2;
      background: white;
    }
  }
  .leave-normal-page.leaving{
    display: block;
    .leave-normal-el {
      &.black {
        animation: leavePage forwards;
        animation-duration: 0.7s;
      }
      &.white {
        animation: leavePage forwards ease-in-out;
        animation-duration: 0.7s;
        animation-delay: .9s;
      }
    }
  }
  .leave-normal-page.change-detail {
    display: block;
    .leave-normal-el {
      &.white {
        animation: changeDetail forwards ease-in-out;
        animation-duration: 1.3s;
        animation-delay: 0.4s;
      }
    }
  }
  @keyframes leavePage {
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(0);
    }
  }
  @keyframes changeDetail {
    from {
      transform: translateX(-100%);
    }
    50% {
      transform: translateX(0);
    }
    99% {
      transform: translateX(0);
    }
    to {
      transform: translateX(100%);
    }
  }

</style>
