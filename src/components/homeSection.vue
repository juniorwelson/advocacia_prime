<template >
    <section class="container-fluid d-flex justify-content-center align-items-center flex-wrap bg-dark  mt-0 pt-0" >
<div id="home" class="animate__animated animate__bounceInLeft">
    <h1 id="text" >Escritório <br>especializado <br>em direito previdenciário</h1>
    <p id="intro-text">Protegemos seus <span>direitos previdenciário</span><br>somos seu aliado confiável para <br>proteger seus direitos e interesses. </p>
     <a class="nav-link  text-warning text-center mt-5  " href="#" id="contactlaw" target="_blank"   aria-label="Falar com advogado pelo WhatsApp ou outro canal">Falar Com Advogado</a>
</div>

<img src="/img/logo-inicial.jpg" alt="logo da justiça" class="logoInicial rounded-4 img-fluid mt-3">
    </section>
</template>

<script>
export default {
    name: 'homeSection'
}
</script>

<style scoped>
.container-fluid{
    height: auto;


}
.logoInicial{
    width: 500px;
    height: auto
   
}




@keyframes gradientBG {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
#text{
    font-size: 3em;
    color: #fcba02;
    font-weight: bold;
    line-height: 70px;
    margin-right: 20px;
    
}
#intro-text{
    color: white;
    font-size: 1.5em;
}
span{
    color: #fcba02;
}
#contactlaw{
  height: 50px;
  font-size: 20px;
  background-color: #fdfdfd;
  border-radius: 10px;
  width: 400px;
  padding-top: 10px;
}

#contactlaw:hover{
    background-color:   #fcba02;
    color: #ffffff!important ; 
      box-shadow: 0 0 15px #fcba02;
}

/*responsivo max 900px*/

@media (max-width:900px){
 #text{
    font-size: 2em;
    line-height: 50px;
 }  
 
 #intro-text{
    color: white;
    font-size: 1em;
}

#contactlaw{
  height: 50px;
  font-size: 20px;
  background-color: #fdfdfd;
  border-radius: 10px;
  width: 380px;
  padding-top: 10px;
  margin-right: 2%;
}
}
</style>