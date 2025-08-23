<template>
  <footer class="container-fluid d-flex justify-content-evenly align-items-center py-4" id="rodape">
    
    <!-- Redes sociais -->
    <div id="sociais" class="text-center">
      <h2 class="text-warning mb-3">Advocacia Prime</h2>
      <a href="#" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
        <img src="/img/icons8-whatsapp-50.png" alt="WhatsApp">
      </a>
      <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
        <img src="/img/icons8-instagram.png" alt="Instagram">
      </a>
    </div>

    <!-- Informações de contato -->
    <address id="infor" class="text-center">
      <h3 class="text-warning mb-2">Contatos</h3>
      <a href="tel:+5575998542135" class="ctt" target="_blank">📞 (75) 99854-2135</a>
<a href="mailto:advocaciaprime@outlook.com" class="ctt" target="_blank">✉ advocaciaprime@outlook.com</a>

       <p class="mb-0"> 📍 Endereço: Rua Alves Pinto,centro N49</p>

    </address>


  </footer>
  
</template>


<script>
export default {
    name:'rodapeLaw'
}

</script>
<style scoped>
#rodape {
  background-color: #111; 
  color: #fff;
}

#sociais a {
  margin: 0 8px;
  display: inline-block;
}

#sociais img {
  width: 32px;
  height: auto;
  transition: transform 0.2s ease;
}

#sociais img:hover {
  transform: scale(1.1);
}
#infor,#sociais{
  padding: 20px;
  border-radius: 10px;
}

.ctt{
  text-transform: none;
  display: block;
  text-decoration: none !important;
  color: #fff;
  transition: 0.5s;
}
.ctt:hover{
color: #fcba02;
}
p:hover{
color: #fcba02;
}
/*responsivo max 450px*/
@media (max-width:900px){

#infor,#sociais{
 margin-bottom: 20px;
}
}






@media (max-width: 768px) {
  #rodape {
    flex-direction: column;
    text-align: center;
  }
}
</style>
