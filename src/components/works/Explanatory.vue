<template>
  <div class="exp-container" :class="{ 'to-detail': toDetail }" v-if="!changeDetail">
    <p class="exp-date">{{ selectedWork.date }}</p>
    <h3 class="exp-title">{{ selectedWork.shortTitle }}</h3>
    <p class="exp-short-desc">{{ selectedWork.shortDesc }}</p>
    <p class="exp-skills">{{ selectedWork.skills.join(' / ') }}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  props: ['selectedWork'],
  computed: {
    ...mapGetters({
      changeDetail: 'changeDetail',
    }),
    toDetail() {
      return this.$store.getters.toDetail;
    },
  },
};
</script>

<style scoped lang="scss">
  .exp-container {
    position: absolute;
    bottom: -35px;
    left: calc(100% + 70px);
    width: 300px;
    height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
  .exp-date {
    font-style: italic;
    margin-bottom: 0;
  }
  .exp-title {
    font-size: 1.4rem;
    font-weight: 400;
    margin-top: 0;
    margin-bottom: 10px;
  }
  .exp-short-desc {
    margin-top: 0;
    margin-bottom: 20px;
  }
  .exp-skills {
    margin-bottom: 0;
  }

  /* ==========    leaving animation    =========== */
  .exp-container {
    &.to-detail {
      animation: to-detail forwards;
      animation-duration: 0.5s;
      transition-timing-function: cubic-bezier(.14,0,.39,.75);
    }
  }
  @keyframes to-detail {
    to {
      left: calc(300%);
    }
  }
</style>
