<template>
  <div class="detail-footer-container">
    <div class="prev-container btn-container"
         @click="clickHandler('prev')">
      <router-link :to="{ name: 'changeDetail', params: { id: prevWorkId }}">
        <div class="bar" :class="{'active': prevBtnActive}"></div>
        <p class="prev-btn" :class="{'active': prevBtnActive}">PREVIOUS WORK</p>
      </router-link>
    </div>
    <a href="mailto:tkc4822@gmail.com" class="contact-container">
      <img src="../../assets/img/assets/barcode.svg" alt="">
      <span class="detail-contact">LET'S TALK</span>
    </a>
    <div class="next-container btn-container"
         @click="clickHandler('next')">
      <router-link :to="{ name: 'changeDetail', params: { id: nextWorkId }}">
        <div class="bar" :class="{'active': nextBtnActive}"></div>
        <p class="next-btn" :class="{'active': nextBtnActive}">NEXT WORK</p>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  props: ['prevWorkId', 'nextWorkId'],
  data() {
    return {
      prevBtnActive: false,
      nextBtnActive: false,
    };
  },
  methods: {
    ...mapActions({
      selectWork: 'selectWork',
      hideScrollIcon: 'hideScrollIcon',
      changeDetail: 'changeDetail',
    }),
    clickHandler(direction) {
      this.hideScrollIcon();
      this.changeDetail();
      if (direction === 'prev') {
        this.prevBtnActive = true;
        setTimeout(() => {
          this.selectWork(this.prevWorkId);
          this.prevBtnActive = false;
        }, 1000);
      } else if (direction === 'next') {
        this.nextBtnActive = true;
        setTimeout(() => {
          this.selectWork(this.nextWorkId);
          this.nextBtnActive = false;
        }, 1000);
      }
    },
  },
};
</script>

<style scoped lang="scss">
  /* ========  GNERAL ========== */
  .detail-footer-container {
    margin-top: 400px;
    display: flex;
    width: 100%;
    margin-bottom: 200px;
    justify-content: space-between;
    align-items: center;
  }
  .btn-container {
    width: 20vw;
    height: 50px;
    position: relative;
  }
  .bar {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    border-bottom: 1px solid $text;
    transition: all 0.3s ease-out;
  }
  /* ========  PREVIOUS BUTTON ========== */
  .prev-container {
    text-align: right;
    .bar {
      right: 100%;
      &.active {
        right: 0;
      }
    }
    .prev-btn {
      transition: all 0.6s ease-out;
      &.active {
        animation: prevGo forwards;
        animation-duration: .6s;
        transition-timing-function: cubic-bezier(.16,-0.5,.58,.3);
      }
    }
    &:hover {
      .bar {
        right: 0;
      }
      .prev-btn {
        transform: skewX(-10deg);
      }
    }
  }
  @keyframes prevGo {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-400px);
    }
  }
  /* ========  NEXT BUTTON ========== */
  .next-container {
    text-align: left;
    .bar {
      left: 100%;
      &.active {
        left: 0;
      }
    }
    .next-btn {
      transition: all 0.6s ease-out;
      &.active {
        animation: nextGo forwards;
        animation-duration: .6s;
        transition-timing-function: cubic-bezier(.16,-0.5,.58,.3);
      }
    }
    &:hover {
      .bar {
        left: 0;
      }
      .next-btn {
        transform: skewX(10deg);
      }
    }
  }
  @keyframes nextGo {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(400px);
    }
  }
  /* ========  LETS TALK BUTTON ========== */
  .contact-container {
    width: 85px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .detail-contact {
      transition: all 0.3s ease;
    }
    img {
      width: 100%;
      margin-bottom: 10px;
      transition: all 0.3s ease;
    }
    &:hover {
      img{
        transform: skewX(-10deg);
      }
      .detail-contact {
        transform: skewX(-10deg);
      }
    }
  }

</style>
