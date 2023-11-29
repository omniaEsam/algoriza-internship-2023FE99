<template>
   <!-- form search -->
    <form class=" bg-white relative mx-[105px] flex flex-row flex-nowrap 
    justify-between p-3 rounded-md bottom-12 gap-x-2 shadow-[0_4px_37px_0_rgba(0, 0, 0, 0.15)] text-xs 
   ">

    <!--location icon -->
    <img src="../assets/icons/location 1.png" alt="location-icon" class="w-5 h-5 absolute top-6 left-5 ">

    <!-- select input -->
    <select name="city" id="city" 
    class="rounded-md bg-gray_6 pt-[11px] px-7 pb-3 w-[206px]
    text-gray_2 " required>

     <!-- placeholder -->
        <option value="" disabled selected hidden > Where are you going?</option>
        <option value="Cario">Cario</option>
        <option value="Cario">Cario</option>
        <option value="Cario">Cario</option>
    </select>

     <!-- Check in date input  -->
      <input type="text" onfocus="(this.type='date') " onblur="(this.type='text')" placeholder="Check in date" class="rounded-md bg-gray_6 pt-[11px] px-3 pb-3 
      w-[147px]" required>
      

      <!-- Check out date input -->
      <input type="text" onfocus="(this.type='date') " onblur="(this.type='text')" placeholder="Check out date" class="rounded-md bg-gray_6 pt-[11px] px-3 pb-3
      w-[148px]" required>

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
      w-[147px]" min="1" required>
      
      <!-- search button -->
      <Button class="text-" v-if="!authStore.isAuthenticated"><router-link :to="{name: 'login'}" >Search</router-link></Button>
      <Button class="text-" v-else><router-link to="/searchHotel" >Search</router-link></Button>
    </form>
</template>

<script setup>
import Button from "../components/Button.vue"
import { useAuthStore } from '../stores/authStore';

const authStore = useAuthStore()

</script>

