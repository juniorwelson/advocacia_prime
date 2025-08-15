<template>
    <div id="contato"> <!--div que engloba tudo-->>

<div id="titleEmail">
    <h2 id="speakUs">Fale Conosco</h2>
</div>

<section class="container-fluid d-flex justify-content-center flex-wrap py-4" data-aos="fade-up">
<div id="Form-mensege " class=" fullForm"  > <!-- essa div abriga todo o formu-->

<div class="mb-3" id="formu">
  <label for="exampleFormControlInput1 " class="form-label text-warning " > Seu E-mail</label>
  <input type="email" class="form-control " id="exampleFormControlInput1" placeholder="name@example.com">
</div>

<div class="mb-3" id="text-area">
  <label for="exampleFormControlTextarea1 " class="form-label text-warning "> Sua Mensagem </label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
<!-- div do link-->
          <div class="text-center">
            <a href="#" class="nav-link text-warning text-center mt-5  sendMensege" target="_blank">Enviar Mensagem</a>
          </div>
          
          <p class="text-light mt-5 " id="contact-text">"Entre em contato com nossa equipe e receba a orientação jurídica que você precisa. Preencha o formulário ao lado e responderemos o mais breve possível, com atenção e sigilo absoluto."</p>
          <!--  fim da div do link-->

<!-- fim da div abriga todo o formu-->
</div>
<img src="/img/balanca na mao.jpg" alt="balança da justiça" class="rounded-4 img-fluid mt-3" id="logo2">
</section>

 <!--div que engloba tudo-->
    </div>
</template>


<script>
export default {
    name: 'contactLaw'
}
</script>

<style scoped>
#titleEmail {
 padding-top: 8px;
 padding-left: 10px;
border: 1px solid #fcba02;
width: 400px;
height: 70px;
margin-left: 10%;
margin-top: 7%;
margin-bottom: 30px;
border-radius: 10px;
}
#speakUs {
  font-size: 3em;
  color: #fcba02;
  font-weight: bold;
  padding-bottom: 2px;
}

#formu{
  margin-bottom: 40px !important;
  
}

label{
  background-color: #1f1f1f;
  border: 1px solid #fff;
  border-radius: 10px;
  padding: 8px;
  
}
.fullForm{
  
margin-right: 30px;
  max-width: 500px;
  background-color: #1f1f1f;       
  padding: 30px;
  padding-top: 90px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
  text-align: center;

}

.form-control{
 background-color: #2a2a2a;
  color: #fff;
  border: 1px solid #444;
  transition: border-color 0.3s, box-shadow 0.3s;

}
.form-control::placeholder{
  color: #fff;
}
.form-control:focus {
  outline: none !important;
  border: 2px solid #fcba02 !important; 
  border: none;
  box-shadow: none !important;
}


.sendMensege {
 
  font-size: 18px;
  border-radius: 8px;
  width: 250px;
  transition: all 0.3s ease-in-out;
  background-color: #fff !important;
 
  
}
.sendMensege:hover {
  background-color: #fcba02 !important;
  color: #fff !important;
  box-shadow: 0 0 15px #fcba02;
  
}
#contact-text{
  background-color: #1f1f1f;
  color: #fff;
  font-size: 1.1rem;
  line-height: 1.6;
  padding: 20px;
  border-left: 4px solid #fcba02;
  border-radius: 8px;
  margin-top: 40px;
  text-align: left;
}
.mb-3, .text-center{
  width: 400px;
  background-color: #1f1f1f;       
}
#logo2{
  width: 500px;
  height: 800px;
}


/*responsivo max 450px*/
@media (max-width:450px){
  #titleEmail{
padding-top: 15px;
border: 1px solid #fcba02;
width: 300px;
height: 70px;
margin-left: 8%;
margin-top: 7%;
margin-bottom: 30px;
}  

#speakUs{
    font-size: 2em;
    color: #fcba02;
    font-weight: bold;
padding-bottom: 2px;
}

#formu{
  margin-bottom: 40px !important;
  
}

label{
  background-color: #1f1f1f;
  border: 1px solid #fff;
  border-radius: 10px;
  padding: 8px;
  
}
.fullForm{
  
margin-right: 0px;
  max-width: 100%;
       
  padding: 30px;
  padding-top: 90px;

}





.sendMensege {
 
  font-size: 18px;
  border-radius: 8px;
  width: 250px;
  
 
  
}

#contact-text{
  
  font-size: 1rem;
  line-height: 1.6;
  padding: 20px;
  border-left: 4px solid #fcba02;
  border-radius: 8px;
  margin-top: 40px;
  text-align: left;
}
.mb-3, .text-center{
  width: 100%;
  background-color: #1f1f1f;       
}
#logo2{
  width: 400px;
  height: 500px;
}

}


/*responsivo max 600px e  min 450px*/
@media (min-width:450px) and (max-width: 600px){

 #titleEmail{
padding-top: 10px;
border: 1px solid #fcba02;
width: 400px;
height: 90px;
margin-left:4%;
margin-top: 7%;
margin-bottom: 30px;
}
.fullForm{
  
margin-right: 0px;
  max-width: 100%;
       
  padding: 30px;
  padding-top: 90px;

}





.sendMensege {
 
  font-size: 18px;
  border-radius: 8px;
  width: 250px;
  
 
  
}

#contact-text{
  
  font-size: 1rem;
  line-height: 1.6;
  padding: 20px;
  border-left: 4px solid #fcba02;
  border-radius: 8px;
  margin-top: 40px;
  text-align: left;
}
.mb-3, .text-center{
  width: 100%;
  background-color: #1f1f1f;       
}
#logo2{
  width: 600px;
  height: 500px;
}
}

@media (min-width:600px) and (max-width: 900px){

 #titleEmail{
padding-top: 10px;
border: 1px solid #fcba02;
width: 400px;
height: 90px;
margin-left: 18%;
margin-top: 7%;
margin-bottom: 30px;
}

.fullForm{
  
margin-right: 0px;
  max-width: 100%;
       
  padding: 30px;
  padding-top: 90px;

}





.sendMensege {
 
  font-size: 18px;
  border-radius: 8px;
  width: 250px;
  
 
  
}

#contact-text{
  
  font-size: 1rem;
  line-height: 1.6;
  padding: 20px;
  border-left: 4px solid #fcba02;
  border-radius: 8px;
  margin-top: 40px;
  text-align: left;
}
.mb-3, .text-center{
  width: 100%;
  background-color: #1f1f1f;       
}
#logo2{
  width: 600px;
  height: 600px;
}
}




</style>
