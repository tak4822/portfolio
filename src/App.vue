<template>
  <div id="app">
    <transition name="slide" >
      <app-header v-show="!homePage"/>
    </transition>
    <transition
      :name="transitionName"
      mode="out-in"
      @leave="leavePage"
    >
      <router-view/>
    </transition>
    <div class="leave-normal-page" :class="{'leaving': normalLeave}">
      <div class="leave-normal-el black"></div>
      <div class="leave-normal-el white"></div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import Header from './components/shared/Header';

// TODO: scroll behavior
export default {
  name: 'App',
  data() {
    return {
      transitionName: 'normal',
      normalLeave: false,
    };
  },
  computed: {
    homePage() {
      if (this.$route.path === '/') {
        return true;
      }
      return false;
    },
  },
  methods: {
    ...mapActions({
      leaveHome: 'leaveHome',
      resetWork: 'resetWork',
    }),
    leavePage(el, done) {
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
    },
  },
  watch: {
    $route(to, from) {
      const toDepthLength = to.path.split('/').length;
      const fromDepthLength = from.path.split('/').length;
      if (from.path === '/' || to.path === '/') {
        this.transitionName = 'home';
      } else {
        this.transitionName = toDepthLength > fromDepthLength ? 'toDetail' : 'normal';
      }
      console.log('route transition', this.transitionName);
    },
  },
  components: {
    appHeader: Header,
  },
};
</script>

<style lang="scss">
  .slide-enter-active {
    animation: slide-in 400ms ease-in forwards;
  }

  .slide-leave-active {
    animation: slide-out 400ms ease-in-out forwards;
  }

  @keyframes  slide-in{
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
      background: $beige;
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

  @keyframes leavePage {
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(0);
    }
  }

</style>
