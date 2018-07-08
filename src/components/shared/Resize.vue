<template>
  <div class="resize-container">
    <h3>Hello! </h3>
    <p>Don't resize window size like that.
    You can see with your computer or mobile device with normal window size.</p>

    <a href="/" class="back-link">Click here to back the site.</a>

    <p>I ma very welcome for your comment,
      please <a class="resize-contact" href="mailto:tkc4822@gmail.com">contact me</a>.</p>
    <p>Thank you :)</p>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      desktop: 'desktop',
    }),
  },
  methods: {
    ...mapActions({
      handleWindowResize: 'handleWindowResize',
    }),
    checkResizeWindow() {
      if (this.desktop) {
        this.$router.push('/');
      }
    },
  },
  created() {
    window.addEventListener('resize', this.checkResizeWindow, false);
  },
};
</script>

<style>
  .resize-container {
    width: 400px;
    margin: 300px auto;
  }
  .resize-back {
    color : dodgerblue;
  }
  .resize-contact{
    color : dodgerblue;
  }
  .back-link {
    color: #fc452e;
    text-decoration: underline;
  }
</style>

