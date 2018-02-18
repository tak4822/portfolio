<template>
  <div class="links-container">
    <ul class="links">
      <li
        class="links-list"
        v-for="(name, index) in workNames"
        :key="index"
        @mouseover="select(index)"
      >
        {{ name }}
      </li>
    </ul>
  </div>
</template>

<script>
import works from '../../data/works';

export default {
  props: ['selected'],
  data() {
    return {
      workNames: works.map(({ name }) => name),
    };
  },
  methods: {
    select(index) {
      this.$emit('select', index);
    },
  },
};
</script>

<style scoped lang="scss">
  .links-container {
    position: absolute;
    top: -100px;
    left: -210px;
  }
  .links {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }
  .links-list {
    font-size: 2.3rem;
    font-weight: 800;
    margin-bottom: 10px;
    cursor: pointer;
  }

</style>
