<template>
  <div class="work-container">
    <div class="main-image-container" :style="{'background-color': work.color}">
      <img :src="getImageSrc()" alt="">
    </div>
    <div class="exp-container">
      <p class="exp-date">{{ work.date }}</p>
      <h3 class="exp-title">{{ work.shortTitle }}</h3>
      <p class="exp-short-desc">{{ work.shortDesc }}</p>
      <p class="exp-skills">{{ work.skills.join(' / ') }}</p>
      <router-link
        :to="{ name: 'mobileDetail', params: { id: work.id } }"
        class="button-container">
        <p class="button-text">VIEW DETAIL</p>
        <div class="mobile-button-bar"></div>
      </router-link>
    </div>
  </div>
</template>

<script>
const images = require.context('../../assets/img/mainImages/', false, /^\.\//);

export default {
  props: ['work'],
  methods: {
    getImageSrc() {
      if (this.work.mainImage === undefined) return '';
      return images(`./${this.work.mainImage}`);
    },
  },
};

</script>

<style lang="scss" scoped>
  .work-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 100px;
    margin-bottom: 150px;
    @media screen and (max-width: 700px) {
      flex-direction: column;
    }
  }
  .main-image-container {
    width: 250px;
    height: 250px;
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 700px) {
      width: 160px;
      height: 160px;
      margin-bottom: 70px;
    }
    img {
      width: 75%;
    }
  }
  .exp-container {
    width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 30px;
    @media screen and (max-width: 700px) {
      margin-left: 0;
    }
  }
  .exp-date {
    font-size: 0.8rem;
    font-style: italic;
    margin: 0;
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
    @media screen and (max-width: 700px) {
      margin-bottom: 5px;
    }
  }
  .exp-skills {
    margin-bottom: 0;
  }
  .button-container {
    width: 100%;
    position: relative;
    margin-top: 20px;
  }
  .button-text {
    font-weight: 600;
  }

  .mobile-button-bar {
    position: absolute;
    top: 50%;
    left: calc(50% - 30px);
    width: 600px;
    height: 1px;
    background: black;
  }

</style>
