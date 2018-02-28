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
          <a class="contact" href="mailto:takeshi@gamil.com">CONTACT</a>
        </li>
        <li class="global-nav-list">
          <router-link to="/about">ABOUT</router-link>
        </li>
        <li class="global-nav-list">
          <router-link to="/works">WORKS</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
</script>

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
      border-left: 2px solid $text;
    }
  }
</style>
