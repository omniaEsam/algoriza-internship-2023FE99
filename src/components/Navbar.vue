<template>
     <nav class=" py-3.5 " :class="[route.name === 'searchhotel'? 'bg-blue_2 , h-[200px]' : 'bg-white']" >
    <div class=" md:flex items-center justify-between ">
      <!-- Logo -->
      <div >
              
            <img src="../assets/images/logo_searchResult.png" alt="logo" class="h-6  w-auto" v-if="route.name === 'searchhotel'">  
            <img src="../assets/images/logo.png" alt="logo" class="h-6  w-auto  " v-else>  
       </div>

      <!-- Navigation Links -->
      <ul v-if="showListPages" class="md:flex space-x-9 cursor-pointer">

         <li v-for="link in links" :key="link.name">
          <router-link :to="link.link" class=" font-normal" :class="[route.name === 'searchhotel' ?  'text-white' :'text-gray_1']">{{link.name}}</router-link>
          </li>
      </ul>

      <!-- Button -->
     <Button v-if="showLoginBtn"  >
      <router-link :to="{name : 'login'}"  v-if="!authStore.isAuthenticated">Login</router-link>
     </Button>
     <img v-else-if="route.path !== '/login'" src="../assets/images/log_in.png" alt="user_image" class="relative right-[-12rem]">
     <img v-if="route.path !== '/login' && authStore.isAuthenticated" src="../assets/icons/notification 1.png" alt="notification" class="relative right-16">
    </div>
  </nav>
</template>

<script setup>
import Button from '../components/Button.vue'
import {  computed, onMounted, ref, watch } from "vue";
import { useRoute } from 'vue-router';
import { useAuthStore } from '../stores/authStore';

const navbarColor = ref('blue');
const navbarHeight = ref('60px');


let links = ref([
  {name:"Home" , link: "/" },
  {name:"Discover" , link: "#" },
  {name:"Activities" , link: "#" },
  {name:"About" , link: "#" },
  {name:"Contact" , link: "#" },
])
const route = useRoute()
const authStore = useAuthStore()



const showListPages = computed(()=>{
   return route.path !== "/login"
})
const showLoginBtn = computed(()=>{
return route.path !== "/login"  && !authStore.isAuthenticated;
})
</script>

