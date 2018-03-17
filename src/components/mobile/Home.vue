<template>
  <div class="home-container">
    <div class="home-graphic-container">
      <div class="back-square">
        <div class="t">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 210.5 315">
            <polygon
              id="pol-t"
              class="svg-name t"
              points="181 0 113.5 0 0 0 52 97 113.5 97 113.5 315 210.5 315 210.5 0 181 0"
            ></polygon>
            <clipPath id="t">
              <use xlink:href="#pol-t"></use>
            </clipPath>
            <image
              clip-path="url(#t)"
              class="svg-inside-image"
              xlink:href="../../assets/img/assets/bg_blue.jpg"></image>
          </svg>
        </div>
        <div class="k">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 181 316">
            <polygon
              id="pol-k"
              points="181 0 0 0 0 1 0 311 0 316 180.7 316 89.56 157.12 181 0"
            ></polygon>
            <clipPath id="k">
              <use xlink:href="#pol-k"></use>
            </clipPath>
            <image
              class="svg-inside-image"
              clip-path="url(#k)"
              height="100%"
              xlink:href="../../assets/img/assets/bg_red.jpg">
            </image>
          </svg>
        </div>
        <div class="triangle">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 234.4 203">
            <polygon class="svg-name a" points="0 203 234.4 203 117.2 0 0 203"></polygon>
          </svg>
        </div>
      </div>
    </div>
    <div class="home-name">
      <h1 class="name">Takeshi Oide</h1>
      <h2 class="role">Front-end Creative Developer</h2>
    </div>
  </div>
</template>

<script>

</script>

<style lang="scss" scoped>
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
    justify-content: center;
    align-items: center;
    margin-top: 7vh;
    @media screen and (max-width: 700px) {
      height: 60vh;
    }
  }
  .back-square {
    background: $beige;
    position: relative;
    width: 55%;
    &:after {
      content: "";
      display: block;
      padding-bottom: 100%;
    }
    @media screen and (max-width: 700px) {
      width: 65%;
    }
  }
  .triangle {
    position: absolute;
    width: 45%;
    top: 27.5%;
    left: 27.5%;
    svg {
      width: 100%;
      fill: white;
    }
  }
  .t, .k {
    position: absolute;
    height: 80%;
    svg {
      height: 100%
    }
  }
  .t {
    bottom: 50%;
    right: 50%;
  }
  .k {
    top: 50%;
    left: 50%;
  }
  .home-name {
    height: 20vh;
    text-align: center;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }
  .name {
    font-size: 2.5rem;
    margin-bottom: 5px;
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
    @media screen and (max-width: 850px) {
      font-size: 1.2rem;
    }
    @media screen and (max-width: 700px) {
      font-size: 0.9rem;
    }
  }


</style>
