<template>
  <div>
    <app-header/>
    <app-introduce/>
    <app-philosophy/>
    <app-contact/>
    <app-footer/>
  </div>
</template>


<script>
import Header from '../shared/Header';
import Introduce from './Introduce';
import Philosophy from './Philosophy';
import Contact from './Contact';
import Footer from '../shared/Footer';

export default {
  components: {
    appHeader: Header,
    appIntroduce: Introduce,
    appPhilosophy: Philosophy,
    appContact: Contact,
    appFooter: Footer,
  },
};
</script>

