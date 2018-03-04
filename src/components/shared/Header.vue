<template>
  <div class="header-container">
    <div class="logo-container">
      <router-link to="/">
        <img src="../../assets/img/assets/logo_glitch.svg" alt="">
      </router-link>
    </div>
    <div class="global-nav-container">
      <ul class="global-nav">
        <li class="global-nav-list contact">
          <a class="contact" href="mailto:takeshi@gamil.com">
            CONTACT
            <!--{/* <img src="../../assets/img/assets/mail.svg" alt=""> */}-->
          </a>
        </li>
        <li class="global-nav-list">
          <div class="bar"></div>
          <router-link class="header-nav-text" to="/about">
            ABOUT
            <div class="bar"></div>
          </router-link>
        </li>
        <li class="global-nav-list">
          <router-link class="header-nav-text" to="/works">
            <div class="bar"></div>
            WORKS
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<style scoped lang="scss">
  .header-container {
    z-index: 100;
    position: fixed;
    top: 0;
    height: 150px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .logo-container {
    width: 120px;
    margin-left: 4%;
    img {
      width: 100%;
    }
  }
  .global-nav-container {
    margin-right: 4%;
    font-size: 1.2rem;
    font-weight: 600;
    .global-nav {
      margin: 0;
      padding: 0;
      list-style-type: none;
    }
  }
  .global-nav-list {
    float: right;
    margin-right: 35px ;
    &.contact {
      padding-left: 35px;
      border-left: 1px solid $text;
      height: 24px;
      img {
        height: 100%;
      }
    }
  }
  .header-nav-text {
    position: relative;
    display: block;
    padding: 0 5px;
    overflow: hidden;
    .bar {
      width: 100%;
      height: 1px;
      background: black;
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateX(-100%);
      transition: transform .3s ease-in;
    }
    &:hover {
      .bar {
        transform: translateX(0);
      }
    }
  }

  .header-nav-text.router-link-exact-active {
    .bar {
      transform: translateX(0);
    }
  }
</style>
