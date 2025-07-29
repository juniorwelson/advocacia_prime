<template>
  
  <nav class="navbar navbar-expand-lg bg-body-tertiary "  >
    <div class="container-fluid bg-dark  "  style="padding-top: 1rem; padding-bottom: 1rem;">
      <a class="navbar-brand text-light ps-5" href="#">Advocacia Prime</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon bg-warning"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav d-flex justify-content-evenly mx-auto">
          <a class="nav-link active text-warning" aria-current="page" href="#"
            >Home</a
          >
          <a class="nav-link text-warning" href="#"> Quem Somos</a>
          <a class="nav-link text-warning" href="#">Serviços</a>
          <a class="nav-link text-warning" href="#">Contato</a>
           <a class="nav-link  text-warning text-center  ms-5  " href="#" id="contact" target="_blank">Falar Com Advogado</a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "navbarMenu",
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Playwrite+AU+QLD:wght@100..400&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Cinzel:wght@400..900&display=swap");

.navbar-brand {
  font-family: "Playwrite AU QLD", cursive;
  font-optical-sizing: auto;
  font-weight: bold;
  font-style: normal;
}

.nav-link {
  position: relative;
  transition: color 0.3s ease;
  font-family: "Cinzel", serif;
  font-optical-sizing: auto;
  font-weight: bold;
  font-style: normal;
}

.nav-link::after {
  content: "";
  position: absolute;
  left: 10px;
  bottom: 5px;
  width: 0%;
  height: 2px;
  background-color: #ffc107;
  transition: width 0.3s ease;
}

.nav-link:hover::after {
  width: 80%;
  
}

#contact{
  height: 40px;
  background-color: #fdfdfd;
  border-radius: 10px;
  
}

/*responsivo 450px*/
@media (max-width:900px){
 
}


</style>
