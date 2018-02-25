<template>
  <div>
    <app-header/>
    <app-screen/>
    <app-detail/>
  </div>
</template>

<script>
import Header from '../shared/Header';
import Screen from './Screen';
import Detail from '../detail/Detail';

export default {
  components: {
    appHeader: Header,
    appScreen: Screen,
    appDetail: Detail,
  },
};
</script>

<style scoped lang="scss">

</style>
