<template>
  <div class="mobile-container">
    <app-home/>
    <app-about/>
    <app-works v-for="(work, index) in works" :work="work" :key="index"/>
    <div class="detail-footer-logo-wrapper" @click="scrollTop">
      <img src="../../assets/img/assets/logo_glitch.svg" alt="" class="detail-footer-logo">
    </div>
    <app-footer/>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import Home from './Home';
import About from './About';
import Works from './Works';
import works from '../../data/works';
import Footer from '../shared/Footer';

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
    appFooter: Footer,
  },
  methods: {
    ...mapActions({
      mobileTransition: 'mobileTransition',
    }),
    scrollTop() {
      window.scrollTo(0, 0);
    },
  },
  beforeRouteLeave(to, from, next) {
    this.mobileTransition();
    setTimeout(() => {
      next();
    }, 500);
  },
};
</script>

<style lang="scss" scoped>
  .detail-footer-logo-wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .detail-footer-logo {
    width: 50%;
    max-width: 250px;
    margin: 50px auto 0;
  }
</style>
