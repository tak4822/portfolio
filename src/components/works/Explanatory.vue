<template>
  <div class="exp-container">
    <p class="exp-date">{{ selectedWork.date }}</p>
    <h3 class="exp-title">{{ selectedWork.shortTitle }}</h3>
    <p class="exp-short-desc">{{ selectedWork.shortDesc }}</p>
    <p class="exp-skills">{{ selectedWork.skills.join(' / ') }}</p>
  </div>
</template>

<script>
export default {
  props: ['selectedWork'],
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
</style>
