<template>
     <nav class="bg-white py-3.5 " >
    <div class=" md:flex items-center justify-between ">
      <!-- Logo -->
      <div >
            <img src="../assets/images/logo.png" alt="logo" class="h-6  w-auto  ">   
       </div>

      <!-- Navigation Links -->
      <ul v-if="showListPages" class="md:flex space-x-9 cursor-pointer">
         <li v-for="link in links" :key="link.name">
          <router-link :to="link.link" class="text-gray_1 font-normal">{{link.name}}</router-link>
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

