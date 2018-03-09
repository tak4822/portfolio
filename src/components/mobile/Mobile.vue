<template>
  <div class="mobile-container">
    <p class="mobile-hi">Hi there!</p>
    <p>Currently this device size is not available.
      Please use your desktop with better user experience.</p>
    <div class="about-contact-left">
      <div class="about-contact-socials">
        <a class="icon-wrap contact" href="mailto:tkc4822@gmail.com">
          <img src="../../assets/img/assets/mail.svg" alt="">
        </a>
        <a href="https://github.com/tak4822" class="icon-wrap">
          <img src="../../assets/img/assets/github.svg" alt="">
        </a>
        <a href="https://www.linkedin.com/in/takeshi-oide-42b451153/" class="icon-wrap">
          <img src="../../assets/img/assets/linkedin.svg" alt="">
        </a>
      </div>
      <a href="/resume.pdf" target="_blank" class="about-contact-resume">
        View My Resume
      </a>
    </div>
  </div>
</template>

<script>

</script>

<style lang="scss" scoped>
  .mobile-hi {
    margin-top: 10px;
    font-weight: bold;
    font-size: 3rem;
  }
  .mobile-container {
    max-width: 400px;
    margin: 5% auto;
    padding: 5%;
  }
  .about-contact-left {
    margin-top: 100px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .about-contact-socials{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 150px;
    margin-bottom: 30px;
  }
  .icon-wrap {
    width: 30px;
    display: block;
    img {
      width: 100%;
    }
  }
  .about-contact-resume {
    font-weight: 100;
    font-size: 0.9rem;
  }
</style>
