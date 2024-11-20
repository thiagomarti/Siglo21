<script setup lang="ts">
import NovedadCard from "../components/NewCard.vue";
import { ref } from 'vue';

// This would typically come from an API or database
const novedades = ref([
  {
    id: 1,
    titulo: 'Inicio del Ciclo Lectivo 2024',
    descripcion: 'Les damos la bienvenida a todas las familias en este nuevo ciclo lectivo. Compartimos información importante sobre el inicio de clases.',
    imagen: '/images/inicio-clases.jpg',
    fecha: '15 de febrero 2024'
  },
  {
    id: 2,
    titulo: 'Proyecto Educativo Ambiental',
    descripcion: 'Nuestros alumnos participan en un nuevo proyecto de concientización ambiental, aprendiendo sobre reciclaje y cuidado del medio ambiente.',
    fecha: '10 de febrero 2024'
  },
  // Add more news items as needed
]);
</script>

<template>
  <div class="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
      <h1 class="text-3xl font-bold text-school-burgundy mb-8">Novedades</h1>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <NovedadCard
          v-for="novedad in novedades"
          :key="novedad.id"
          :novedad="novedad"
        />
      </div>
    </div>
  </div>
</template>