<template>
  <div id="app">
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

export default {
  name: 'App',
  data() {
    return {
      transitionName: 'home',
    };
  },
  methods: {
    ...mapActions({
      leaveHome: 'leaveHome',
    }),
  },
  watch: {
    $route(to, from) {
      // const toDepth = to.path;
      const fromDepth = from.path;
      // console.log('to', toDepth);
      // console.log('from', fromDepth);
      if (fromDepth === '/') {
        console.log('fromHome');
        this.transitionName = 'fromHome';
      } else {
        this.transitionName = 'normal';
      }
      // this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left';
    },
  },
};
</script>

<style lang="scss">

</style>
