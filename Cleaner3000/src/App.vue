<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const name = ref('')
const date = ref('')
const Info = ref('')

const router = useRouter()

const submitForm = () => {
  // Vous pouvez accéder aux données du formulaire ici (name.value, date.value, additionalInfo.value)
  // Et effectuer des opérations telles que la validation
  // Ensuite, vous pouvez naviguer vers la page "/recap" comme suit :
  router.push('/recap')
}
</script>

<template>
    <div>
      <header>
        <img src="@/assets/logo-clean3000-transparent.png" alt="" />
      </header>
  
      <div class="main_border">
        <h1 class="primary_title">Avis de Passage</h1>
  
        <form class="main_form">
          <div class="container01">
            <p>Nom du Client</p>
            <p>Date d'intervention du technicien</p>
            <p>Informations supplémentaires</p>
          </div>
          <div class="container02">
            <input type="text" v-model="name" />
            <input type="date" v-model="date" />
            <textarea v-model="Info" cols="20" rows="5"></textarea>
          </div>
        </form>
  
        <div class="button_01">
          <button class="button-43" role="button" @click="submitForm">Validez votre avis de Passage</button>
        </div>
      </div>
  
      <footer class="footer">
        <p class="copyright">Copyright &copy; 2023 Your Name All Rights Reserved</p>
      </footer>
    </div>
  </template>

<style scoped>


.copyright{
    color: #FFFFFF;
    display: flex;
    justify-content: center;
}

footer{
    background-color: rgb(54, 53, 53);
    background: linear-gradient(0.25turn, #000000, #3e3f3c, #9dd6a0);
    height: 15vh;
}


p{
    font-size: 2em;
}
.primary_title{
    margin-top: 50px;
    font-size: 2em;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

.main_form{
    display: flex;
    justify-content: space-around;

}

header{
    background-color: rgb(91, 95, 92);
    padding-bottom: 0;
}

.main_border{
    border: 1px solid black;
    border-radius: 10px;
    height:70vh;
    background-color: rgb(224, 233, 224);
}

.primary_title{
    display: flex;
    justify-content: center;
    text-align: center;
}
.button_01{
    display: flex;
    justify-content: center; /* Centre horizontalement les boutons */
    align-items: flex-end; /* Place les boutons en bas */
    gap: 30rem; /* Ajoute un espacement entre les boutons */
    height: 25vh;
      


}
.button-43 {
    background-image: linear-gradient(-180deg, #37AEE2 0%, #1E96C8 100%);
    border-radius: .5rem;
    box-sizing: border-box;
    color: #FFFFFF;
    display: flex;
    font-size: 16px;
    justify-content: center;
    padding: 1rem 1.75rem;
    text-decoration: none;
    width: 15%;
    border: 0;
    cursor: pointer;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
  }
  
  .button-43:hover {
    background-image: linear-gradient(-180deg, #1D95C9 0%, #17759C 100%);
  }
  
  @media (min-width: 768px) {
    .button-43 {
      padding: 1rem 2rem;
    }
  }
  
input{
    font-size: 18px;
    height: 30%;
    margin: 1em;
    width: 150%;

}

textarea{
    width: 300px;
    font-size: 18px;
    margin: 10%;
}
 
.container01 p{
    margin: 1em;
    font-family: Arial, Helvetica, sans-serif;
}
 .container02{
    display: flex;
    flex-direction: column;
    
 }

 

</style>
