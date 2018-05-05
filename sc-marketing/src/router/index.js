import Vue from 'vue'
import Router from 'vue-router'

//Register bootstrap
import BootstrapVue from 'bootstrap-vue'

//Routes
import Index from '@/components/Index'
import About from '@/components/About'
import Blog from '@/components/Blog'
import CampusMgt from '@/components/CampusMgt'
import Contact from '@/components/Contact'
import Demo from '@/components/Demo'
import Gradebook from '@/components/Gradebook'
import IT from '@/components/IT'
import StudentMgt from '@/components/StudentMgt'
import Support from '@/components/Support'

//Use 
Vue.use(Router)
Vue.use(BootstrapVue)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    }, 
    {
      path: '/About',
      name: 'About',
      component: About
    },
    {
      path: '/Blog',
      name: 'Blog',
      component: Blog
    },
    {
      path: '/CampusMgt',
      name: 'CampusMgt',
      component: CampusMgt
    },
    {
      path: '/Contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/Demo',
      name: 'Demo',
      component: Demo
    },
    {
      path: '/Gradebook',
      name: 'Gradebook',
      component: Gradebook
    },
    {
      path: '/IT',
      name: 'IT',
      component: IT
    },
    {
      path: '/StudentMgt',
      name: 'StudentMgt',
      component: StudentMgt
    },
    {
      path: '/Support',
      name: 'Support',
      component: Support
    }
  ]
})
