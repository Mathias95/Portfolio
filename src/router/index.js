import Vue from 'vue'
import VueRouter from 'vue-router'
import Pages from '../components/Pages.vue'
// import MoreProjects from '../views/MoreProjects.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Pages',
    component: Pages
  },
  // {
  //   path: '/MoreProjects',
  //   name: 'MoreProjects',
  //   component: MoreProjects
  // },
  {
    path: '/Skills',
    name: 'Skills',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Skills.vue')
  },
  {
    path: '/Projects',
    name: 'Projects',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Projects.vue')
  },
  {
    path: '/Contact',
    name: 'Contact',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Contact.vue')
  },
  {
    path: '/MoreProjects',
    name: 'MoreProjects',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/MoreProjects.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
