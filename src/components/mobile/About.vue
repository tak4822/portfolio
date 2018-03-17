<template>
  <div class="mobile-about">
    <p class="about-introduce en">
      Hi there. I am Takeshi from Japan. Just call me Tak. <br>
      Currently, I am in Vancouver as a freelancer.
      I am good at creating unique designs, understanding business goals,
      developing rich user experiences, and coding with JavaScript.
      I am always looking for something interesting and beautiful.</p>
    <p class="about-introduce jp">
      こんにちは。Takと呼ばれています。<br>
      カナダでWebデザインとデベロップメントをするフリーランス活動をしています。
      ビジネスの信念に寄り添い、ゴールを常に意識したデザインと、JavaScriptで創るクリエイティブでリッチなユーザー体験が強みです。
      ウェブだけではなく、面白いこと美しいことをいつも探しています。
    </p>
    <div class="about-contact">
      <app-contact/>
    </div>
  </div>
</template>

<script>
import Contact from '../shared/Contact';

export default {
  components: {
    appContact: Contact,
  },
};
</script>

<style lang="scss" scoped>
  .mobile-about {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding-left: 5%;
    padding-right: 5%;
  }
  .about-introduce {
    width: 100%;
    max-width: 600px;
  }
  .about-contact {
    margin: 50px auto 100px;
    width: 100%;
  }
</style>
