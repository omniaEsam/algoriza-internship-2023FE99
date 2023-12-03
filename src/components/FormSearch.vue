<template>
   <!-- form search -->
    <form class=" bg-white relative mx-[105px] flex flex-row flex-nowrap 
    justify-between p-3 rounded-md bottom-12 gap-x-2 shadow-4xl
     text-xs "
     @submit.prevent="handelSubmit">

   <!--start search hotel destination select input -->

    <!--location icon -->
    <img src="../assets/icons/location 1.png" alt="location-icon" class="w-5 h-5 absolute top-6 left-5 ">
     <!-- select input -->
    <select name="city" id="city" 
    class="rounded-[10px] bg-gray_6 pt-[11px] px-7 pb-3 w-[206px]
    text-gray_2  " required 
    v-model="formData.selectedCity">

     <!-- placeholder -->
        <option value="0" disabled selected hidden > Where are you going?</option>
        <!-- options -->
        <option v-for="city in filteredCities" :key="city.dest_id" :value="city.dest_id" class= "bg-white
        shadow-3xl" >
            {{city.city_name}}
        </option>
    </select>
   <!--end search hotel destination select input -->
     
    
     <!-- Check in date input  -->
      <input type="text" onfocus="(this.type='date') " onblur="(this.type='text')" placeholder="Check in date" class="rounded-md bg-gray_6 pt-[11px] px-3 pb-3 
      w-[147px]" required
      v-model="formData.checkInDate">
      
      <!-- Check out date input -->
      <input type="text" onfocus="(this.type='date') " onblur="(this.type='text')" placeholder="Check out date" class="rounded-md bg-gray_6 pt-[11px] px-3 pb-3
      w-[148px]" required
      v-model="formData.checkOutDate">
      <!-- user-squre icon -->
      <img src="../assets/icons/user-square 1.png" alt="user-square-icon" class="w-5 h-5 absolute left-[543px]
        top-[23px] ">

      <!-- number of Guests input -->
      <input type="number" placeholder="Guests" class="rounded-md bg-gray_6 pt-[11px] px-7 pb-3
      w-[148px]" min="1" required>

       <!-- room icon -->
      <img src="../assets/icons/single_bed.png" alt="room-icon" class="w-6 h-6 absolute left-[698px]
      top-[23px] " >

      <!-- numbar of rooms input -->
      <input type="number" placeholder="Rooms" class="rounded-md bg-gray_6 pt-[11px] px-7 pb-3
      w-[147px]" min="1" >
      
      <!-- search button -->
      <Button class="text-" v-if="!authStore.isAuthenticated"><router-link :to="{name: 'login'}" >Search</router-link></Button>
      <Button class="text-" type="submit" v-else>Search</Button>
    </form>
</template>

<script setup>
import Button from "../components/Button.vue"
import { useAuthStore } from '../stores/authStore';
import axios from 'axios'
import { onMounted, ref } from 'vue'
import { useRouter } from "vue-router";

const authStore = useAuthStore();
const router = useRouter();
const cities = ref([]);
const filteredCities = ref([]);
const formData = ref({
  selectedCity : 0,
  checkInDate : '',
   checkOutDate : ''
})

onMounted(async ()=>{
    try{
        const response = await axios.get('https://booking-com15.p.rapidapi.com/api/v1/hotels/searchDestination',{
            params : {query: 'egypt'},
      headers: {
    'X-RapidAPI-Key': 'feb14b8563msh9c9a712630ac177p19aac5jsncdc577b69567',
    'X-RapidAPI-Host': 'booking-com15.p.rapidapi.com'
  }
        })
        cities.value = response.data.data;
       
        filteredCities.value =  cities.value.filter(city=> city.search_type === 'city')

    }catch(err){
       console.error('Error fetching data from the API:', err);
    }
}
)

const handelSubmit =()=>{
  router.push({
    name:"searchhotel",
    query: formData.value
  })
}
</script>

