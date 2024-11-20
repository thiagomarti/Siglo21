<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const images = [
  { src: '/images/imagen1.png', alt: 'Escuela Siglo 21' },
  { src: '/images/imagen2.png', alt: 'Escuela Siglo 21' },
  { src: '/images/imagen3.png', alt: 'Escuela Siglo 21' },
  { src: '/images/imagen4.png', alt: 'Escuela Siglo 21' },
  { src: '/images/imagen5.png', alt: 'Escuela Siglo 21' },
  { src: '/images/imagen6.png', alt: 'Escuela Siglo 21' },
  { src: '/images/imagen7.png', alt: 'Escuela Siglo 21' },
  { src: '/images/imagen8.png', alt: 'Escuela Siglo 21' },
  { src: '/images/imagen9.png', alt: 'Escuela Siglo 21' },
  { src: '/images/imagen10.png', alt: 'Escuela Siglo 21' },
  { src: '/images/imagen12.png', alt: 'Escuela Siglo 21' },
  { src: '/images/imagen13.png', alt: 'Escuela Siglo 21' }, 
];
</script>

<template>
  <Swiper
    :modules="[Autoplay, Navigation, Pagination]"
    :slides-per-view="1"
    :loop="true"
    :autoplay="{ delay: 3000 }"
    :navigation="true"
    :pagination="{ clickable: true }"
    class="w-full h-[400px]"
  >
    <SwiperSlide v-for="image in images" :key="image.src">
      <div class="w-full h-full bg-gray-200 flex items-center justify-center">
        <img :src="image.src" :alt="image.alt" class="w-full h-full object-cover" />
      </div>
    </SwiperSlide>
  </Swiper>
</template>