<template>
   <h1 class="mt-[92px] text-center text-gray text-[28px] font-semibold mb-10">Sign in</h1>

    <form class=" flex flex-col w-[400px] ml-[520px]" @submit.prevent="handelLogin">
      <label class="text-gray text-sm font-medium mb-1">Email address</label>
      <input type="email" class="bg-gray_6 pt-[11px] pb-3" v-model="email">
    
      <label class="text-gray text-sm font-medium mb-1 mt-5">Password</label>
      <input type="password"  class="bg-gray_6 pt-[11px] pb-3" v-model="password">
    
     <input type="submit" value="Sign in" class="bg-blue_1 rounded-md text-white mt-[33px] 
     text-[15px] pt-[11px] pb-3 cursor-pointer"> 
    </form>
</template>

<script setup>
import { ref } from "vue";
import {useAuthStore} from "../stores/authStore"

const authStore = useAuthStore()
const email = ref('');
const password =ref('');

const handelLogin = ()=>{
  authStore.login(email.value , password.value);
    
}
</script>

