import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '../views/Login.vue'
import SearchHotel from '../views/SearchHotel.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
     
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/searchhotel',
      name: 'searchhotel',
      component: SearchHotel,
    },
    
  ]
  
})
 


export default router
