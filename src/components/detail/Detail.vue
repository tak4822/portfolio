<template>
<div>
  <app-description
    :name="selectedWork.name"
    :subTitle="selectedWork.subTitle"
    :date="selectedWork.date"
    :client="selectedWork.client"
    :role="selectedWork.role"
    :skills="selectedWork.skills"
    :description="selectedWork.description[0]"
    :url="selectedWork.url"
  />
  <app-image :src="selectedWork.images[0]"/>
  <app-image :src="selectedWork.images[1]" v-if="selectedWork.images[1]"/>
  <div class="sec-comment-wrapper" v-if="selectedWork.description[1]">
    <p class="sec-comment">{{selectedWork.description[1]}}</p>
  </div>
  <app-image :src="selectedWork.images[2]" v-if="selectedWork.images[2]"/>
  <app-image :src="selectedWork.images[3]" v-if="selectedWork.images[3]"/>
  <div class="testimonial-wrapper" v-if="selectedWork.testimonials.length >= 2">
    <p class="testimonial">{{selectedWork.testimonials[0]}}</p>
    <p class="testimonial">- {{selectedWork.testimonials[1]}}</p>
  </div>
  <app-footer
    :prevWorkId="prevWorkId"
    :nextWorkId="nextWorkId"
  />
</div>
</template>

<script>
import { mapGetters } from 'vuex';
import Description from './Description';
import Image from './Image';
import Footer from './Footer';
// import works from '../../data/works';

export default {
  components: {
    appDescription: Description,
    appImage: Image,
    appFooter: Footer,
  },
  computed: {
    ...mapGetters({
      selectedWork: 'selectedWork',
      worksLength: 'worksLength',
    }),
    prevWorkId() {
      if (this.selectedWork.id === 0) return this.worksLength - 1;
      return this.selectedWork.id - 1;
    },
    nextWorkId() {
      if (this.selectedWork.id === this.worksLength - 1) return 0;
      return this.selectedWork.id + 1;
    },
  },
};
</script>

<style scoped lang="scss">
  .sec-comment-wrapper {
    width: 550px;
    margin: 300px auto;
  }
  .sec-comment {
    font-size: 1.1rem;
    line-height: 1.8rem;
  }
  .testimonial-wrapper {
    width: 550px;
    margin: 300px auto;
  }
  .testimonial {
    font-size: 1.1rem;
    line-height: 1.8rem;
  }
</style>
