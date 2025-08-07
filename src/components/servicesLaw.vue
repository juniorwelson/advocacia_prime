<template>
  <div id="services">
    <!-- Título -->
    <div id="titleServices">
      <h2 id="service-title" class="text-center">Serviços</h2>
    </div>

    <!-- Cards de serviços -->
    <section class="container-fluid d-flex justify-content-evenly flex-wrap py-4" data-aos="fade-up">
      <!-- Card de Revisões -->
      <div class="card bg-dark text-light " id="card" style="width: 20rem;">
        <div class="card-body">
          <h5 class="card-title">Revisões de benefícios</h5>
          <h6 class="card-subtitle mb-3 text-secondary">Análise completa de benefícios previdenciários</h6>
          
          <ul class="list-group list-group-flush">
            <li class="list-group-item bg-dark text-light d-flex align-items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#ffc107" class="me-2" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.97 10.97a.75.75 0 0 0 
                  1.08 0l3.992-3.992a.75.75 0 1 0-1.08-1.06L7.5 9.44 
                  5.53 7.47a.75.75 0 0 0-1.06 1.06l2.5 2.5z"/>
              </svg>
              Revisão da Vida Toda
            </li>
            <li class="list-group-item bg-dark text-light d-flex align-items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#ffc107" class="me-2" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.97 10.97a.75.75 0 0 0 
                  1.08 0l3.992-3.992a.75.75 0 1 0-1.08-1.06L7.5 9.44 
                  5.53 7.47a.75.75 0 0 0-1.06 1.06l2.5 2.5z"/>
              </svg>
              Revisão do Teto
            </li>
            <li class="list-group-item bg-dark text-light d-flex align-items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#ffc107" class="me-2" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.97 10.97a.75.75 0 0 0 
                  1.08 0l3.992-3.992a.75.75 0 1 0-1.08-1.06L7.5 9.44 
                  5.53 7.47a.75.75 0 0 0-1.06 1.06l2.5 2.5z"/>
              </svg>
              Inclusão de tempo especial
            </li>
            <li class="list-group-item bg-dark text-light d-flex align-items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="20" fill="#ffc107" class="me-2" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.97 10.97a.75.75 0 0 0 
                  1.08 0l3.992-3.992a.75.75 0 1 0-1.08-1.06L7.5 9.44 
                  5.53 7.47a.75.75 0 0 0-1.06 1.06l2.5 2.5z"/>
              </svg>
              Reanálise de benefícios indeferidos
            </li>
          </ul>
 <!-- div do link-->
          <div class="text-center" id="family2">
            <a href="#" class="nav-link text-warning text-center mt-5  serv-law" target="_blank">Saiba mais</a>
          </div> 
          <!--  fim da div do link-->
        </div>
      </div>


        <!-- Card de Concessão de Benefícios -->
      <div class="card bg-dark text-light" id="card" style="width: 20rem;">
        <div class="card-body">
          <h5 class="card-title">Concessão de Benefícios</h5>
          <h6 class="card-subtitle mb-3 text-secondary">Análise completa de benefícios previdenciários</h6>
          
          <ul class="list-group list-group-flush">
            <li class="list-group-item bg-dark text-light d-flex align-items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="18" fill="#ffc107" class="me-2" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.97 10.97a.75.75 0 0 0 
                  1.08 0l3.992-3.992a.75.75 0 1 0-1.08-1.06L7.5 9.44 
                  5.53 7.47a.75.75 0 0 0-1.06 1.06l2.5 2.5z"/>
              </svg>
             Aposentadoria por Tempo de Contribuição
            </li>
            <li class="list-group-item bg-dark text-light d-flex align-items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" fill="#ffc107" class="me-2" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.97 10.97a.75.75 0 0 0 
                  1.08 0l3.992-3.992a.75.75 0 1 0-1.08-1.06L7.5 9.44 
                  5.53 7.47a.75.75 0 0 0-1.06 1.06l2.5 2.5z"/>
              </svg>
             Aposentadoria por Idade
            </li>
            <li class="list-group-item bg-dark text-light d-flex align-items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#ffc107" class="me-2" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.97 10.97a.75.75 0 0 0 
                  1.08 0l3.992-3.992a.75.75 0 1 0-1.08-1.06L7.5 9.44 
                  5.53 7.47a.75.75 0 0 0-1.06 1.06l2.5 2.5z"/>
              </svg>
             Aposentadoria por Invalidez


            </li>
            <li class="list-group-item bg-dark text-light d-flex align-items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="24" fill="#ffc107" class="me-2" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.97 10.97a.75.75 0 0 0 
                  1.08 0l3.992-3.992a.75.75 0 1 0-1.08-1.06L7.5 9.44 
                  5.53 7.47a.75.75 0 0 0-1.06 1.06l2.5 2.5z"/>
              </svg>
             Benefício de Prestação Continuada (BPC/LOAS)
            </li>
          </ul>
 <!-- div do link-->
          <div class="text-center">
            <a href="#" class="nav-link text-warning text-center mt-5  serv-law" target="_blank">Saiba mais</a>
          </div> 
          <!--  fim da div do link-->
        </div>
      </div>






      
        <!-- Card  Benefícios para Dependentes e Familiares -->
      <div class="card bg-dark text-light " id="card" style="width: 20rem;">
        <div class="card-body">
          <h5 class="card-title"> Benefícios para Dependentes e Familiares</h5>
          <h6 class="card-subtitle mb-3 text-secondary">Análise completa de benefícios previdenciários</h6>
          
          <ul class="list-group list-group-flush">
            <li class="list-group-item bg-dark text-light d-flex align-items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="18" fill="#ffc107" class="me-2" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.97 10.97a.75.75 0 0 0 
                  1.08 0l3.992-3.992a.75.75 0 1 0-1.08-1.06L7.5 9.44 
                  5.53 7.47a.75.75 0 0 0-1.06 1.06l2.5 2.5z"/>
              </svg>
Pensão por morte
            </li>
            <li class="list-group-item bg-dark text-light d-flex align-items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" fill="#ffc107" class="me-2" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.97 10.97a.75.75 0 0 0 
                  1.08 0l3.992-3.992a.75.75 0 1 0-1.08-1.06L7.5 9.44 
                  5.53 7.47a.75.75 0 0 0-1.06 1.06l2.5 2.5z"/>
              </svg>
             Auxílio-reclusão
            </li>
            <li class="list-group-item bg-dark text-light d-flex align-items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#ffc107" class="me-2" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.97 10.97a.75.75 0 0 0 
                  1.08 0l3.992-3.992a.75.75 0 1 0-1.08-1.06L7.5 9.44 
                  5.53 7.47a.75.75 0 0 0-1.06 1.06l2.5 2.5z"/>
              </svg>
             Salário-maternidade


            </li>
            <li class="list-group-item bg-dark text-light d-flex align-items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="20" fill="#ffc107" class="me-2" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.97 10.97a.75.75 0 0 0 
                  1.08 0l3.992-3.992a.75.75 0 1 0-1.08-1.06L7.5 9.44 
                  5.53 7.47a.75.75 0 0 0-1.06 1.06l2.5 2.5z"/>
              </svg>
            Salário-família
            </li>
          </ul>
 <!-- div do link-->
          <div class="text-center " id="family">
            <a href="#" class="nav-link text-warning text-center mt-5  serv-law" target="_blank">Saiba mais</a>
          </div> 
          <!--  fim da div do link-->
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'servicesLaw'
}
</script>

<style scoped>
#titleServices {
 padding-top: 8px;
border: 1px solid #fcba02;
width: 400px;
height: 70px;
margin-left: 10%;
margin-top: 7%;
margin-bottom: 30px;
border-radius: 10px;
}
#service-title {
  font-size: 3em;
  color: #fcba02;
  font-weight: bold;
  padding-bottom: 2px;
}
.serv-law {
  font-size: 20px;
  border-radius: 8px;
  width: 200px;
  transition: all 0.3s ease-in-out;
  background-color: #fff;
  margin-left: 15%;
}
.serv-law:hover {
  background-color: #fcba02;
  color: #fff !important;
  box-shadow: 0 0 15px #fcba02;
  
}
#family{
  padding-top:15% !important;
}
#family2{
    padding-top:8% !important;
}

#card{
  border: 1px #fcba02 solid;
  transition: 0.3s ease ;
}

#card:hover{
  transform: scale(1.1);
}

/*responsivo max 450px*/
@media (max-width:450px){
  #titleServices{
padding-top: 15px;
border: 1px solid #fcba02;
width: 300px;
height: 70px;
margin-left: 8%;
margin-top: 7%;
margin-bottom: 30px;
}  

#service-title{
    font-size: 2em;
    color: #fcba02;
    font-weight: bold;
padding-bottom: 2px;

}

#card{
  margin-top: 40px;
}
}


/*responsivo max 600px e  min 450px*/
@media (min-width:450px) and (max-width: 600px){

 #titleServices{
padding-top: 10px;
border: 1px solid #fcba02;
width: 400px;
height: 90px;
margin-left:4%;
margin-top: 7%;
margin-bottom: 30px;
}
#card{
  margin-top: 40px;
}
}

@media (min-width:600px) and (max-width: 900px){

 #titleServices{
padding-top: 10px;
border: 1px solid #fcba02;
width: 400px;
height: 90px;
margin-left: 18%;
margin-top: 7%;
margin-bottom: 30px;
}
#card{
  margin-top: 40px;
}
}
</style>
