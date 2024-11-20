<script setup lang="ts">
import { ref } from 'vue';

interface Image {
  url: string;
  alt: string;
}

const props = defineProps<{
  images: Image[];
}>();

const currentIndex = ref(0);

const nextImage = () => {
  currentIndex.value = (currentIndex.value + 1) % props.images.length;
};

const previousImage = () => {
  currentIndex.value = (currentIndex.value - 1 + props.images.length) % props.images.length;
};

const selectImage = (index: number) => {
  currentIndex.value = index;
};
</script>

<template>
  <div class="relative">
    <!-- Main Image -->
    <div class="relative w-full h-[400px] bg-gray-100">
      <img
        :src="images[currentIndex].url"
        :alt="images[currentIndex].alt"
        class="w-full h-full object-contain"
      />
      
      <!-- Navigation Arrows -->
      <button
        v-if="images.length > 1"
        @click="previousImage"
        class="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/80 rounded-full shadow-lg hover:bg-white transition-colors"
      >
        <svg class="w-6 h-6 text-school-burgundy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button
        v-if="images.length > 1"
        @click="nextImage"
        class="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/80 rounded-full shadow-lg hover:bg-white transition-colors"
      >
        <svg class="w-6 h-6 text-school-burgundy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>

    <!-- Thumbnails -->
    <div v-if="images.length > 1" class="flex gap-2 mt-4 overflow-x-auto pb-2">
      <button
        v-for="(image, index) in images"
        :key="index"
        @click="selectImage(index)"
        class="relative flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden"
        :class="{ 'ring-2 ring-school-burgundy': currentIndex === index }"
      >
        <img
          :src="image.url"
          :alt="image.alt"
          class="w-full h-full object-cover"
        />
      </button>
    </div>
  </div>
</template>