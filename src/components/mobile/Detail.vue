<template>
  <div>
    <div class="detail-top">
      <div class="detail-image-container"
           :style="{'background-color': selectedWork.color}">
        <img :src="getMainImage(selectedWork.mainImage)" alt="">
      </div>
      <div class="detail-name-container">
        <p class="name">{{ selectedWork.name }}</p>
        <p class="sub-title">{{ selectedWork.subTitle }}</p>
      </div>
    </div>
    <div class="detail-desc">
      <div class="date detail-desc-item">
        <p class="label">DATE</p>
        <p class="detail-desc-val">{{ selectedWork.date }}</p>
      </div>
      <div class="role detail-desc-item">
        <p class="label">ROLES</p>
        <ul class="detail-desc-list detail-desc-val">
          <li
            :key="index"
            class="desc-bullet-list"
            v-for="(item, index) in selectedWork.role">
            {{ item }}
          </li>
        </ul>
      </div>
      <div class="skills detail-desc-item">
        <p class="label">SKILLS</p>
        <ul class="detail-desc-list detail-desc-val">
          <li
            :key="index"
            class="desc-bullet-list"
            v-for="(item, index) in selectedWork.skills">
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
    <p class="desc-text">{{ selectedWork.description[0] }}</p>
    <a
      :href="selectedWork.url" target="_blank"
      class="visit-site-container"
      v-if="selectedWork.url">
      <img class="url-deco" src="../../assets/img/assets/desc_deco_bottom.svg" alt="">
      <p class="visit-site-link">
        VIEW SITE
        <span>
            <img class="arrow" src="../../assets/img/assets/arrow-right.svg" alt="">
          </span>
      </p>
    </a>
    <app-image :src="selectedWork.images[0]"/>
    <app-image :src="selectedWork.images[1]" v-if="selectedWork.images[1]"/>
    <div class="sec-comment-wrapper" v-if="selectedWork.description[1]">
      <p class="sec-comment">{{selectedWork.description[1]}}</p>
    </div>
    <app-image :src="selectedWork.images[2]" v-if="selectedWork.images[2]"/>
    <app-image :src="selectedWork.images[3]" v-if="selectedWork.images[3]"/>
    <div class="testimonial-wrapper" v-if="selectedWork.testimonials.length >= 2">
      <p class="testimonial">{{selectedWork.testimonials[0]}}</p>
      <p class="testimonial">- {{selectedWork.testimonials[1]}}</p>
    </div>
    <a href="mailto:tkc4822@gmail.com" class="contact-container">
      <img src="../../assets/img/assets/barcode.svg" alt="">
      <span class="detail-contact">LET'S TALK</span>
    </a>
    <div class="works-grid-container">
      <router-link
        :to="{ name: 'mobileDetailChange', params: { id: index } }"
        v-for="(work, index) in thumbnails"
        @click="selectWork(index)"
        :key="index"
        class="works-grid"
        :style="{'background-color': work.color}"
      >
        <img :src="getMainImage(work.mainImage)" alt="">
      </router-link>
    </div>
    <router-link to="/mobile" class="detail-footer-logo-wrapper">
      <img src="../../assets/img/assets/logo_glitch.svg" alt="" class="detail-footer-logo">
    </router-link>
    <app-footer/>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Image from '../shared/Image';
import Footer from '../shared/Footer';

export default {
  data() {
    return {
      showPage: false,
    };
  },
  computed: {
    ...mapGetters({
      selectedWork: 'selectedWork',
      thumbnails: 'thumbnails',
    }),
  },
  methods: {
    ...mapActions({
      selectWork: 'selectWork',
      mobileTransition: 'mobileTransition',
    }),
    getMainImage(src) {
      return require(`../../assets/img/mainImages/${src}`); // eslint-disable-line
    },
  },
  created() {
    this.selectWork(this.$route.params.id);
    setTimeout(() => {
      this.showPage = true;
    }, 500);
  },
  components: {
    appImage: Image,
    appFooter: Footer,
  },
  beforeRouteUpdate(to, from, next) {
    this.mobileTransition();
    setTimeout(() => {
      this.selectWork(to.params.id);
      next();
    }, 500);
  },
  beforeRouteLeave(to, from, next) {
    if (to.path === '/mobile') {
      this.mobileTransition();
      setTimeout(() => {
        next();
      }, 500);
    }
  },
};

</script>

<style lang="scss" scoped>
  .detail-top {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .detail-image-container {
    width: 400px;
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 700px) {
      width: 200px;
      height: 200px;
    }
    img {
      width: 70%;
    }
  }
  .detail-name-container {
    text-align: center;
    @media screen and (max-width: 700px) {
      transform: translateY(60px);
    }
  }
  .name {
    font-weight: 800;
    font-size: 1.8rem;
    margin: 120px auto 10px;
  }
  .sub-title {
    font-style: italic;
    font-weight: 400;
    font-size: 1rem;
    margin: 0;
  }

  /* ===== Description ======*/
  .detail-desc {
    width: 600px;
    margin: 50px auto;
    display: flex;
    justify-content: space-between;
    @media screen and (max-width: 700px) {
      flex-direction: column;
      padding-left: calc(50% - 120px);
    }
  }
  .detail-desc-item {
    @media screen and (max-width: 700px) {
      display: flex;
    }
  }
  .label {
    font-weight: 400;
    @media screen and (max-width: 700px) {
      width: 100px
    }
  }
  .detail-desc-val {
    font-weight: 100;
  }
  .detail-desc-list {
    list-style-type: none;
    padding: 0;
  }
  .desc-bullet-list {
    padding-bottom: 0.2rem;
  }
  .desc-text {
    width: 600px;
    margin: 30px auto;
    @media screen and (max-width: 700px) {
      width: 90%;
      margin: 30px 5%;
    }
  }
  .visit-site-container {
    display: flex;
    align-items: center;
    width: 600px;
    margin: auto;
    @media screen and (max-width: 700px) {
      padding-left: 5%;
    }
    .url-deco {
      height: 30px;
    }
    .visit-site-link {
      font-weight: 600;
      padding-left: 10px;
    }
    .arrow {
      width: 8px;
      padding: 5px 0 0 5px;
    }
  }
  /* ===== contents ======*/
  .sec-comment-wrapper {
    width: 85%;
    max-width: 400px;
    margin: 100px auto;
    /*@media screen and (max-width: 700px) {*/
      /*width: */
    /*}*/
  }
  .testimonial-wrapper {
    width: 85%;
    max-width: 400px;
    margin: 150px auto;
    position: relative;
    &:before {
      z-index: -20;
      position: absolute;
      top: -80px;
      left: -50px;
      content: url("../../assets/img/assets/testimonial-icon.svg");
      width: 160px;
    }
  }
  /* ===== Footer ======*/
  .contact-container {
    margin: 150px auto;
    width: 85px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 700px) {
      margin: 100px auto;
    }
    .detail-contact {
      transition: all 0.3s ease;
    }
    img {
      width: 100%;
      margin-bottom: 10px;
      transition: all 0.3s ease;
    }
  }

  .works-grid-container {
    margin: 100px auto;
    width: 570px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    @media screen and (max-width: 700px) {
      width: 360px;
    }
  }
  .works-grid {
    width: 150px;
    height: 150px;
    margin: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 700px) {
      width: 100px;
      height: 100px;
      margin: 10px;
    }
    img {
      width: 80%;
    }
  }
  .detail-footer-logo-wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .detail-footer-logo {
    width: 50%;
    max-width: 250px;
    margin: 50px auto 0;
  }

</style>
