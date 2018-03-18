<template>
  <div>
    <app-screen/>
    <router-view class="child"/>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import Screen from './Screen';
import Detail from '../detail/Detail';

export default {
  components: {
    appScreen: Screen,
    appDetail: Detail,
  },
  methods: {
    ...mapActions({
      resetWork: 'resetWork',
    }),
  },
  beforeRouteLeave(to, from, next) {
    this.resetWork();
    next();
  },
};
</script>

