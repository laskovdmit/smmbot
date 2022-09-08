import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue';
import Promo from '../views/Promo.vue';
import Login from '../views/Auth/Login.vue';
import Recovery from '../views/Auth/Recovery.vue';
import Register from '../views/Auth/Register.vue';
import store from '../store/index';

const routes: Array<RouteRecordRaw> = [
  {
      path: '/',
      name: 'Promo',
      component: Promo,
      meta: {
          layout: 'Promo',
          auth: false
      }
  },
  {
      path: '/lk',
      name: 'Home',
      component: Home,
      meta: {
          layout: 'Main',
          auth: true
      }
  },
  {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: {
          layout: 'Auth',
          title: 'Авторизация',
          auth: false
      }
  },
  {
      path: '/register',
      name: 'Register',
      component: Register,
      meta: {
          layout: 'Auth',
          title: 'Регистрация',
          auth: false
      }
  },
  {
      path: '/recovery',
      name: 'Recovery',
      component: Recovery,
      meta: {
          layout: 'Auth',
          title: 'Восстановление пароля',
          auth: false
      }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  linkActiveClass: 'active',
  linkExactActiveClass: 'active',
  routes
})

router.beforeEach((to, from, next) => {
    const requiredAuth = to.meta.auth;

    if (requiredAuth && store.getters['auth/isAuthenticated']) {
        next();
    } else if (requiredAuth && !store.getters['auth/isAuthenticated']) {
        next('/login?message=forbid');
    } else {
        next();
    }
});

export default router
