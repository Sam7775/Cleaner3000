<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import Header from './components/Header.vue'
import Form from './components/Form.vue'
import Footer from './components/Footer.vue'
import { RouterLink,RouterView} from 'vue-router'

// const name = ref('Samo')
// const date = ref('')
// const Info = ref('')

// const router = useRouter()

// const submitForm = () => {
//   router.push('/recap')
// }
 </script>


<template>
  <RouterView></RouterView>
  <Header></Header>
  <Form></Form>
  <Footer></Footer>


</template>



<style scoped>


</style>