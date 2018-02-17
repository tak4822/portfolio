<template>
  <section>
    <article class="about-introduce-container">
      <h2 class="about-introduce-name">Takeshi Oide</h2>
      <p class="about-introduce-role">Front-end Creative Developer</p>
      <p class="about-introduce en">
        Hi there. I am Takeshi from Japan. Just call me Tak. <br>
        Currently, I am in Vancouver as a freelancer.
        I am good at creating unique designs, understanding business goals,
        developing rich user experiences, and coding with JavaScript.
        I am always looking for something interesting and beautiful.</p>
      <p class="about-introduce jp">
        こんにちは。Takと呼ばれています。<br>
        カナダでWebもデザインとデベロップメントをするフリーランス活動をしています。
        ビジネスの信念に寄り添い、ゴールを常に意識したデザインと、JavaScriptで創るクリエイティブでリッチなユーザー体験が強みです。
        ウェブだけではなく、面白いこと美しいことをいつも探しています。
      </p>
    </article>
    <div class="video-container">
      video
    </div>
  </section>
</template>

<style scoped lang="scss">
  .about-introduce-container {
    width: 480px;
    margin-left: 13%;
    margin-top: 350px;
  }
  .about-introduce-name {
    font-weight: 800;
    font-size: 3rem;
    margin-bottom: 10px;
  }
  .about-introduce-role {
    font-weight: 400;
    font-style: italic;
    font-size: 1.2rem;
    margin: 0 0 110px;
  }
  .about-introduce {
    margin-bottom: 30px;
  }

  .video-container {
    position: absolute;
    top: 150px;
    right: 100px;
    width: 800px;
    height: 700px;
    background: pink;
    z-index: -10;
  }
</style>
