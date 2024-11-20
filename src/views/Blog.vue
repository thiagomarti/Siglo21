<script setup lang="ts">
import { ref, computed } from "vue";
import BlogCard from "../components/BlogCard.vue";

interface BlogPost {
  id: number;
  titulo: string;
  descripcion: string;
  imagenes: { url: string; alt: string }[];
  fecha: string;
  categoria: string;
  autor: string;
}

// Mock data - replace with API call
const blogPosts = ref<BlogPost[]>([
  {
    id: 1,
    titulo: "Campamento de 5to grado",
    descripcion:
      "Una experiencia al aire libre inolvidable para los mas chicos",
    imagenes: [
      {
        url: "https://media.istockphoto.com/id/1377841262/es/foto/el-hermoso-paisaje-de-una-tienda-de-campa%C3%B1a-en-un-bosque-de-pinos-en-pang-oung-provincia-de.jpg?s=612x612&w=0&k=20&c=opQ9mqnclAvSK8_ttb0cut1cc7TfTB7oKriNg7B1i98=",
        alt: "Estudiantes trabajando en proyectos",
      },
      {
        url: "/images/proyecto-educativo-2.jpg",
        alt: "Presentación de proyectos",
      },
      { url: "/images/proyecto-educativo-3.jpg", alt: "Trabajo en equipo" },
    ],
    fecha: "2024-02-15",
    categoria: "Campamentos",
    autor: "Prof. María González",
  },
  {
    id: 2,
    titulo:
      "Festejando el Día de la Maestra Jardinera y de los Jardines de Infantes",
    descripcion:
      "Feliz Día para las Queridas Maestras Jardineras, quienes visten al jardín de Alegría todos los días. Las que juegan, manteniendo el corazón de niño.",
    imagenes: [
      {
        url: "https://www.neuquen.edu.ar/wp-content/uploads/2019/09/DSC8404-1024x681.jpg",
        alt: "Aula digital",
      },
      {
        url: "/images/tecnologia-aula-2.jpg",
        alt: "Estudiantes usando tablets",
      },
    ],
    fecha: "2024-02-10",
    categoria: "Festejos",
    autor: "Equipo Directivo",
  },
]);

// Filters
const selectedCategoria = ref("");
const searchQuery = ref("");
const dateFilter = ref("");

// Get unique categories for filter
const categorias = computed(() => {
  const categories = new Set(blogPosts.value.map((post) => post.categoria));
  return ["", ...Array.from(categories)];
});

// Filter posts based on selected filters
const filteredPosts = computed(() => {
  return blogPosts.value.filter((post) => {
    const matchesCategory =
      !selectedCategoria.value || post.categoria === selectedCategoria.value;
    const matchesSearch =
      !searchQuery.value ||
      post.titulo.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      post.descripcion.toLowerCase().includes(searchQuery.value.toLowerCase());
    const matchesDate = !dateFilter.value || post.fecha === dateFilter.value;

    return matchesCategory && matchesSearch && matchesDate;
  });
});

// Sort options
const sortOption = ref("newest");
const sortedPosts = computed(() => {
  const posts = [...filteredPosts.value];

  switch (sortOption.value) {
    case "newest":
      return posts.sort(
        (a, b) => new Date(b.fecha).getTime() - new Date(a.fecha).getTime()
      );
    case "oldest":
      return posts.sort(
        (a, b) => new Date(a.fecha).getTime() - new Date(b.fecha).getTime()
      );
    case "title":
      return posts.sort((a, b) => a.titulo.localeCompare(b.titulo));
    default:
      return posts;
  }
});

const clearFilters = () => {
  selectedCategoria.value = "";
  searchQuery.value = "";
  dateFilter.value = "";
  sortOption.value = "newest";
};
</script>

<template>
  <div class="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
      <h1 class="text-3xl font-bold text-school-burgundy mb-8">Blog</h1>

      <!-- Filters Section -->
      <div class="bg-white rounded-lg shadow-lg p-6 mb-8">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <!-- Search -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1"
              >Buscar</label
            >
            <input
              type="text"
              v-model="searchQuery"
              placeholder="Buscar posts..."
              class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-school-burgundy focus:border-school-burgundy"
            />
          </div>

          <!-- Category Filter -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1"
              >Categoría</label
            >
            <select
              v-model="selectedCategoria"
              class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-school-burgundy focus:border-school-burgundy"
            >
              <option value="">Todas las categorías</option>
              <option
                v-for="categoria in categorias"
                :key="categoria"
                :value="categoria"
              >
                {{ categoria }}
              </option>
            </select>
          </div>

          <!-- Date Filter -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1"
              >Fecha</label
            >
            <input
              type="date"
              v-model="dateFilter"
              class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-school-burgundy focus:border-school-burgundy"
            />
          </div>

          <!-- Sort -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1"
              >Ordenar por</label
            >
            <select
              v-model="sortOption"
              class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-school-burgundy focus:border-school-burgundy"
            >
              <option value="newest">Más recientes</option>
              <option value="oldest">Más antiguos</option>
              <option value="title">Título</option>
            </select>
          </div>
        </div>

        <!-- Clear Filters -->
        <div class="mt-4 flex justify-end">
          <button
            @click="clearFilters"
            class="px-4 py-2 text-school-burgundy hover:text-school-green transition-colors"
          >
            Limpiar filtros
          </button>
        </div>
      </div>

      <!-- Blog Posts Grid -->
      <div
        v-if="sortedPosts.length > 0"
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <BlogCard v-for="post in sortedPosts" :key="post.id" :post="post" />
      </div>

      <!-- No Results -->
      <div v-else class="text-center py-12">
        <p class="text-gray-600">
          No se encontraron publicaciones que coincidan con los filtros
          seleccionados.
        </p>
      </div>
    </div>
  </div>
</template>