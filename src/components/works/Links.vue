<template>
  <div class="links-container">
    <ul class="links">
      <li
        class="links-list"
        v-for="(name, index) in workNames"
        :key="index"
        :class="index === selected ? 'active' : ''"
        @mouseover="select(index)"
      >
        <span class="hover-effect">{{ name }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  props: ['selected'],
  computed: {
    ...mapGetters({
      workNames: 'workNames',
    }),
  },
  methods: {
    ...mapActions({
      select: 'selectWork',
    }),
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
    z-index: 2;
    &.active {
      color: white;
      .hover-effect {
        position: relative ;
        overflow: hidden;
        &::before, &::after {
          content: '';
          width: 100%;
          height: 50%;
          position: absolute;
          background: #111111;
          left: 0;
          z-index: -1;
        }
        &::before {
          top: 0;
          animation: hover-slide-top;
          animation-duration: 0.5s;
        }
        &::after {
          bottom: 0;
          animation: hover-slide-bottom;
          animation-duration: 0.5s;
        }
      }
    }
  }

  @keyframes hover-slide-top {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0);
    }
  }

  @keyframes hover-slide-bottom {
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(0);
    }
  }

</style>
