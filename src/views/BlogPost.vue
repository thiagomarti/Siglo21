<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import ImageGallery from '../components/ImageGallery.vue';

const route = useRoute();
const router = useRouter();

interface BlogPost {
  id: number;
  titulo: string;
  descripcion: string;
  imagenes: { url: string; alt: string }[];
  fecha: string;
  categoria: string;
  autor: string;
  contenido?: string;
}

const post = ref<BlogPost | null>(null);

// This would typically be an API call
const fetchPost = async (id: number) => {
  // Simulated data - replace with actual API call
  const posts = [
    {
      id: 1,
      titulo: 'Campamento de 5to grado',
    descripcion: 'Una experiencia al aire libre inolvidable para los mas chicos',
      imagenes: [
        { url: 'https://media.istockphoto.com/id/1377841262/es/foto/el-hermoso-paisaje-de-una-tienda-de-campa%C3%B1a-en-un-bosque-de-pinos-en-pang-oung-provincia-de.jpg?s=612x612&w=0&k=20&c=opQ9mqnclAvSK8_ttb0cut1cc7TfTB7oKriNg7B1i98=', alt: 'Estudiantes trabajando en proyectos' },
        { url: 'https://http2.mlstatic.com/D_NQ_748414-MLA73705794722_012024-OO.jpg', alt: 'Presentación de proyectos' },
        { url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6GAmk5kH0UwkpJpMD2lH-OPkerYLpeFs1vHCf4XF3Fd_rTwE8gP9TgbPIsGX9zyAucDY&usqp=CAU', alt: 'Trabajo en equipo' }
      ],
      fecha: '2024-02-15',
      categoria: 'Campamentos',
      autor: 'Prof. María González',
      contenido: `En esta sección de contenido se puede opcionalmente añadir mas información`
    },
    {
      id: 2,
      titulo: 'Festejando el Día de la Maestra Jardinera y de los Jardines de Infantes',
      descripcion: 'Feliz Día para las Queridas Maestras Jardineras, quienes visten al jardín de Alegría todos los días. Las que juegan, manteniendo el corazón de niño.',
      imagenes: [
        { url: 'https://www.neuquen.edu.ar/wp-content/uploads/2019/09/DSC8404-1024x681.jpg', alt: 'Aula digital' },
        { url: 'https://magdalenafleitas.com.ar/wp-content/uploads/FELIZ-D%C3%8DA-MAESTRAS-Y-MAESTROS.png', alt: 'Estudiantes usando tablets' }
      ],
      fecha: '2024-02-10',
      categoria: 'Festejos',
      autor: 'Equipo Directivo',
      contenido: `dedicando su amor a la tarea, con el fin que sus peques aprendan, se diviertan y sean los futuros hombres y mujeres que nos sorprendan en el mañana.....

Gracias Seños por acompañar este hermoso camino ....Feliz Día!!!!  Feliz Día Jardín!!!!

                                                                                                                   Las Queremos Mucho                                                                                                                                           `
    }
  ];

  return posts.find(p => p.id === id) || null;
};

onMounted(async () => {
  const id = Number(route.params.id);
  if (isNaN(id)) {
    router.push('/blog');
    return;
  }

  const data = await fetchPost(id);
  if (!data) {
    router.push('/blog');
    return;
  }

  post.value = data;
});
</script>

<template>
  <div v-if="post" class="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-4xl mx-auto">
      <div class="mb-6">
        <router-link
          to="/blog"
          class="text-school-burgundy hover:text-school-green"
        >
          ← Volver al Blog
        </router-link>
      </div>

      <article class="bg-white border border-school-burgundy rounded-lg shadow-lg overflow-hidden">
        <ImageGallery
          v-if="post.imagenes.length > 0"
          :images="post.imagenes"
        />
        
        <div class="p-8">
          <div class="flex items-center justify-between mb-4">
            <p class="text-sm text-gray-500">{{ post.fecha }}</p>
            <span class="px-3 py-1 bg-school-burgundy text-white text-sm rounded-full">
              {{ post.categoria }}
            </span>
          </div>

          <h1 class="text-3xl font-bold text-school-burgundy mb-4">{{ post.titulo }}</h1>
          
          <p class="text-sm text-gray-600 mb-6">Por {{ post.autor }}</p>
          
          <div class="prose max-w-none">
            <p class="text-gray-600 mb-4">{{ post.descripcion }}</p>
            <div class="mt-8 whitespace-pre-line">{{ post.contenido }}</div>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>