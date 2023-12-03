<template>
<div class="mx-[100px]">
 <FormSearch />
 </div>
 <div class="flex flex-row gap-[31px] mx-[100px]">
   <div class="flex flex-col w-1/4 ">
     <!-- fiter by search  -->
    <div class=" h-[119px] bg-gray_6 py-5 pl-[19px] pr-[17px] rounded-md">
        <label class="text-gray text-[16px] font-medium ">Search by property name</label>
        <input type="text" placeholder="eg. Beach westpalm" class="text-gray_2 text-sm px-3 pt-[11px] pb-3 mt-4 ">
    </div>
    <!-- start filter by min and max price -->
        <h5 class="text-gray_1 text-[16px] font-semibold my-5 ml-[18px]">Filter by</h5>
        <div class="border-gray_5 border-solid border-[1px] rounded-t-md">
          <h6 class="text-gray text-[16px] font-medium bg-gray_6 p-[18px]  mb-[18px]">
            Your budget per day</h6>
          <div class="flex flex-col gap-[14px] ml-[18px] h-[374px]">
            <div>
            <input type="checkbox">
            <label class="ml-2">$ 0 - $ 200</label>
            </div>
            <div>
                <input type="checkbox">
            <label class="ml-2">$ 200 - $ 500</label>
            </div>
           <div>
             <input type="checkbox">
            <label class="ml-2">$ 500 - $ 1,000</label>
           </div>
            <div>
             <input type="checkbox">
            <label class="ml-2">$ 1,000 - $ 2,000</label>
            </div>
           <div>
             <input type="checkbox">
            <label class="ml-2">$ 2,000 - $ 5,000</label>
           </div>
            <!-- start toggle button -->
          <div class="mr-[18px] my-5">
                <label class="relative inline-flex items-center justify-between cursor-pointer w-full">
                    <span class="text-sm font-normal text-gray_2 ">Set your own budget</span>
                    <input
                    v-model="showBudgetInputs"
                    class="mr-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-neutral-300 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-neutral-600 dark:after:bg-neutral-400 dark:checked:bg-primary dark:checked:after:bg-primary dark:focus:before:shadow-[3px_-1px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca]"
                    type="checkbox"
                    role="switch"
                    id="flexSwitchCheckDefault01" />
                </label>
                <div class="flex flex-row justify-around my-5" v-if="showBudgetInputs">
                    <input type="text" id="min" placeholder="Min budget" class=" text-xs placeholder-black border px-3 pb-3 pt-[11px]  focus:outline-none focus:ring-0 focus:border-gray-600 rounded-[4px] w-[90px] h-[25px]">
                    <input type="text" id="max" placeholder="Max budget" class="w-[90px] h-[25px] text-xs placeholder-black border px-3 pb-3 pt-[11px] focus:outline-none focus:ring-0  focus:border-gray-600 rounded-[4px]">
               </div>
               <p class="text-gray_2 text-xs ml-4" v-if="showBudgetInputs">Press Enter to filter</p>
            </div>
          <!-- end toggle button -->
          </div>
         
        </div>
         <!-- start filter by min and max price -->

         <!--start filter by rating  -->
         <div class="border-gray_5 border-solid border rounded-t-md mt-5">
            <h2 class="text-gray text-[16px] font-medium bg-gray_6 p-[18px]  mb-[18px] ">
           Rating</h2>
           <h3  class="text-sm font-normal text-gray_2 ml-[18px] mb-2">Show only ratings more than</h3>
          <div class="flex flex-row ml-[18px] mb-6">
             <button class="border-gray_5 border-solid border  rounded-l p-2">1
            <span class="text-orange text-xl mt-[10px]">
            &#9733;
        </span>
             </button>
           <button class="border-gray_5 border-solid border p-2">2
            <span class="text-orange text-xl mt-[10px]">
            &#9733;
        </span>
           </button>
           <button class="border-gray_5 border-solid border p-2">3
            <span class="text-orange text-xl mt-[10px]">
            &#9733;
        </span>
           </button>
           <button class="border-gray_5 border-solid border p-2">4
            <span class="text-orange text-xl mt-[10px]">
            &#9733;
        </span>
           </button>
           <button class="border-gray_5 border-solid border rounded-r p-2">5
            <span class="text-orange text-xl mt-[10px]">
            &#9733;
        </span>
           </button>
          </div>
         </div>
         
         <!--end filter by rating  -->
   </div>
    
 <div class="w-3/4">
    <div class="flex flex-row ">
    <select class="rounded-[10px] bg-gray_6 pt-[11px] px-7 pb-3 w-[206px]
    text-gray_2  relative left-[40rem] mb-6 "  >
     <!-- placeholder -->
        <option value="0" disabled selected hidden >Sort by?</option>
        <!-- options -->
        <option value="" class= "bg-white shadow-3xl" v-for="sort in sortData" 
        :key="sort.id"   :value1 ="sort.id" >
            {{sort.title}}
        </option>
    </select>
    <!--start result of search hoter -->
    <h1 class=" mb-10 text-2xl text-gray font-semibold relative right-52">Melbourne : {{title}} search results found
    </h1>
 </div>
    <div class=" bg-white   mb-6 rounded-[5px]
    border-solid border-[1px] border-gray_5 pr-48"
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
            <div  v-if="hotel.property.priceBreakdown.strikethroughPrice" class="text-[13px] font-medium text-white  relative left-[10rem]  ">
                <span class="rounded-md bg-green px-2 py-1">{{Math.round(((hotel.property.priceBreakdown.strikethroughPrice.value-hotel.property.priceBreakdown.grossPrice.value)/hotel.property.priceBreakdown.strikethroughPrice.value)*100)}}%off</span>
            </div>
        </div>
        <div class="flex flex-row ">
        <Button><router-link to="/">See availability</router-link></Button>

             <!-- Price before discount -->
            <p v-if="hotel.property.priceBreakdown.strikethroughPrice"
            class="text-red text-sm font-medium line-through relative left-96 top-1">${{Math.round(hotel.property.priceBreakdown.strikethroughPrice.value)}}</p>

            <!-- Price after discount -->
           <p class=" text-gray_1 text-xl font-medium relative left-[25rem] ">
            ${{Math.round(hotel.property.priceBreakdown.grossPrice.value)}} </p>
        </div>
     </div>
     <!--end hotel info -->
    </div>
    </div>
    <!--end result of search hoter -->
 </div>
    
    </div>
    <!-- danger component -->
    <div class="mx-[100px]  mt-[192px] mb-[70px]">
    <Danger/>
    </div>
</template>

<script setup>
import FormSearch from '../components/FormSearch.vue'
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import axios from 'axios';
import Button from '../components/Button.vue'
import Danger from '../components/Danger.vue'
import { useAuthStore } from '../stores/authStore';

const showBudgetInputs = ref(false);
const route = useRoute();
const searchParams = ref({
  selectedCity : 0,
  checkInDate : '',
   checkOutDate : ''
})
const title = ref("")
const hotels = ref([])
const sortData = ref([])

onMounted(async()=>{
    searchParams.value = route.query;
    try{
     const response = await axios.get('https://booking-com15.p.rapidapi.com/api/v1/hotels/searchHotels',
    {params:
    {
    dest_id:searchParams.value.selectedCity,
    search_type: 'CITY',
    arrival_date: searchParams.value.checkInDate,
    departure_date: searchParams.value.checkOutDate
    },
   headers: {
    'X-RapidAPI-Key': 'feb14b8563msh9c9a712630ac177p19aac5jsncdc577b69567',
    'X-RapidAPI-Host': 'booking-com15.p.rapidapi.com'
  }
    })
   hotels.value =response.data.data.hotels;
   title.value = response.data.data.meta[0].title
    }catch(err){
        console.error('Error fetching data from the API:', err);
    }

    // call sort by api
    try{
        const res = await axios.get('https://booking-com15.p.rapidapi.com/api/v1/hotels/getSortBy',{
        params: {
        dest_id: searchParams.value.selectedCity,
        search_type: 'CITY',
        arrival_date:searchParams.value.checkInDate,
        departure_date: searchParams.value.checkOutDate,
                },
    headers: {
    'X-RapidAPI-Key': 'feb14b8563msh9c9a712630ac177p19aac5jsncdc577b69567',
    'X-RapidAPI-Host': 'booking-com15.p.rapidapi.com'
  }
        })
        sortData.value = res.data.data;
    }catch(error){
         console.error('Error fetching data from the API:', err);
    }
   
})
</script>

