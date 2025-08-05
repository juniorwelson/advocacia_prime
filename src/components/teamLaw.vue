<template>
  <div> 

   
    <div class="text-center " id="boxTitle">
      <h2 class="text-center" id="SecondTitle">Nossa Equipe</h2>
    </div>

    <!-- Cards -->
    <section class="container-fluid d-flex justify-content-evenly flex-wrap py-4" data-aos="fade-up">
      
      <!-- primeiro card -->
      <div class="card mb-4 lawr" style="width: 18rem;" >
        <img src="/img/advogado1.jpg" class="card-img-top" alt="foto do advogado" id="img1">
        <div class="card-body">
          <h5 class="card-title text-light">Dr. João Silva</h5>
          <p class="card-text text-warning">Pós-graduado em Direito Previdenciário. Atuação especializada em aposentadorias, pensões, auxílios e revisões de benefícios junto ao INSS.</p>
          <a href="#" class="nav-link text-warning text-center mt-5 law" target="_blank">Saiba mais</a>
        </div>
      </div>

      <!-- segundo card -->
      <div class="card mb-4 lawr" style="width: 18rem;">
        <img src="/img/advogado3.jpg" class="card-img-top" alt="foto do advogado" id="img2">
        <div class="card-body">
          <h5 class="card-title text-light">Dra. Mariana Alves</h5>
          <p class="card-text text-warning">Com sólida formação acadêmica, defende os direitos dos segurados em benefícios como aposentadoria, pensão por morte e auxílio-doença.</p>
          <a href="#" class="nav-link text-warning text-center mt-5 law" target="_blank">Saiba mais</a>
        </div>
      </div>

      <!-- terceiro card -->
      <div class="card mb-4 lawr" style="width: 18rem;">
        <img src="/img/advogado2.jpg" class="card-img-top" alt="foto do advogado" id="img3">
        <div class="card-body">
          <h5 class="card-title text-light">Dr. Pedro Rocha</h5>
          <p class="card-text text-warning">Formação jurídica com foco em Direito Social. Experiência na concessão e revisão de benefícios previdenciários e assistenciais.</p>
          <a href="#" class="nav-link text-warning text-center mt-5 law" target="_blank">Saiba mais</a>
        </div>
      </div>

    </section>
  </div>
</template>

<script>
import AOS from 'aos';
import 'aos/dist/aos.css';
export default {
  name: 'teamLaw',
  mounted() {
    AOS.init();
  }
}
</script>


<style scoped>
#img2{
  height: 430px;
}

.law{
  height: 50px;
  font-size: 20px;
  background-color: #fdfdfd;
  border-radius: 10px;
  width: 200px;
  padding-top: 10px;
  margin-left: 25px;
}

.law:hover{
    background-color:   #fcba02;
    color: #ffffff!important ; 
      box-shadow: 0 0 15px #fcba02;
}

.lawr{
  transition: transform 0.3s ease;
}

.lawr:hover {
  transform: scale(1.1); /* aumenta em 20% */
}

#SecondTitle{
  font-size: 3em;
    color: #fcba02;
    font-weight: bold;
padding-bottom: 2px;
}

#boxTitle{
padding-top: 8px;
border: 1px solid #fcba02;
width: 400px;
height: 70px;
margin-left: 10%;
margin-top: 7%;
margin-bottom: 30px;
border-radius: 10px;
}


/*responsivo max 450px*/
@media (max-width:450px){
  #boxTitle{
padding-top: 15px;
border: 1px solid #fcba02;
width: 300px;
height: 70px;
margin-left: 8%;
margin-top: 7%;
margin-bottom: 30px;
}  

#SecondTitle{
    font-size: 2em;
    color: #fcba02;
    font-weight: bold;
padding-bottom: 2px;

}
}


/*responsivo max 450px*/
@media (min-width:450px) and (max-width: 600px){

 #boxTitle{
padding-top: 10px;
border: 1px solid #fcba02;
width: 400px;
height: 90px;
margin-left:4%;
margin-top: 7%;
margin-bottom: 30px;
}
}

@media (min-width:600px) and (max-width: 900px){

 #boxTitle{
padding-top: 10px;
border: 1px solid #fcba02;
width: 400px;
height: 90px;
margin-left: 18%;
margin-top: 7%;
margin-bottom: 30px;
}
}
</style>