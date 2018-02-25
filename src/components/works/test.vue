<template>
  <div class="work-container">
    <div class="wrapper">
      <div class="work" id="work"></div>
      <div class="door"></div>
      <div class="ripple l-side"></div>
      <div class="ripple r-side"></div>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
      <defs>
        <filter id="fancy-goo">
          <feGaussianBlur in="SourceGraphic" stdDeviation="15" result="blur" />
          <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
          <feComposite in="SourceGraphic" in2="goo" operator="over"/>
        </filter>
      </defs>
    </svg>
  </div>
</template>

<script>

</script>

<style scoped lang="scss">
  .work-container {
    perspective: 1000px;
  }
  .wrapper {
    filter: url('#fancy-goo');
    position:relative;
    margin-top: 10%;
    margin-left: 10vh;
    width: 80%;
    height: 80vh;
    overflow: hidden;
  }
  .work {
    width: 500px;
    height: 300px;
    background: #EAE9DB;
    position: absolute;
    top: calc(50% - 150px);
    left: calc(50% - 250px);
    animation: comein;
    animation-duration: 1s;
  }
  @keyframes comein {
    from {
      transform: translateX(-500px);
    }
    60% {
      transform: translateX(-150px);
    }
    to {
      transform: translateX(0);
    }
  }
  .door {
    width: 50px;
    height: 500px;
    background: black;
    position: absolute;
    top: calc(50% - 250px);
    left: 0;
  }

  .ripple {
    width: 150px;
    height: 150px;
    background-color: black;
    overflow: hidden;
    border-radius: 50%;
    position: absolute;
    left: -100px;
    top: calc(50% - 75px);
  }
  .l-side {
    animation: l-side-ripple;
    animation-duration: .5s;
    animation-delay: .5s;
  }
  .r-side {
    animation: r-side-ripple;
    animation-duration: .5s;
    animation-delay: .5s;
  }
  @keyframes l-side-ripple {
    0% {
      top: calc(50% - 75px);
      left: 0px;
    }
    25% {
      top: calc(50% - 75px);
      left: 0px;
    }
    50% {
      top: calc(50% - 150px);
      left: -100px;
    }
    100% {
      top: calc(50% - 225px);
      left: -90px;
    }
  }
  @keyframes r-side-ripple {
    0% {
      top: calc(50% - 75px);
      left: 0px;
    }
    25% {
      top: calc(50% - 75px);
      left: 0px;
    }
    30% {
      top: 50%;
      left: -100px;
    }
    100% {
      top: calc(50% + 75px);
      left: -90px;
    }
  }

</style>
