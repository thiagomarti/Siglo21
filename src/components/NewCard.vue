<script setup lang="ts">
interface Novedad {
  id: number;
  titulo: string;
  descripcion: string;
  imagen?: string;
  fecha: string;
}

defineProps<{
  novedad: Novedad;
}>();
</script>

<template>
  <div class="bg-white border border-school-burgundy rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-[1.02]">
    <img
      v-if="novedad.imagen"
      :src="novedad.imagen"
      :alt="novedad.titulo"
      class="w-full h-48 object-cover"
    />
    <div class="p-6">
      <p class="text-sm text-gray-500 mb-2">{{ novedad.fecha }}</p>
      <h3 class="text-xl font-bold text-school-burgundy mb-2">{{ novedad.titulo }}</h3>
      <p class="text-gray-600 mb-4 line-clamp-3">{{ novedad.descripcion }}</p>
      <router-link
        :to="`/novedades/${novedad.id}`"
        class="inline-block px-4 py-2 bg-school-burgundy text-white rounded-lg hover:bg-opacity-90 transition-colors"
      >
        Ver más
      </router-link>
    </div>
  </div>
</template>