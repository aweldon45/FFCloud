import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import About from '@/components/About'
import TicketBooth from '@/components/TicketBooth'
import ScreeningRoom from '@/components/ScreeningRoom'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/ticketbooth',
      name: 'ticketbooth',
      component: TicketBooth
    },
    {
      path: '/screeningroom',
      name: 'screeningroom',
      component: ScreeningRoom
    }
  ]
})
