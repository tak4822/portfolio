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
  <app-image :src="selectedWork.images[1]"/>
  <div class="sec-comment-wrapper" v-if="selectedWork.description[1]">
    <p class="sec-comment">{{selectedWork.description[1]}}</p>
  </div>
  <app-image :src="selectedWork.images[2]"/>
  <app-image :src="selectedWork.images[3]"/>
  <div class="testimonial-wrapper" v-if="selectedWork.testimonials.length >= 2">
    <p class="testimonial">{{selectedWork.testimonials[0]}}</p>
    <p class="testimonial">- {{selectedWork.testimonials[1]}}</p>
  </div>

</div>
</template>

<script>
import { mapGetters } from 'vuex';
import Description from './Description';
import Image from './Image';
// import works from '../../data/works';

export default {
  components: {
    appDescription: Description,
    appImage: Image,
  },
  computed: {
    ...mapGetters({
      selectedWork: 'selectedWork',
    }),
  },
  watch: {
    selectedWork(val) {
      console.log('watch', val);
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
