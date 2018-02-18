<template>
  <div class="home-container">
    <div class="greeting">
      <h1 class="greeting-text">Hi, I’m Tak.  Front-end creative developper.</h1>
      <div>
        <span class="greeting-text border"> | </span>
        <a class="greeting-text contact" href="mailto:takeshi@gmail.com">CONTACT</a>
      </div>
    </div>

    <div class="home-nav-wrapper works">
      <router-link to="/works">
        <div class="home-nav out">
          <img src="../../assets/img/assets/works_top.svg" alt="">
        </div>
        <div class="home-nav inside">
          <img src="../../assets/img/assets/works_bottom.svg" alt="">
        </div>
      </router-link>
    </div>
    <div class="home-nav-wrapper about">
      <div class="about-link">
        <router-link to="/about">
          <div class="home-nav out">
            <img src="../../assets/img/assets/about_top.svg" alt="">
          </div>
          <div class="home-nav inside">
            <img src="../../assets/img/assets/about_bottom.svg" alt="">
          </div>
        </router-link>
      </div>
    </div>
    <div class="home-wrapper">
      <div class="home-name-images home-t">
        <img class="rose collage" src="../../assets/img/assets/rose.png" alt="">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 210.5 315">
          <clipPath id="t">
            <polygon
              class="svg-name t"
              points="181 0 113.5 0 0 0 52 97 113.5 97 113.5 315 210.5 315 210.5 0 181 0"
            ></polygon>
          </clipPath>
          <image clip-path="url(#t)" xlink:href="../../assets/img/assets/bg_blue.jpg"></image>
        </svg>
      </div>
      <div class="home-name-images home-a">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 234.4 203">
          <polygon class="svg-name a" points="0 203 234.4 203 117.2 0 0 203"></polygon>
        </svg>
      </div>
      <div class="home-name-images home-k">
        <img class="planet collage" src="../../assets/img/assets/planet.png" alt="">
        <img class="women collage" src="../../assets/img/assets/women.png" alt="">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 181 316">
          <clipPath id="k">
          <polygon
            class="svg-name k"
            points="181 0 0 0 0 1 0 311 0 316 180.7 316 89.56 157.12 181 0"
          ></polygon>
          </clipPath>
          <image
            clip-path="url(#k)"
            height="100%"
            xlink:href="../../assets/img/assets/bg_red.jpg">
          </image>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>

</script>

<style scoped lang="scss">
  .greeting {
    display: flex;
    font-size: 16px;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 50px auto 0 ;
    .greeting-text {
      font-size: 16px;
      font-weight: 200;
    }
    .border {
      margin: 0 20px;
    }
  }

  .home-wrapper {
    background: $beige;
    position: absolute;
    top: 12%;
    left: 8%;
    right: 8%;
    bottom: 12%;
    height: 76%;
    width: 84%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  .home-name-images {
    width: 320px;
    height: 420px;
    position: relative;
    z-index: 100;
    svg {
      height: 100%;
    }
  }

  /* =====  nav  ====== */
  .home-nav-wrapper {
    z-index: 1000;
    position: absolute;
    transform: rotate(-90deg);
    cursor: pointer;
    &.works {
      top: calc(52% + 148px);
      left: calc(8% - 30px);
      transform-origin: 0 0;
      .inside, .out {
        transition: all 0.4s cubic-bezier(1, 0.05, 0.78, 1);
      }
      .inside {
        margin-left: 2.4%;
        transform: translateX(15px);
      }
      .out {
        transform: translateX(-15px);
      }
    }
    &.about {
      top: calc(44% - 134px);
      right: calc(8% - 30px);
      transform-origin: 100% 100%;
      .inside, .out {
        transition: all 0.4s cubic-bezier(1, 0.05, 0.78, 1);
      }
      .inside {
        margin-left: -3.9%;
        transform: translateX(-15px);
      }
      .out {
        transform: translateX(15px);
      }
    }
    &:hover {
      .out, .inside {
        transform: translateX(0);
      }
    }
  }
  .home-nav {
    height: 30px;
    img {
      height: 100%;
    }
  }

  /* =====  SVG  ====== */
  svg {
    z-index: 10;
  }
  .svg-name {
    fill: white;
  }
  .collage {
    position: absolute;
    z-index:-1;
  }

  /* =====  T  ====== */
  .home-t {
    margin-right: 100px;
    text-align: right;
  }
  .rose {
    width: 300px;
    top: 65%;
    right: -10%;
  }
  .planet {
    width: 220px;
    bottom: calc(100% - 130px);
    left: -130px;
  }
  .women {
    height: 170px;
    position: absolute;
    top: 76%;
    right: -20%;
  }


  .home-a {
    svg {
      width: 100%
    }
  }
  .home-k {
    margin-left: 100px;
  }

  /*svg > polygon{*/
    /*background-image: url("../../assets/img/bg_blue.jpg");*/
    /*background-size: cover;*/
  /*}*/
</style>
