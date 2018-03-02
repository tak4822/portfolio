<template>
  <div class="links-container" :class="{ 'to-detail': toDetail }">
    <transition-group tag="ul" class="links" appear v-if="linksAppear"
      name="links"
      @before-enter="beforeEnter"
      @after-enter="afterEnter"
      @enter-cancelled="afterEnter">
      <li
        class="links-list"
        v-for="(name, index) in workNames"
        :key="index"
        :data-index="index"
        :class="{'active' : index === selectedId }"
        @mouseover="hoverWork(index)"
      >
        <router-link
          :to="{ name: 'detail', params: { id: index }}"
          class="hover-effect">{{ name }}</router-link>
      </li>
    </transition-group>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  props: ['linksAppear'],
  computed: {
    ...mapGetters({
      workNames: 'workNames',
      selectedId: 'selectedId',
      toDetail: 'toDetail',
    }),
  },
  methods: {
    ...mapActions({
      select: 'selectWork',
    }),
    hoverWork(id) {
      if (!this.toDetail) {
        this.select(id);
      }
    },
    beforeEnter(el) {
      // eslint-disable-next-line no-param-reassign
      el.style.transitionDelay = `${100 * el.dataset.index}ms`;
    },
    afterEnter(el) {
      // eslint-disable-next-line no-param-reassign
      el.style.transitionDelay = '';
    },
  },
};
</script>

<style scoped lang="scss">
  /* ======== Enter animation ========= */
  .links-enter {
    opacity: 0;
    transform: translatex(-20px);
  }
  .links-enter-active {
    transition: all 0.3s ease;
  }
  /* ======== To Detail animation ========= */
  .links-container {
    &.to-detail {
      animation: links-to-detail forwards;
      animation-duration: 0.6s;
      transition-timing-function: cubic-bezier(.14,0,.39,.75);
    }
  }
  @keyframes links-to-detail {
    from {
      left: -210px;
    }
    to {
      left: -1000px;
    }
  }
  /* ======== General ========= */
  .links-container {
    position: absolute;
    top: -30px;
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
      .hover-effect {
        color: white;
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
