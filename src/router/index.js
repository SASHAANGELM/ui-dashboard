import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../pages/Home.vue';
import Dashboard from '../pages/Dashboard.vue';
import Dashboard2 from '../pages/Dashboard2.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/dashboard2',
    name: 'Dashboard2',
    component: Dashboard2
  },
  {
    path: '/',
    redirect: '/dashboard'
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
