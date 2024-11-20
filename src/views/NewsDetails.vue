<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

interface Novedad {
  id: number;
  titulo: string;
  descripcion: string;
  imagen?: string;
  fecha: string;
}

const novedad = ref<Novedad | null>(null);

// This would typically be an API call
const fetchNovedad = async (id: number) => {
  // Simulated data - replace with actual API call
  const novedades = [
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
  ];

  return novedades.find(n => n.id === id) || null;
};

onMounted(async () => {
  const id = Number(route.params.id);
  if (isNaN(id)) {
    router.push('/novedades');
    return;
  }

  const data = await fetchNovedad(id);
  if (!data) {
    router.push('/novedades');
    return;
  }

  novedad.value = data;
});
</script>

<template>
  <div v-if="novedad" class="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-4xl mx-auto">
      <div class="mb-6">
        <router-link
          to="/novedades"
          class="text-school-burgundy hover:text-school-green"
        >
          ← Volver a Novedades
        </router-link>
      </div>

      <article class="bg-white rounded-lg shadow-lg overflow-hidden">
        <img
          v-if="novedad.imagen"
          :src="novedad.imagen"
          :alt="novedad.titulo"
          class="w-full h-64 object-cover"
        />
        
        <div class="p-8">
          <p class="text-sm text-gray-500 mb-2">{{ novedad.fecha }}</p>
          <h1 class="text-3xl font-bold text-school-burgundy mb-4">{{ novedad.titulo }}</h1>
          <div class="prose max-w-none">
            <p class="text-gray-600">{{ novedad.descripcion }}</p>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>