<template>
  <div class="exp-container" :class="{ 'to-detail': toDetail, 'changeDetail': changeDetail }">
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
      toDetail: 'toDetail',
      changeDetail: 'changeDetail',
    }),
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
    @media screen and (max-width: 1500px) {
      bottom: -23px;
      left: calc(100% + 50px);
      font-size: 0.9rem;
      width: 250px
    }
  }
  .exp-date {
    font-size: 0.8rem;
    font-style: italic;
    margin-bottom: 0;
  }
  .exp-title {
    font-size: 1.4rem;
    font-weight: 400;
    margin-top: 0;
    margin-bottom: 10px;
    @media screen and (max-width: 1500px) {
      font-size: 1.2rem;
    }
  }
  .exp-short-desc {
    margin-top: 0;
    margin-bottom: 20px;
    font-size: 0.8rem;
  }
  .exp-skills {
    margin-bottom: 0;
  }

  /* ==========    leaving animation    =========== */
  .exp-container {
    &.to-detail {
      animation: exp-to-detail forwards;
      animation-duration: 0.8s;
      transition-timing-function: cubic-bezier(.14,0,.39,.75);
    }
    &.changeDetail {
      opacity: 0;
    }
  }
  @keyframes exp-to-detail {
    to {
      transform: translateX(100px);
      opacity: 0;
    }
  }
</style>
