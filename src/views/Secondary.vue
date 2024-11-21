<script setup lang="ts">
const generalDocumentation = [
  { name: "Plan de Estudio", path: "/files/plan-estudio" },
  { name: "Cédula Escolar", path: "/files/cedula" },
  { name: "Ficha Individual", path: "/files/ficha-individual" },
  { name: "Ficha Ed. Física", path: "/files/ficha-EdFisica" },
];
const projects = [
  { name: "Proyecto Educativo Institucional", path: "/files/proyecto-institucional" },
  { name: "Proyectos", path: "/files/proyectos" },
  { name: "Curso de Líderes", path: "/files/curso-lideres" },
];
</script>

<template>
  <div class="min-h-screen relative bg-white py-12 px-4 sm:px-6 lg:px-8">
    <!-- Fondo estampado que ocupa toda la página -->
    <div
      class="absolute inset-0 bg-[url('https://grelac.org/wp-content/uploads/2024/05/Mesa-de-trabajo-1@3x-copia.png')] bg-repeat opacity-15"
    ></div>

    <!-- Contenido principal -->
    <div class="max-w-4xl mx-auto relative z-10">
      <h1 class="text-4xl font-bold text-school-burgundy mb-8 text-center">Nivel Secundario</h1>

      <div class="bg-white border border-school-burgundy rounded-lg shadow-lg p-8 mb-5">
        <h3 class="text-xl font-bold text-school-burgundy mb-4">
          Planillas a completar todos los años de Secundaria 
        </h3>
        <div class="space-y-2">
          <a
            v-for="file in generalDocumentation"
            :key="file.name"
            :href="file.path"
            class="flex items-center  px-4 py-2 bg-school-burgundy text-white rounded hover:bg-opacity-90 transition-colors"
            download
          >
          <box-icon name='download' color='#ffffff' ></box-icon> &nbsp;&nbsp;{{ file.name }}
          </a>
        </div>
      </div>

      <div class="bg-white border border-school-burgundy rounded-lg shadow-lg p-8 mb-5">
        <div class="space-y-2">
          <a
            v-for="file in projects"
            :key="file.name"
            :href="file.path"
            class="flex items-center  px-4 py-2 bg-school-burgundy text-white rounded hover:bg-opacity-90 transition-colors"
            download
          >
          <box-icon name='download' color='#ffffff' ></box-icon> &nbsp;&nbsp;{{ file.name }}
          </a>
        </div>
      </div>

    </div>
  </div>
</template>
