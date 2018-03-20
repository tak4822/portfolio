<template>
  <div class="home-container">
    <div class="home-graphic-container" :class="{'enter': enter }">
      <div class="triangle" v-if="enter">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 234.4 203">
          <polygon class="svg-name a" points="0 203 234.4 203 117.2 0 0 203"></polygon>
        </svg>
      </div>
      <div class="back-square">
        <div class="t">
          <img class="svg-inside-image" src="../../assets/img/assets/home_t.png" alt="">
        </div>
        <div class="k">
          <img class="svg-inside-image" src="../../assets/img/assets/home_k.png" alt="">
        </div>
      </div>
      <div class="square-block"></div>
    </div>
    <div class="home-name" :class="{'enter': enter }">
      <div class="home-name-wrapper">
        <h1 class="name">Takeshi Oide</h1>
        <h2 class="role">Front-end Creative Developer</h2>
        <div class="block-reveal"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import preloadImg from '../../utils/preload';
import image1 from '../../assets/img/assets/home_t.png';
import image2 from '../../assets/img/assets/home_k.png';

export default {
  data() {
    return {
      back: false,
    };
  },
  computed: {
    ...mapGetters({
      enter: 'enter',
    }),
  },
  methods: {
    ...mapActions({
      finishPreloading: 'finishPreloading',
    }),
  },
  created() {
    const imageArr = [image1, image2];
    Promise.all(imageArr.map(img => preloadImg(img)))
      .then(() => {
        if (!this.$router.history.current.query.back) {
          this.finishPreloading();
        } else {
          setTimeout(() => {
            this.finishPreloading();
          }, 500);
        }
      });
  },
};

</script>

<style lang="scss" scoped>
  /* ======= Enter Animation =======*/
  .home-graphic-container.enter {
    .t {
      .svg-inside-image {
        animation: mobileTak .7s forwards 1s;

      }
    }
    .k {
      .svg-inside-image {
        animation: mobileTak .7s ease-out forwards 1s;
      }
    }
    .back-square {
      animation: mobileSquare .8s cubic-bezier(.95,0,.35,1.01)  forwards;
    }
    .square-block {
      animation: mobileSquare .8s cubic-bezier(.95,0,.35,1.01)  forwards;
    }
  }
  @keyframes mobileTak {
    to {
      transform: translateY(0);
    }
  }
  @keyframes mobileSquare {
    to {
      transform: translateX(0);
    }
  }
  .home-name.enter {
    .name, .role {
      animation: block-reveal-text 0.1s forwards 2.2s
    }
    .block-reveal {
      animation: block-reveal-block 1s cubic-bezier(.95,0,.35,1.01)  forwards 1.7s
    }
  }
  /* ======= General =======*/
  .home-container {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
  .home-graphic-container {
    width: 100%;
    height: 70vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 7vh;
    position: relative;
    @media screen and (max-width: 700px) {
      height: 60vh;
    }
  }
  .back-square {
    background: $beige;
    position: relative;
    width: 55%;
    transform: translateX(-1000px);
    &:after {
      content: "";
      display: block;
      padding-bottom: 50%;
    }
    @media screen and (max-width: 700px) {
      width: 65%;
    }
  }
  .square-block {
    background: $beige;
    width: 55%;
    transform: translateX(1000px);
    z-index: -20;
    &:after {
      content: "";
      display: block;
      padding-bottom: 50%;
    }
    @media screen and (max-width: 700px) {
      width: 65%;
    }
  }
  .triangle {
    z-index: 10;
    position: absolute;
    width: 25%;
    top: 37.5%;
    left: 37.5%;
    svg {
      width: 100%;
      fill: white;
    }
  }
  .t, .k {
    position: absolute;
    height: 155%;
    fill-opacity: 0;
    overflow: hidden;
    img {
      height: 100%
    }
  }
  .t {
    bottom: 0;
    right: 50%;
    .svg-inside-image {
      transform: translateY(110%);
    }
  }
  .k {
    top: 100%;
    left: 50%;
    .svg-inside-image {
      transform: translateY(-110%);
    }
  }
  .home-name {
    height: 20vh;
    text-align: center;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }
  .home-name-wrapper {
    margin-top: 40px;
    position: relative;
    overflow: hidden;
  }
  .block-reveal {
    position: absolute;
    top: 0;
    right: 100%;
    width: 100%;
    height: 100%;
    background: black;
  }
  .name {
    font-size: 2.5rem;
    margin: 0;
    margin-bottom: 5px;
    opacity: 0;
    @media screen and (max-width: 850px) {
      font-size: 2rem;
    }
    @media screen and (max-width: 700px) {
      font-size: 1.5rem;
    }
  }
  .role {
    font-style: italic;
    font-weight: 400;
    margin: 0;
    opacity: 0;
    @media screen and (max-width: 850px) {
      font-size: 1.2rem;
    }
    @media screen and (max-width: 700px) {
      font-size: 0.9rem;
    }
  }


</style>
