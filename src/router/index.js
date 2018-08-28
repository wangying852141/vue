import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/home/index.vue'
import HomeHeader from '@/components/home/header/index.vue'
import User from '@/components/user/index.vue'
import UserHeader from '@/components/user/header/index.vue'
import Login from '@/components/user/login/index.vue'
import NoLogin from '@/components/user/noLogin/index.vue'
import Top250 from '@/components/top250/index.vue'
import Top250Header from '@/components/top250/header/index.vue'
import BookDetil from '@/components/bookDetil/index.vue'
import BookDetilHeader from '@/components/bookDetil/header/index.vue'
import Register from '@/components/register/index.vue'
import RegisterHeader from '@/components/register/header/index.vue'
import LoginUser from '@/components/login/index.vue'
import LoginHeader from '@/components/login/header/index.vue'

Vue.use(Router)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    components: {
      header: HomeHeader,
      content: Home
    }
  },
  {
    path: '/user',
    components: {
      header: UserHeader,
      content: User
    },
    children: [
      {
        path: '',
        redirect: 'noLogin'
      },
      {
        path: 'login',
        component: Login
      },
      {
        path: 'noLogin',
        component: NoLogin
      }
    ]
  },
  {
    path: '/top250',
    components: {
      header: Top250Header,
      content: Top250
    }
  },
  // {
  //  path: '/movieDetil/:id',
  //  name: 'movieDetil',
  //  component: MovieDetil
  // }
  {
    path: '/bookDetil',
    components: {
      header: BookDetilHeader,
      content: BookDetil
    }
  },
  {
    path: '/register',
    components: {
      header: RegisterHeader,
      content: Register
    }
  },
  {
    path: '/loginUser',
    components: {
      header: LoginHeader,
      content: LoginUser
    }
  }
]

const router = new Router({
  routes
})

export default router
