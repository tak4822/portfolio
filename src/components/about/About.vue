<template>
  <div>
    <app-introduce/>
    <app-philosophy/>
    <app-contact/>
    <app-footer/>
  </div>
</template>


<script>
import Introduce from './Introduce';
import Philosophy from './Philosophy';
import Contact from './Contact';
import Footer from '../shared/Footer';

export default {
  components: {
    appIntroduce: Introduce,
    appPhilosophy: Philosophy,
    appContact: Contact,
    appFooter: Footer,
  },
};
</script>

