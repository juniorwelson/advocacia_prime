<template>
  <div>
    <!--div que engloba tudo-->
    <div class="text-warning" id="TitleHelp">
      <h2 class="text-center" id="titleDuvidas">Dúvidas</h2>
    </div>

    <div class="accordion accordion-flush  " id="accordionFlushExample" data-aos="fade-up">
      <div class="accordion-item  ">
        <h2 class="accordion-header">
          <button
            class="accordion-button collapsed bg-dark text-light"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseOne"
            aria-expanded="false"
            aria-controls="flush-collapseOne"
          >
            Por quê escolher a Advocacia Prime para me representar? 
          </button>
        </h2>
        <div
          id="flush-collapseOne"
          class="accordion-collapse collapse "
          data-bs-parent="#accordionFlushExample"
        >
          <div class="accordion-body text-warning">
            Porque aqui, cada cliente é tratado como prioridade. Nossa missão é oferecer não apenas conhecimento jurídico sólido, mas também atenção personalizada, comunicação clara e soluções práticas para resolver o seu caso da forma mais rápida e segura possível.Mais do que advogados, somos parceiros na sua jornada — desde o primeiro atendimento até a solução final, você nunca estará sozinho.
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button
            class="accordion-button collapsed text-light bg-dark"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseTwo"
            aria-expanded="false"
            aria-controls="flush-collapseTwo"
          >
            Tenho um caso urgente, vocês conseguem agir de imediato?
          </button>
        </h2>
        <div
          id="flush-collapseTwo"
          class="accordion-collapse collapse"
          data-bs-parent="#accordionFlushExample"
        >
          <div class="accordion-body text-warning">
            Sim. Em casos urgentes, priorizamos o atendimento e a tomada de medidas rápidas, garantindo que seus direitos sejam preservados desde o primeiro contato.
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button
            class="accordion-button collapsed text-light bg-dark"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseThree"
            aria-expanded="false"
            aria-controls="flush-collapseThree"
          >
             O atendimento é presencial, online ou ambos?
          </button>
        </h2>
        <div
          id="flush-collapseThree"
          class="accordion-collapse collapse"
          data-bs-parent="#accordionFlushExample"
        >
          <div class="accordion-body text-warning">
           Atendemos de forma presencial em nosso escritório e também online, para que você tenha mais comodidade e possa resolver tudo de onde estiver.
          </div>
        </div>
      </div>




       <div class="accordion-item  ">
        <h2 class="accordion-header">
          <button
            class="accordion-button collapsed bg-dark text-light"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapsefour"
            aria-expanded="false"
            aria-controls="flush-collapsefour"
          >
             Como funciona o pagamento dos honorários?

          </button>
        </h2>
        <div
          id="flush-collapsefour"
          class="accordion-collapse collapse "
          data-bs-parent="#accordionFlushExample"
        >
          <div class="accordion-body text-warning">
           Oferecemos condições flexíveis de pagamento, adaptadas à realidade de cada cliente, sempre com contrato claro e sem surpresas.
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button
            class="accordion-button collapsed text-light bg-dark"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseFive"
            aria-expanded="false"
            aria-controls="flush-collapseFive"
          >
      Vocês já resolveram casos parecidos com o meu?
          </button>
        </h2>
        <div
          id="flush-collapseFive"
          class="accordion-collapse collapse"
          data-bs-parent="#accordionFlushExample"
        >
          <div class="accordion-body text-warning">
           Sim. Já atuamos com sucesso em diversos casos semelhantes, utilizando nossa experiência para aplicar as melhores estratégias no seu caso específico.
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button
            class="accordion-button collapsed text-light bg-dark"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseSix"
            aria-expanded="false"
            aria-controls="flush-collapseSix"
          >
             Quais garantias eu tenho ao contratar os serviços da Advocacia Prime?
          </button>
        </h2>
        <div
          id="flush-collapseSix"
          class="accordion-collapse collapse"
          data-bs-parent="#accordionFlushExample"
        >
          <div class="accordion-body text-warning">
       Oferecemos atendimento transparente, profissionalismo e comprometimento máximo com o seu caso. Embora resultados jurídicos dependam de diversos fatores, trabalhamos sempre para buscar a melhor solução para você.
          </div>
        </div>

        

        
      </div>
    </div>

    <!-- fim da div que engloba tudo-->
  </div>
</template>

<script>
export default {
  name: "HelpCenter",
};
</script>

<style scoped>
#TitleHelp {
  padding-top: 8px;
  border: 1px solid #fcba02;
  width: 400px;
  height: 70px;
  margin-left: 10%;
  margin-top: 7%;
  margin-bottom: 30px;
  border-radius: 10px;
}

#titleDuvidas {
  font-size: 3em;
  color: #fcba02;
  font-weight: bold;
  padding-bottom: 2px;
}

#accordionFlushExample{
  width: 80%;
  margin-left: 10%;
  background-color: #212529 !important;
}
.accordion-button:focus {
  box-shadow: none; /* remove sombra */
  
}



.accordion-button::after {
    
    background-color: #fcba02;
   
   
}


/*responsivo max 450px*/
@media (max-width:450px){
  #TitleHelp{
padding-top: 15px;
border: 1px solid #fcba02;
width: 300px;
height: 70px;
margin-left: 8%;
margin-top: 7%;
margin-bottom: 30px;
}  
#accordionFlushExample{
  width: 80%;
  margin-left: 10%;
  background-color: #212529 !important;
}
#titleDuvidas{
    font-size: 2em;
    color: #fcba02;
    font-weight: bold;
padding-bottom: 2px;

}
}


/*responsivo max 600px and min 450px*/
@media (min-width:450px) and (max-width: 600px){

 #TitleHelp{
padding-top: 10px;
border: 1px solid #fcba02;
width: 400px;
height: 90px;
margin-left:4%;
margin-top: 7%;
margin-bottom: 30px;
}

#accordionFlushExample{
  width: 80%;
  margin-left: 10%;
  background-color: #212529 !important;
}
}

@media (min-width:600px) and (max-width: 900px){

 #TitleHelp{
padding-top: 10px;
border: 1px solid #fcba02;
width: 400px;
height: 90px;
margin-left: 18%;
margin-top: 7%;
margin-bottom: 30px;
}
#accordionFlushExample{
  width: 80%;
  margin-left: 10%;
  background-color: #212529 !important;
}
}
</style>
