<template>
  <div class="contact-container">
    <div class="contact-socials">
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
      VIEW RESUME
    </a>
  </div>
</template>

<style lang="scss" scoped>
  .contact-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  .contact-socials{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 200px;
    margin-bottom: 30px;
  }
  .icon-wrap {
    width: 30px;
    display: block;
    img {
      width: 100%;
    }
  }
  .contact-resume {
    font-weight: bold;
    font-size: 0.9rem;
  }
</style>
