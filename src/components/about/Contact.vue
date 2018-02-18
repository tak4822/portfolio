<template>
  <section class="about-contact">
    <div class="about-contact-left">
      <div class="about-contact-socials">
        <a class="icon-wrap contact" href="mailto:takeshoide@gmail.com">
          <img src="../../assets/img/assets/mail.svg" alt="">
        </a>
        <a href="" class="icon-wrap">
          <img src="../../assets/img/assets/github.svg" alt="">
        </a>
        <a href="" class="icon-wrap">
          <img src="../../assets/img/assets/linkedin.svg" alt="">
        </a>
      </div>
      <div class="about-contact-resume">
        View My Resume
      </div>
    </div>
    <div class="about-contact-right">
      <img src="../../assets/img/assets/fake-pic.jpg" alt="">
    </div>
  </section>
</template>

<style scoped lang="scss">
  .about-contact {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 100px;
  }
  .about-contact-left {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 600px;
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
  .about-contact-right {
    width: 600px;
    img {
      width: 100%;
    }
  }

  .about-contact-resume {
    font-weight: 100;
    font-size: 0.9rem;
  }
</style>
