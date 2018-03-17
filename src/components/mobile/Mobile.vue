<template>
  <div class="mobile-container">
    <app-home/>
    <app-about/>
    <app-works v-for="(work, index) in works" :work="work" :key="index"/>
  </div>
</template>

<script>
import Home from './Home';
import About from './About';
import Works from './Works';
import works from '../../data/works';

export default {
  data() {
    return {
      works,
    };
  },
  components: {
    appHome: Home,
    appAbout: About,
    appWorks: Works,
  },
};
</script>

<style lang="scss" scoped>

</style>
