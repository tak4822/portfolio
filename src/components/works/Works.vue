<template>
  <div>
    <app-header/>
    <app-screen/>
  </div>
</template>

<script>
import Header from '../shared/Header';
import Screen from './Screen';

export default {
  data() {
    return {
      works: 'kenPriebe',
    };
  },
  components: {
    appHeader: Header,
    appScreen: Screen,
  },
};
</script>

<style scoped lang="scss">

</style>
