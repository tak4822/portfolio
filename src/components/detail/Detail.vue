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
  <!--<app-image-->
    <!--:src="selectedWork.images[0]"-->
  <!--/>-->
</div>
</template>

<script>
import Description from './Description';
import Image from './Image';
// import works from '../../data/works';
import EventBus from '../../store/EventBus';

export default {
  components: {
    appDescription: Description,
    appImage: Image,
  },
  data() {
    return {
      selectedWork: {},
    };
  },
  created() {
    EventBus.$on('workWasChanged', (work) => {
      this.selectedWork = work;
    });
  },
};

</script>
