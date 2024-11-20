<script setup lang="ts">
const meetings = [{ name: "Reuniones Familias", path: "/files/reuniones.pdf" }];
const supplies = [
  { name: "Primero TM/TT", path: "/files/primero.pdf" },
  { name: "Segundo TM/TT", path: "/files/segundo.pdf" },
  { name: "Tercero TM/TT", path: "/files/tercero.pdf" },
  { name: "Cuarto TM/TT", path: "/files/cuarto.pdf" },
  { name: "Quinto TM/TT", path: "/files/quinto.pdf" },
  { name: "Sexto TM/TT", path: "/files/sexto.pdf" },
];
const generalDocumentation = [
  { name: "Solicitud de inscripción", path: "/files/inscripcion" },
  { name: "Ficha Individual", path: "/files/ficha-individual" },
  { name: "Ficha de salud y Administración", path: "/files/salud-administracion" },
  { name: "Reglamento Interno", path: "/files/reglamento-interno" },
  { name: "Autorización Ed. Física", path: "/files/educacion-fisica.pdf" },
];
</script>

<template>
  <div class="min-h-screen relative bg-white py-12 px-4 sm:px-6 lg:px-8">
    <!-- Fondo estampado que ocupa toda la página -->
    <div
      class="absolute inset-0 bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuaNVhUBZ6vf9k_r6nHtDV3910YTavgi6olA&s')] bg-repeat opacity-15"
    ></div>

    <!-- Contenido principal -->
    <div class="max-w-4xl mx-auto relative z-10">
      <h1 class="text-4xl font-bold text-school-burgundy mb-8 text-center">Nivel Primario</h1>
      <!-- Sección de reuniones -->
      <div class="bg-white rounded-lg shadow-lg p-8 mb-5">
        <div class="space-y-2">
          <a
            v-for="file in meetings"
            :key="file.name"
            :href="file.path"
            class="block px-4 py-2 bg-school-burgundy text-white rounded hover:bg-opacity-90 transition-colors"
            download
          >
            {{ file.name }}
          </a>
        </div>
      </div>

      <!-- Sección de materiales -->
      <div class="bg-white rounded-lg shadow-lg p-8 mb-5">
        <h3 class="text-xl font-bold text-school-burgundy mb-4">
          Listas de Materiales
        </h3>
        <div class="space-y-2">
          <a
            v-for="file in supplies"
            :key="file.name"
            :href="file.path"
            class="flex items-center  px-4 py-2 bg-school-burgundy text-white rounded hover:bg-opacity-90 transition-colors"
            download
          >
          <box-icon name='download' color='#ffffff' ></box-icon> &nbsp;&nbsp;{{ file.name }}
          </a>
        </div>
      </div>

      <div class="bg-white rounded-lg shadow-lg p-8 mb-5">
        <h3 class="text-xl font-bold text-school-burgundy mb-4">
          Planillas ciclo lectivo
        </h3>
        <div class="space-y-2">
          <a
            v-for="file in generalDocumentation"
            :key="file.name"
            :href="file.path"
            class="flex items-center px-4 py-2 bg-school-burgundy text-white rounded hover:bg-opacity-90 transition-colors"
            download
          >
          <box-icon name='download' color='#ffffff' ></box-icon> &nbsp;&nbsp;{{ file.name }}
          </a>
        </div>
      </div>

    </div>
  </div>
</template>
