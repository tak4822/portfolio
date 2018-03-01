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
    height: 50vw;
    display: flex;
    align-items: center;
    justify-content: center;
    background: $silver;
    img {
      width: 80%;
      height: 80%;
      object-fit: cover;
    }
  }
</style>
