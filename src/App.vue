<template  >
  <div>
     <navbarMenu/>
     <homeSection/>
     <aboutUs/>
     <teamLaw/>
     <servicesLaw/>
     <HelpCenter/>
     <contactLaw/>
     <rodapeLaw/>
  </div>
   
  
  
</template>

<script>
import navbarMenu from './components/navbarMenu.vue';
import homeSection from './components/homeSection.vue';
import aboutUs from './components/aboutUs.vue';
import teamLaw from './components/teamLaw.vue';
import servicesLaw from './components/servicesLaw.vue';
import HelpCenter from './components/HelpCenter.vue';
import contactLaw from './components/contactLaw.vue';
import rodapeLaw from './components/rodapeLaw.vue';

export default {
  name: 'App',
  components: {
    navbarMenu,
    homeSection,
    aboutUs,
    teamLaw,
    servicesLaw,
    HelpCenter,
   contactLaw,
    rodapeLaw,
  }
}
</script>


<style>
*{
  margin: 0;
  box-sizing: border-box;
 font-family: "Cinzel", serif;
  font-optical-sizing: auto;
  font-weight: bold;
  font-style: normal;
  background-color:#212529;;
}
</style>