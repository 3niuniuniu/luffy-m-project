import Vue from 'vue'
import Cookies from '../assets/js/Cookie'
import Router from 'vue-router'
import Error from '@/components/404'
import Hello from '@/components/Hello'
import Home from '@/pages/home/Home'

import PythonAdvanced from '@/pages/home-python/PythonAdvanced'
import PythonMedium from '@/pages/home-python/PythonMedium'
import LinuxAdvanced from '@/pages/home-linux/LinuxAdvanced'
import LinuxMedium from '@/pages/home-linux/LinuxMedium'

import Course from '@/pages/course/Course'
import CourseItem from '@/pages/courseitem/CourseItem'

import Study from '@/pages/study/Study'
import StudyLogin from '@/pages/study/StudyLogin'
import VideoCourse from '@/pages/videocourse/VideoCourse'

import My from '@/pages/my/My'
import Order from '@/pages/order/Order'
import Information from '@/pages/information/Information'
import Discounts from '@/pages/discounts/Discounts'
import Question from '@/pages/question/Question'
//问题
import QuestionItem from '@/pages/question/QuestionItem'

import Buy from '@/pages/buy/Buy'
import BuySucceed from '@/pages/buy/BuySucceed'
import SelectCoupon from '@/pages/buy/SelectCoupon'

import Login from '@/pages/login/Login'
import Register from '@/pages/register/Register'

Vue.use(Router)

const router = new Router({
  linkActiveClass: 'active',
  mode: 'history',
  routes: [
    { path: '/', name:'Home', component: Home, meta: { navShow: true } },
    { path: '/home', name:'Home', component: Home, meta: { navShow: true } },
    { path: '/home/python-advanced', name:'python-advanced', component: PythonAdvanced, meta: { navShow: false }, components: { 'default': Home, 'subPage': PythonAdvanced} },
    { path: '/home/python-medium', name:'python-medium', component: PythonMedium, meta: { navShow: false }, components: { 'default': Home, 'subPage': PythonMedium} },
    { path: '/home/linux-advanced', name:'linux-advanced', component: LinuxAdvanced, meta: { navShow: false }, components: { 'default': Home, 'subPage': LinuxAdvanced} },
    { path: '/home/linux-medium', name:'linux-medium', component: LinuxMedium, meta: { navShow: false }, components: { 'default': Home, 'subPage': LinuxMedium} },
    { path: '/home/linux', name:'Linux', component: LinuxAdvanced, meta: { navShow: false }, components: { 'default': Home, 'subPage': LinuxAdvanced} },
    { path: '/course', name:'Course', component: Course, meta: { navShow: true } },
    { path: '/course/courseitem', name:'CourseItem', component: CourseItem, meta: { navShow: false, requireAuth: !Cookies.get('access_token') }, components: { 'default': Course, 'subPage': CourseItem} },
    { path: '/study', name:'Study', component: Study, meta: { navShow: true, requireAuth: !Cookies.get('access_token') } }, //requireAuth表示进入此路由需要登录
    { path: '/study/videocourse', name: 'VideoCourse', component: VideoCourse, meta: { navShow: false }, components: { 'default': Study, 'subPage': VideoCourse } },
    { path: '/study/studylogin', name: 'StudyLogin', component: StudyLogin, meta: { navShow: false, requireAuth: !Cookies.get('access_token') }, components: { 'default': Study, 'subPage': StudyLogin } },
    { path: '/my', name:'My', component: My, meta: { navShow: true }},
    { path: '/my/information', name:'Information', component: Information, meta: { navShow: false }, components: {'default': My, 'subPage': Information } },
    { path: '/my/order', name:'Order', component: Order, meta: { navShow: false },components: { 'default': My,'subPage': Order}},
    { path: '/my/discounts', name: 'Discounts', component: Discounts, meta: { navShow: false }, components: { 'default': My, 'subPage': Discounts } },
    { path: '/my/question', name: 'Question', component: Question, meta: { navShow: false }, components: { 'default': My, 'subPage': Question } },
    { path: '/my/question/questionitem/:id', name: 'QuestionItem', component: QuestionItem, meta: { navShow: false }, components: { 'default': My, 'subPage': QuestionItem } },
    { path: '/buy', name: 'Buy', component: Buy, meta: {navShow: false} },
    { path: '/buysucceed', name: 'BuySucceed', component: BuySucceed, meta: { navShow: false } },
    { path: '/selectcoupon', name: 'SelectCoupon', component: SelectCoupon, meta: { navShow: false }, components: { 'default': Buy, 'subPage': SelectCoupon } },
    { path: '/login', name: 'Login', component: Login, meta: { navShow: false } },
    { path: '/register', name: 'Register', component: Register, meta: {navShow: false } },
    { path: '/404', name:'Error', component: Error, meta: { navShow: true } },
    { path: "*",redirect: '/404'}
  ]
})

router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {
    next({
      path: '/login',
      query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
    })
  }
  else {
    next();
  }
})

export default router
