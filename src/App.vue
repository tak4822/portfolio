<template>
  <div id="app">
    <transition name="slide" >
      <app-header v-show="!homePage"/>
    </transition>
    <transition
      :name="transitionName"
      mode="out-in"
    >
      <router-view/>
    </transition>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import Header from './components/shared/Header';

export default {
  name: 'App',
  data() {
    return {
      transitionName: 'home',
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
  },
  watch: {
    $route(to, from) {
      console.log('change routes');
      this.homePage = false;
      if (to.path === '/') {
        this.homePage = true;
      }
      const toDepthLength = to.path.split('/').length;
      const fromDepthLength = from.path.split('/').length;
      this.transitionName = toDepthLength < fromDepthLength ? 'normal' : 'toDetail';
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

</style>
