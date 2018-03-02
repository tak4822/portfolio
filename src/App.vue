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
    <div
      class="leave-normal-page"
      :class="{'leaving': normalLeave, 'change-detail': changeDetail}" >
      <div class="leave-normal-el black"></div>
      <div class="leave-normal-el white"></div>
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
    }),
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
      toDetail: 'toDetail',
      resetToDetail: 'resetToDetail',
      changeDetail: 'changeDetail',
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
      console.log('route update', to.path);
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
      console.log('route transition', this.transitionName);
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
        animation: chanegDetail forwards ease-in-out;
        animation-duration: 0.8s;
        animation-delay: 0.3s;
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
  @keyframes chanegDetail {
    from {
      transform: translateX(-100%);
    }
    99% {
      transform: translateX(0);
    }
    to {
      transform: translateX(100%);
    }
  }

</style>
