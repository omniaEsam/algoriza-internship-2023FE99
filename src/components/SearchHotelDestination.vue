<template>
    <!--location icon -->
    <img src="../assets/icons/location 1.png" alt="location-icon" class="w-5 h-5 absolute top-6 left-5 ">
     <!-- select input -->
    <select name="city" id="city" 
    class="rounded-[10px] bg-gray_6 pt-[11px] px-7 pb-3 w-[206px]
    text-gray_2  " required>

     <!-- placeholder -->
        <option value="" disabled selected hidden > Where are you going?</option>
        <!-- options -->
        <option v-for="city in filteredCities" :key="city.dest_id" :value="city.dest_id" class= "bg-white
        shadow-3xl">
            {{city.city_name}}
        </option>
    </select>

</template>

<script setup>
import axios from 'axios'
import { onMounted, ref } from 'vue'

const cities = ref([]);
const filteredCities = ref([]);

onMounted(async ()=>{
    try{
        const response = await axios.get('https://booking-com15.p.rapidapi.com/api/v1/hotels/searchDestination',{
            params : {query: 'egypt'},
            headers: {
            'X-RapidAPI-Key': 'e0b4407cccmsh969aa54ebe1517cp1d4893jsnf61c482b6a81',
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

</script>

