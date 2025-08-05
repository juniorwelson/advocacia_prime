<template>
   <section class="container-fluid bg-dark" id="about" data-aos="fade-down">

   <div id="title" >
    <h2 id="first-title" class="text-center ">Quem Somos</h2>
   </div>
<p class="text-light" >A Advocacia Prime é um escritório jurídico especializado em <span>Direito Previdenciário</span> , com atuação focada na proteção dos direitos dos <span>trabalhadores, aposentados e segurados do INSS.</span>

Nosso compromisso é oferecer <span>atendimento humanizado, seguro e eficiente,</span>  buscando sempre a melhor solução jurídica para cada caso. Acreditamos na <span>justiça social</span> e na importância de cada cidadão ter acesso aos seus direitos de forma digna e transparente.

Contamos com uma equipe preparada, ética e em constante atualização, pronta para orientar e representar nossos clientes em processos administrativos e judiciais. <span> Na Advocacia Prime, você tem a confiança e o suporte que precisa para conquistar o que é seu por direito.</span>

</p>

   </section>
</template>


<script>
import AOS from 'aos';
import 'aos/dist/aos.css';
export default {
    name: 'aboutUs',
    mounted() {
        AOS.init()
    }
}
</script>


<style scoped>
#title{
padding-top: 8px;
border: 1px solid #fcba02;
width: 400px;
height: 70px;
margin-left: 10%;
margin-top: 7%;
margin-bottom: 30px;
border-radius: 10px;
}
#first-title{
    font-size: 3em;
    color: #fcba02;
    font-weight: bold;
padding-bottom: 2px;

}
.text-light{
    line-height: 30px;
}

span{
    color: #fcba02;
}

/*responsivo max 450px*/
@media (max-width:450px){
  #title{
padding-top: 15px;
border: 1px solid #fcba02;
width: 300px;
height: 70px;
margin-left: 7.5%;
margin-top: 7%;
margin-bottom: 30px;
}  

#first-title{
    font-size: 2em;
    color: #fcba02;
    font-weight: bold;
padding-bottom: 2px;

}
}


/*responsivo max 450px*/
@media (min-width:450px) and (max-width: 600px){

 #title{
padding-top: 10px;
border: 1px solid #fcba02;
width: 400px;
height: 90px;
margin-left:0%;
margin-top: 7%;
margin-bottom: 30px;
}
}

@media (min-width:600px) and (max-width: 900px){

 #title{
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