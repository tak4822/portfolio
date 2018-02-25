import Vue from 'vue';

export default new Vue({
  methods: {
    changeWork(work) {
      this.$emit('workWasChanged', work);
    },
  },
});
