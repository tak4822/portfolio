<template>
  <section class="about-contact">
    <div class="about-contact-left">
      <app-contact/>
    </div>
    <div class="about-contact-right">
      <img src="../../assets/img/assets/takeshi_smile_bw.jpg" alt="">
    </div>
  </section>
</template>

<script>
import Contact from '../shared/Contact';

export default {
  components: {
    appContact: Contact,
  },
};
</script>

<style scoped lang="scss">
  .about-contact {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 100px;
  }
  .about-contact-left {
    width: 500px;
  }
  .about-contact-right {
    width: 500px;
    img {
      width: 100%;
    }
  }
</style>
