<template>
  <div>
    <div class="image-frame">
      <img
        :src="computedSrc"
        alt=""
        :class="{ 'is-mobile': isMobile }"
      >
    </div>
  </div>
</template>

<script>
export default {
  props: ['src', 'isMobile'],
  computed: {
    computedSrc() {
      if (this.src !== null) {
        return require(`../../assets/img/${this.src}`); // eslint-disable-line
      }
      return '';
    },
  },
};
</script>

<style scoped lang="scss">
  .image-frame {
    width: 90%;
    margin-left: 5%;
    margin-top: 200px;
    height: 52vw;
    display: flex;
    align-items: center;
    justify-content: center;
    background: $silver;
    @media screen and (max-width: 1024px) {
      margin-top: 100px;
    }
    @media screen and (max-width: 700px) {
      margin-left: 0;
      width: 100%;
      height: 72vw;
      margin-top: 60px;
    }
    img {
      width: 90%;
      height: 70%;
      object-fit: cover;
    }
  }
</style>
