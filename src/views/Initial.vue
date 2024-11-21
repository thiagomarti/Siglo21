<script setup lang="ts">
const meetings = [{ name: "Reuniones Familias", path: "/files/reuniones.pdf" }];
const supplies = [
  { name: "Sala Maternal", path: "/files/maternal.pdf" },
  { name: "Sala 3 Años", path: "/files/3años.pdf" },
  { name: "Sala 4 Años", path: "/files/4años.pdf" },
  { name: "Sala 5 Años", path: "/files/5años.pdf" },
  { name: "Jornada Extendida", path: "/files/extendida.pdf" },
];
const institutional = [
  { name: "Proyecto Institucional", path: "/files/proyecto-institucional.pdf" },
  {
    name: "Pautas Institucionales Nivel Inicial",
    path: "/files/pautas-institucionales-nivel-inicial.pdf",
  },
];
const generalDocumentation = [
  { name: "Aptitud Médica", path: "/files/aptitud-medica.pdf" },
  { name: "Planilla de Inscripción", path: "/files/planilla-inscripcion" },
  { name: "Autorizacón Actividad Física", path: "/files/actividad-fisica" },
];
const especialDocumentation = [
  {
    name: "Autorización Act. Deportivas (extra programáticas)",
    path: "/files/deporte-extra.pdf",
  },
  { name: "Autorización micro", path: "/files/autorizacion-micro" },
  { name: "Certificación ausencia", path: "/files/certificacion-ausencia" },
];
</script>

<template>
  <div class="min-h-screen relative bg-white py-12 px-4 sm:px-6 lg:px-8">
    <!-- Fondo estampado que ocupa toda la página -->
    <div
      class="absolute inset-0 bg-[url('https://i.pinimg.com/originals/50/bb/0d/50bb0dd825bcd1ffcd7e0fc00e9ba640.png')] bg-repeat opacity-15"></div>

    <!-- Contenido principal -->
    <div class="max-w-4xl mx-auto relative z-10">
      <h1 class="text-4xl font-bold text-school-burgundy mb-8 text-center">Nivel Incial</h1>
      <!-- Sección de reuniones -->
      <div class="bg-white border border-school-burgundy rounded-lg shadow-lg p-8 mb-5">
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
      <div class="bg-white border border-school-burgundy rounded-lg shadow-lg p-8 mb-5">
        <h3 class="text-xl font-bold text-school-burgundy mb-4">
          Listas de Materiales
        </h3>
        <div class="space-y-2">
          <a
            v-for="file in supplies"
            :key="file.name"
            :href="file.path"
            class="flex items-center px-4 py-2 bg-school-burgundy text-white rounded hover:bg-opacity-90 transition-colors"
            download
          >
          <box-icon name='download' color='#ffffff' ></box-icon> &nbsp;&nbsp;{{ file.name }}
          </a>
        </div>
      </div>

      <div class="bg-white border border-school-burgundy rounded-lg shadow-lg p-8 mb-5">
        <div class="space-y-2">
          <a
            v-for="file in institutional"
            :key="file.name"
            :href="file.path"
            class="flex items-center px-4 py-2 bg-school-burgundy text-white rounded hover:bg-opacity-90 transition-colors"
            download
          >
          <box-icon name='download' color='#ffffff' ></box-icon> &nbsp;&nbsp;{{ file.name }}
          </a>
        </div>
      </div>

      <div class="bg-white border border-school-burgundy rounded-lg shadow-lg p-8 mb-5">
        <h3 class="text-xl font-bold text-school-burgundy mb-4">
          Documentación general para los/as alumnos/as
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

      <div class="bg-white border border-school-burgundy rounded-lg shadow-lg p-8 mb-5">
        <h3 class="text-xl font-bold text-school-burgundy mb-4">
          Documentación sólo en caso de necesidad
        </h3>
        <div class="space-y-2">
          <a
            v-for="file in especialDocumentation"
            :key="file.name"
            :href="file.path"
            class="flex items-center px-4 py-2 bg-school-burgundy text-white rounded hover:bg-opacity-90 transition-colors"
            download
          >
          <box-icon name='download' color='#ffffff' ></box-icon> &nbsp;&nbsp;{{ file.name }}
          </a>
        </div>
      </div>

      <div class="bg-white border border-school-burgundy rounded-lg shadow-lg p-8 mb-8">
        <h3 class="text-xl font-bold text-school-burgundy mb-4">
          Sólo para familias que ingresan
        </h3>

        <p class="mb-4">
          Dar Lectura al
          <a
            class="mb-4 text-blue-500"
            href="/files/proyecto-institucional.pdf"
            download
            >Proyecto Educativo Institucional</a
          >
        </p>
        <p class="mb-4">
          Legajo : Bajar y traer completa la documentación general y la
          <a
            class="mb-4 text-blue-500"
            href="/files/Entrevista-Inicial.pdf"
            download
            >Entrevista Incial</a
          >
        </p>

        <p class="block px-4 py-2 bg-school-burgundy text-white rounded">
          La documentación se entrega en una carpeta archivo tapa negra o azul
          tamaño oficio la misma se consigue con los folios incorporados (no
          menos de 40 folios) Ante cualquier inquietud consultar a la casilla de
          correo: jardinsiglo21@yahoo.com.ar
        </p>
      </div>
    </div>
  </div>
</template>
