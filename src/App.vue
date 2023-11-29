<template>
  <div>
   <Navbar />
  
  <RouterView/>
    <Footer v-if="showFooter"/>
  </div>
</template>

<script setup>
import {RouterView, useRoute} from 'vue-router'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import { computed } from 'vue'

const route = useRoute()
const showFooter = computed(()=> {
  return route.name !== "login"
} )
</script>



