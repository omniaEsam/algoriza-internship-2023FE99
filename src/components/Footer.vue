<template>
    <footer>
      <!-- logo and links -->
      <div class="flex flex-row flex-nowrap justify-between gap-16 mx-[100px]  mb-[60px]">
        <div>
            <img src="../assets/images/logo.png" alt="logo" >   
            <p class="text-gray_2 text-sm ml-7 pr-10 w-64">Your next goto companion for travel</p>
        </div>
        <!-- company dev -->
        <div>
            <h4 class="text-black text-sm font-medium mb-2">Company</h4>
            <ul class="md:flex-col cursor-pointer">
            <li v-for="link in companyLinks" :key="link.name">
            <a :href="link.link" class="text-gray_2 text-sm font-normal ">{{link.name}}</a>
            </li>
      </ul>
        </div>
        <!-- Explore dev -->
        <div>
             <h4 class="text-black text-sm font-medium mb-2">Explore</h4>
            <ul class="md:flex-col  cursor-pointer">
            <li v-for="link in exploreLinks" :key="link.name">
            <a :href="link.link" class="text-gray_2 text-sm font-normal ">{{link.name}}</a>
            </li>
      </ul>
        </div>
        <!-- Terms and Policies dev -->
        <div>
             <h4 class="text-black text-sm font-medium mb-2">Terms and Policies</h4>
            <ul class="md:flex-col cursor-pointer">
            <li v-for="link in termsLinks" :key="link.name">
            <a :href="link.link" class="text-gray_2 text-sm font-normal ">{{link.name}}</a>
            </li>
      </ul>
        </div>
        <!-- Help dev -->
        <div>
             <h4 class="text-black text-sm font-medium mb-2">Help</h4>
            <ul class="md:flex-col cursor-pointer">
            <li v-for="helpLink in helpLinks" :key="helpLink.helpName">
            <a :href="helpLink.helpLink" class="text-gray_2 text-sm font-normal ">{{helpLink.helpName}}</a>
            </li>
      </ul>
        </div>
      </div>
     <div class="bg-gray_3 py-5 ">
        <p class="text-gray_2 text-sm font-normal ml-[1000px]">© my Dream Place 2022</p>
      </div>
    </footer>
</template>

<script setup>
import { ref } from "vue";

const companyLinks = ref([
  {name:"About" , link: "#" },
  {name:"Jobs" , link: "#" },
  {name:"Newsroom" , link: "#" },
  {name:"Advertising" , link: "#" },
  {name:"Contact us" , link: "#" },
])
const exploreLinks = ref([
  {name:"Australia" , link: "#" },
  {name:"New Zealand" , link: "#" },
  {name:"United States America (USA)" , link: "#" },
  {name:"Greece" , link: "#" },
  {name:"Maldives" , link: "#" },
  {name:"Singapore" , link: "#" },
  {name:"See more" , link: "#" },
])
const termsLinks = ref([
  {name:"Privacy Policy" , link: "#" },
  {name:"Terms of use" , link: "#" },
  {name:"Acessibility" , link: "#" },
  {name:"Reward system policy" , link: "#" },
])
const helpLinks = ref([
  {helpName:"Support" , helpLink: "#" },
  {helpName:"Cancel your bookings" , helpLink: "#" },
  {helpName:"Use Coupon" , helpLink: "#" },
  {helpName:"Refund Policies" , helpLink: "#" },
  {helpName:"International Travel Documents" , helpLink: "#" },
])
</script>

