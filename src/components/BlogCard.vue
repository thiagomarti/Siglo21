<script setup lang="ts">
interface BlogPost {
  id: number;
  titulo: string;
  descripcion: string;
  imagenes: { url: string; alt: string }[];
  fecha: string;
  categoria: string;
  autor: string;
}

defineProps<{
  post: BlogPost;
}>();
</script>

<template>
  <div class="bg-white border border-school-burgundy rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-[1.02]">
    <img
      v-if="post.imagenes.length > 0"
      :src="post.imagenes[0].url"
      :alt="post.imagenes[0].alt"
      class="w-full h-48 object-cover"
    />
    <div class="p-6">
      <div class="flex justify-between items-center mb-2">
        <span class="text-sm text-gray-500">{{ post.fecha }}</span>
        <span class="px-3 py-1 bg-school-burgundy text-white text-sm rounded-full">
          {{ post.categoria }}
        </span>
      </div>
      <h3 class="text-xl font-bold text-school-burgundy mb-2">{{ post.titulo }}</h3>
      <p class="text-gray-600 mb-4 line-clamp-2">{{ post.descripcion }}</p>
      <div class="flex justify-between items-center">
        <span class="text-sm text-gray-600">Por {{ post.autor }}</span>
        <router-link
          :to="`/blog/${post.id}`"
          class="inline-block px-4 py-2 bg-school-burgundy text-white rounded-lg hover:bg-opacity-90 transition-colors"
        >
          Leer más
        </router-link>
      </div>
    </div>
  </div>
</template>