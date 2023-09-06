  <script setup>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  
  const name = ref('')
  const date = ref('')
  const Info = ref('')
  const isRecapVisible = ref(false)
  
  const router = useRouter()
  
  const showRecap = () => {
    
    isRecapVisible.value = true
    router.push('/recap')
  }


  </script>
<template>
    <div class="main_border">
      <h1 class="primary_title">Avis de Passage</h1>
  
      <form class="main_form" v-if="!isRecapVisible">
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
      <button class="button-43" type="button" @click="showRecap">Validez votre avis de Passage</button>
    </div>
  
      <div v-if="isRecapVisible" class="recap">
        <h2>Votre avis de passage (Récapitulatif) :</h2>
        <p class="p_recap">Nom du Client: {{ name }}</p>
        <p class="p_recap">Date d'intervention du Technicien: {{ date }}</p>
        <p class="p_recap">Informations supplémentaires: {{ Info }}</p>
      </div>
    </div>

  </template>
  
  
  




<style scoped>




h2{
    font-size: 3em;
}
    
p{
    font-size: 2em;
}
.primary_title{
    margin-top: 50px;
    font-size: 3em;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;}

.main_form{
    display: flex;
    justify-content: space-around;

}


.main_border{
  border: 1px solid black;
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
  justify-content: center; 
  align-items: flex-end; 
  gap: 30rem; 
  height: 20vh;
  
  
  
}
.button-43 {
  background-image: linear-gradient(-180deg, #aec7ae 0%, #a0d3ac 100%);
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
  border-radius: 5px;
  border: none;
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