import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Sports from '../views/Sports.vue';
import Extended from '../views/Extended.vue';
import Informatic from '../views/Informatic.vue';
import English from '../views/English.vue';
import Initial from '../views/Initial.vue';
import Primary from '../views/Primary.vue';
import Secondary from '../views/Secondary.vue';
import Entry from '../views/Entry.vue';
import News from '../views/News.vue';
import NewsDetails from '../views/NewsDetails.vue';
import Blog from '../views/Blog.vue';
import BlogPost from '../views/BlogPost.vue';
import Platforms from '../views/Platforms.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/plataformas',
      name: 'Plataformas',
      component: Platforms
    },
    {
      path: '/siglo21-sports',
      name: 'Sports',
      component: Sports
    },
    {
      path: '/jornada-extendida',
      name: 'Extended',
      component: Extended
    },
    {
      path: '/informatica',
      name: 'Informatic',
      component: Informatic
    },
    {
      path: '/ingles',
      name: 'English',
      component: English
    },
    {
      path: '/inicial',
      name: 'Initial',
      component: Initial
    },
    {
      path: '/primaria',
      name: 'Primary',
      component: Primary
    },
    {
      path: '/secundaria',
      name: 'Secondary',
      component: Secondary
    },
    {
      path: '/ingreso/:tab?',
      name: 'Entry',
      component: Entry
    },
    {
      path: '/novedades',
      name: 'Novedades',
      component: News
    },
    {
      path: '/novedades/:id',
      name: 'NovedadDetalle',
      component: NewsDetails
    },
    {
      path: '/blog',
      name: 'Blog',
      component: Blog
    },
    {
      path: '/blog/:id',
      name: 'BlogPost',
      component: BlogPost
    }
  ],
  scrollBehavior(savedPosition) {
    if (savedPosition) {
      // Retorna la posición guardada (cuando el usuario presiona el botón atrás/adelante).
      return savedPosition;
    } else {
      // Desplaza hacia la parte superior (0, 0) por defecto.
      return { top: 0 };
    }
  },
});

export default router;
