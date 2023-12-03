<template>
<div class="w-full h-[150px] bg-blue-50"></div>
 <FormSearch />
 <div class="flex flex-row">
    <select name="city" id="city" 
    class="rounded-[10px] bg-gray_6 pt-[11px] px-7 pb-3 w-[206px]
    text-gray_2  relative left-[65rem] mb-6"  >

     <!-- placeholder -->
        <option value="0" disabled selected hidden >Sort by?</option>
       
        <!-- options -->
        <option value="" class= "bg-white shadow-3xl" >
            
        </option>
    </select>
    <!--start result of search hoter -->
    <h1 class="ml-[200px] mb-10 text-2xl text-gray font-semibold">Melbourne : {{title}} search results found
    </h1>
 </div>
    <div class=" bg-white ml-[395px] mr-[100px] mb-6 rounded-[5px]
    border-solid border-[1px] border-gray_5 "
    v-for="hotel in hotels" :key="hotel.hotel_id">

    <div class="flex flex-row">
        <!-- hotel image -->
        <img :src="hotel.property.photoUrls" alt="hotel-photo" class="h-[200px] w-[285px] py-5 pl-5 pr-6">
       <!--start hotel info -->
     <div>
        <h2 class="text-black_1 font-medium text-xl pt-[21px]">{{hotel.property.name}}</h2>
        <div class="mb-[17px]">
         <span v-for="index in Math.round(hotel.property.reviewScore/4)" :key="index" class="text-orange text-xl mt-[10px]">
            &#9733;
        </span>
        <span class="text-gray_2 text-sm">{{Math.round(hotel.property.reviewScore/4)}} ({{hotel.property.reviewCount}} Reviews) </span>
        </div>

        <div class="flex flex-row ">
            <!-- decription of hotel -->
            <p class="text-gray_2 text-[13px] font-normal w-[380px] pb-[18px]">{{hotel.accessibilityLabel.split(' ').slice(0, 14).join(' ')}}.....</p>
            <!-- Discount percentages -->
            <p class="bg-green rounded-md px-1 py-2 text-[13px] font-medium text-white relative left-28 h-[35px]" v-if="hotel.property.priceBreakdown.strikethroughPrice">{{Math.round(((hotel.property.priceBreakdown.strikethroughPrice.value-hotel.property.priceBreakdown.grossPrice.value)/hotel.property.priceBreakdown.strikethroughPrice.value)*100)}}% off</p>
        </div>
        <div class="flex flex-row ">
        <Button><router-link to="/">See availability</router-link></Button>

             <!-- Price before discount -->
            <p v-if="hotel.property.priceBreakdown.strikethroughPrice"
            class="text-red text-sm font-medium line-through relative left-[21.5rem] top-1">${{Math.round(hotel.property.priceBreakdown.strikethroughPrice.value)}}</p>

            <!-- Price after discount -->
           <p class="   text-gray_1 text-xl font-medium relative left-[22rem] ">$
            {{Math.round(hotel.property.priceBreakdown.grossPrice.value)}} </p>
        </div>
     </div>
     <!--end hotel info -->
    </div>
    </div>
    <!--end result of search hoter -->
</template>

<script setup>
import FormSearch from '../components/FormSearch.vue'
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import axios from 'axios';
import Button from '../components/Button.vue'


const route = useRoute();
const searchParams = ref({
  selectedCity : 0,
  checkInDate : '',
   checkOutDate : ''
})
const title = ref("")
const hotels = ref([])
onMounted(async()=>{
    searchParams.value = route.query;
    try{
         const response = await axios.get('https://booking-com15.p.rapidapi.com/api/v1/hotels/searchHotels',
    {params:
    {dest_id: searchParams.value.selectedCity,
    search_type: 'CITY',
    arrival_date: searchParams.value.checkInDate,
    departure_date: searchParams.value.checkOutDate
    },
   headers: {
    'X-RapidAPI-Key': '08a91be66amsh67b9fc348c87bb5p1f0ba3jsnfca4a71ec333',
    'X-RapidAPI-Host': 'booking-com15.p.rapidapi.com'
  }
    })
   hotels.value =response.data.data.hotels;
   title.value = response.data.data.meta[0].title
    }catch(err){
        console.error('Error fetching data from the API:', err);
    }
   
   
})
</script>

