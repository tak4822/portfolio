<template>
  <div>
    <app-home v-if="desktop"/>
    <app-mobile v-else/>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';

const Home = () => import('../home/Home');
const Mobile = () => import('../mobile/Mobile');

export default {
  computed: {
    ...mapGetters({
      desktop: 'desktop',
    }),
  },
  components: {
    appMobile: Mobile,
    appHome: Home,
  },
};

</script>
