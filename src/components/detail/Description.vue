<template>
  <div class="desc-container">
    <h3 class="desc-name">{{name}}</h3>
    <div class="desc-inside-wrapper">
      <p class="sub-title">{{subTitle}}</p>
      <div class="desc-right">
        <div class="desc-bullet-container">
          <div class="desc-bullet">
            <p class="desc-bullet-title">DATE</p>
            <img src="../../assets/img/assets/desc-bullet-deco.svg" alt="">
            <ul class="desc-bullet-list-wrap">
              <li class="desc-bullet-list">{{ date }}</li>
            </ul>
          </div>
          <div class="desc-bullet">
            <p class="desc-bullet-title">ROLES</p>
            <img src="../../assets/img/assets/desc-bullet-deco.svg" alt="">
            <ul class="desc-bullet-list-wrap">
              <li
                :key="index"
                class="desc-bullet-list"
                v-for="(item, index) in role">
                {{ item }}
              </li>
            </ul>
          </div>
          <div class="desc-bullet">
            <p class="desc-bullet-title">SKILLS</p>
            <img src="../../assets/img/assets/desc-bullet-deco.svg" alt="">
            <ul class="desc-bullet-list-wrap">
              <li
                :key="index"
                class="desc-bullet-list"
                v-for="(skill, index) in skills">
                {{ skill }}
              </li>
            </ul>
          </div>
        </div>
        <p class="desc-text">{{ description }}</p>
      </div>
      <a :href="url" target="_blank" class="visit-site-container" v-if="url">
        <img class="big-deco" src="../../assets/img/assets/desc_deco_bottom.svg" alt="">
        <p class="visit-site-link">
          VIEW SITE
          <span>
            <img class="arrow" src="../../assets/img/assets/arrow-right.svg" alt="">
          </span>
        </p>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    subTitle: {
      type: String,
      required: true,
    },
    client: {
      type: String,
      required: true,
    },
    role: {
      type: Array,
      required: true,
    },
    skills: {
      type: Array,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },

};
</script>

<style lang="scss" scoped>
  /* ========  DESCRIPTION GENERAL ========== */
  .desc-container {
    padding: 50px 0;
    margin-left: calc(50% - 500px);
    @media screen and (max-width: 1200px) {
      margin-left: calc(50% - 400px); // left: 300px right: 500px
    }
  }
  .desc-name {
    font-size: 4rem;
  }
  .desc-inside-wrapper {
    display: flex;
    position: relative;
  }
  .visit-site-container {
    position: absolute;
    top: calc(100% - 50px);
    left: 0;
    display: flex;
    .big-deco {
      width: 50px;
      height: 50px;
      transition: all 0.2s linear;
    }
    /* ======== VISIT SITE URL ========== */
    .visit-site-link {
      margin-top: 80px;
      display: flex;
      font-weight: 600;
      flex-direction: row;
      align-items: center;
      transition: all 0.2s linear;
      .arrow {
        width: 12px;
        height: 12px;
        margin-left: 20px;
        transition: all 0.3s linear;
      }
    }
    &:hover {
      .big-deco {
        transform: skewX(-10deg);
      }
      .visit-site-link {
        transform: skewX(-10deg);
        .arrow {
          margin-left: 30px;
        }
      }
    }
  }
  /* ======== LEFT SIDE ========== */
  .sub-title {
    width: 500px;
    font-size: 1.8rem;
    font-style: italic;
    font-weight: 400;
    margin-top: 0;
    @media screen and (max-width: 1200px) {
      width: 300px
    }
  }
  /* ======== RIGHT SIDE ========== */
  .desc-right {
    width: 500px;
    img {
      width: 25px;
      margin-top: -3px;
      margin-bottom: 3px;
    }
  }
  .desc-bullet-container {
    display: flex;
    flex-direction: row;
  }
  .desc-bullet {
    width: 35%;
    &:first-child {
      width: 30%;
    }
  }
  .desc-bullet-title {
    margin-top: 0;
    margin-bottom: 0;
    font-size: 0.9rem;
    font-weight: 600;
  }
  .desc-bullet-list-wrap {
    margin-top: 10px;
    list-style-type: none;
    padding-left: 0;
  }
  .desc-bullet-list {
    font-weight: 200;
    font-size: 0.9rem;
    padding-bottom: 3px;
  }
  .desc-text {
    margin-bottom: 0;
    font-size: 0.8rem;
    line-height: 1.5rem;
  }


</style>
