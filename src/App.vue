<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Card from '@/components/Card.vue'
import Header from '@/components/Header.vue'
</script>

<template>
    
    <header>
        <img src="./assets/logo-clean3000-transparent.png" alt="" >
    </header>
    
    <div class="main_border">
        <h1 class="primary_title">Avis de passage</h1>
        
        
        <form class="main_form">
            <!-- <div class="title_form">
                <label for="Nom de l'entreprise">Nom de lentreprise
                    <span class="input01"><input type="text"></span>
                </label>
                <label for="Nom de l'entreprise">Date de passage de notre technicien
                    <span class="input02"><input type="text"></span>
                </label>
                <label for="Nom de l'entreprise">Observations
            <span class="input03"><input type="text"></span>
        </label>
        </div> -->

        <ul>
            <li>Nom de l'entreprise
                <input type="text">
            </li>
            <li>date de passage du technicien
                <input type="text">
            </li>
            <li>Observations
                <input type="text">
            </li>
        </ul>
        
    </form>
    
    
    
    <div class="button_01">
        <button class="button-43" role="button">Button 43</button>
            <button class="button-43" role="button">Validez votre avis de Passage</button>
        </div>
</div>




</template>

<style scoped>

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
    height: 40vh;
      


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
  

 

  label{
    display: flex;
    align-items: center;
    padding: 10px;
  }
  label span{
    margin-left: 10rem;
  }

  .form01{
    display: flex;;
  }
  ul{
    padding: 10px;
  }

  ul li{
    display: flex;
    justify-content: space-around;
    margin-top: 10px;
  }

</style>
