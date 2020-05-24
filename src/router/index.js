import Vue from 'vue'
import VueRouter from 'vue-router'
import Profile from '../views/Profile.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/skill',
    name: 'Skill',
    component: () => import('../views/Skill.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
