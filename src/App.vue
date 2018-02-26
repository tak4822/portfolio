<template>
  <div id="app">
    <transition
      :name="transitionName"
      duration="2000"
      mode="out-in"
    >
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      transitionName: 'home',
    };
  },
  methods: {
    ...mapActions({

    }),
  },
  watch: {
    $route(to, from) {
      // const toDepth = to.path;
      const fromDepth = from.path;
      // console.log('to', toDepth);
      // console.log('from', fromDepth);
      if (fromDepth === '/') {
        // console.log('fromHome');
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
