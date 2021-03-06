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
    <div id="app">
      <transition name="slide" v-if="desktop">
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
        :class="{
          'leaving': normalLeave,
          'change-detail': changeDetail,
          'mobileTransition': mobileTransition}" >
        <div class="leave-normal-el black"></div>
        <div class="leave-normal-el white"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import Header from './components/shared/Header';

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
      desktop: 'desktop',
      mobileTransition: 'mobileTransition',
    }),
    homePage() {
      if (this.$route.path === '/' || this.$route.path === '/mobile') {
        return true;
      }
      return false;
    },
    windowSize() {
      return window.innerWidth;
    },
  },
  methods: {
    ...mapActions({
      leaveHome: 'leaveHome',
      resetWork: 'resetWork',
      toDetail: 'toDetail',
      resetToDetail: 'resetToDetail',
      handleWindowResize: 'handleWindowResize',
    }),
    leavePage(el, done) {
      this.resetToDetail();
      if (this.transitionName === 'normal') {
        this.normalLeave = true;
        setTimeout(() => {
          done();
          this.normalLeave = false;
        }, 1600);
      } else {
        done();
      }
    },
    resizeWindow() {
      if (this.windowSize !== window.innerWidth) {
        this.handleWindowResize();
        if (!this.desktop) {
          this.$router.push('/resize');
        }
      }
    },
    checkResizeWindow() { // only very first time
      if (!this.desktop) {
        this.$router.push('/mobile');
      }
    },
  },
  watch: {
    $route(to, from) {
      const toDepthLength = to.path.split('/').length;
      if (to.name === 'mobileDetail' || to.name === 'mobileDetailChange' || to.path === '/mobile') {
        this.transitionName = 'mobile';
      } else if (from.path === '/' || to.path === '/') {
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
  created() {
    this.handleWindowResize();
    this.checkResizeWindow();
    window.addEventListener('resize', this.resizeWindow, false);
  },
  components: {
    appHeader: Header,
  },
};
</script>

<style lang="scss">
  /* ==========  PRE_LOADING ============= */
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
    fill: $text;
    &.loading {
      animation: preloading infinite;
      animation-duration: 3s;
      transform-origin: center 65%;
    }
  }
  /* ==========  HEADER TRANSITION ============= */
  .slide-enter-active {
    animation: slide-in-down 400ms ease-in forwards;
  }

  .slide-leave-active {
    animation: slide-out-up 400ms ease-in-out forwards;
  }
  /* ==========  PAGE TRANSITION ============= */
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
      z-index: 100;
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
        animation: leavePage cubic-bezier(.76,.01,.28,.99) forwards;
        animation-duration: 0.7s;
        animation-delay: .9s;
      }
    }
  }
  .leave-normal-page.change-detail {
    display: block;
    .leave-normal-el {
      &.white {
        animation: changeDetail cubic-bezier(.76,.01,.28,.99) forwards;
        animation-duration: 1.5s;
        animation-delay: 0.4s;
      }
    }
  }
  .leave-normal-page.mobileTransition {
    display: block;
    .leave-normal-el {
      &.black {
        animation: mobileLeave forwards;
        animation-duration: 1.5s;
      }
    }
  }
</style>
