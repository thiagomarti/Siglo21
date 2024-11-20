<script setup lang="ts">
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const isMenuOpen = ref(false);
const openSubmenu = ref<string | null>(null);

// Función para abrir y cerrar el menú principal
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

// Función para abrir y cerrar submenús
const toggleSubmenu = (name: string) => {
  openSubmenu.value = openSubmenu.value === name ? null : name;
};

// Función para cerrar el menú al hacer clic en un enlace de submenú
const closeMenu = () => {
  isMenuOpen.value = false;
};

const menuItems = [
  { name: 'Home', path: '/' },
  { name: 'Sobre Nosotros', path: '/#sbns' },
  {
    name: 'Ingreso',
    path: '/ingreso',
    submenu: [
      { name: 'Pautas para la Elección', path: '/ingreso/pautas' },
      { name: 'Requisitos', path: '/ingreso/requisitos' },
      { name: 'Aranceles', path: '/ingreso/aranceles' },
      { name: 'Uniformes', path: '/ingreso/uniformes' },
      { name: 'Visita Virtual', path: '/ingreso/visita' },
    ]
  },
  { name: 'Novedades', path: '/novedades' },
  {
    name: 'Niveles',
    path: '/niveles',
    submenu: [
      { name: 'Inicial', path: '/inicial' },
      { name: 'Primaria', path: '/primaria' },
      { name: 'Secundaria', path: '/secundaria' },
    ]
  },
  { name: 'Inglés', path: '/ingles' },
  { name: 'Blog', path: '/blog' },
  { name: 'Informática', path: '/informatica' },
  {
    name: 'Extraprogramáticas',
    path: '/extraprogramaticas',
    submenu: [
      { name: 'Siglo 21 Sports', path: '/siglo21-sports' },
      { name: 'Jornada Extendida', path: '/jornada-extendida' },
    ]
  },
];
</script>

<template>
  <nav class="bg-white shadow-lg fixed w-full top-0 z-50">
    <div class="max-w-7xl mx-auto px-4">
      <div class="flex justify-between h-16">
        <div class="flex items-center">
          <router-link to="/" class="text-school-burgundy font-bold text-xl items-center flex flex-row">
            <img class="h-12 w-auto" src="/images/logo.png" alt="Siglo 21" />
            <h1 class="ml-5 hidden xs:block">Centro Educativo Siglo 21</h1>
          </router-link>
        </div>

        <div class="flex items-center">
          <button
            @click="toggleMenu"
            class="inline-flex items-center justify-center p-2 rounded-md text-school-burgundy hover:text-school-green focus:outline-none"
          >
            <svg
              class="h-6 w-6"
              :class="{ 'hidden': isMenuOpen, 'block': !isMenuOpen }"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg
              class="h-6 w-6"
              :class="{ 'block': isMenuOpen, 'hidden': !isMenuOpen }"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <div :class="{ 'block': isMenuOpen, 'hidden': !isMenuOpen }" class="bg-white shadow-lg">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <template v-for="item in menuItems" :key="item.name">
          <div class="relative">
            <div 
              @click="item.submenu ? toggleSubmenu(item.name) : closeMenu()"
              class="flex items-center justify-between px-3 py-2 rounded-md text-base font-medium text-school-burgundy hover:text-school-green cursor-pointer"
            >
              <router-link
                v-if="!item.submenu"
                :to="item.path"
                @click="closeMenu"
                class="block w-full"
              >
                {{ item.name }}
              </router-link>
              <span v-else>{{ item.name }}</span>
              <svg
                v-if="item.submenu"
                class="w-4 h-4 ml-2 transform transition-transform duration-200"
                :class="{ 'rotate-180': openSubmenu === item.name }"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            
            <div v-if="item.submenu" 
                 :class="{ 'block': openSubmenu === item.name, 'hidden': openSubmenu !== item.name }"
                 class="pl-4 bg-gray-50">
              <router-link
                v-for="subItem in item.submenu"
                :key="subItem.name"
                :to="subItem.path"
                @click="closeMenu"
                class="block px-3 py-2 rounded-md text-sm font-medium text-school-burgundy hover:text-school-green"
              >
                {{ subItem.name }}
              </router-link>
            </div>
          </div>
        </template>
      </div>
    </div>
  </nav>
  <!-- Spacer to prevent content from hiding under fixed navbar -->
  <div class="h-16"></div>
</template>
