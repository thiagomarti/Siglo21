<script setup lang="ts">
interface PlatformInfo {
  nivel: string;
  plataforma: string;
  link: string;
  emails: string[];
  descripcion: string;
}

const platforms: PlatformInfo[] = [
  {
    nivel: 'Jardín',
    plataforma: 'Plataforma Digital Jardín',
    link: '',
    emails: ['jardinsiglo21@yahoo.com.ar'],
    descripcion: 'Plataforma educativa diseñada específicamente para el nivel inicial, facilitando la comunicación entre docentes y familias.'
  },
  {
    nivel: 'Primaria',
    plataforma: 'Santillana',
    link: 'https://www.santillanaconnect.com/Account/Login/?wtrealm=http%3A%2F%2Flms30.santillanacompartir.com%2Flogin%2Fcompartir%2F&wreply=https%3A%2F%2Flms30.santillanacompartir.com%2Flogin%2Fsso%2Floginconnect',
    emails: ['info@siglo21.edu.ar'],
    descripcion: 'Plataforma integral que proporciona recursos educativos digitales y seguimiento del progreso académico para el nivel primario.'
  },
  {
    nivel: 'Secundaria',
    plataforma: 'Alexia',
    link: 'http://siglo21.alexia.com.ar/',
    emails: ['sec123@siglo21.edu.ar', 'sec456@siglo21.edu.ar'],
    descripcion: 'Sistema de gestión educativa que facilita la comunicación, seguimiento académico y acceso a recursos digitales para el nivel secundario.'
  }
];
</script>

<template>
  <div class="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-4xl mx-auto">
      <div class="mb-8">
        <h1 class="text-3xl font-bold text-school-burgundy mb-4">Plataformas Digitales</h1>
        <p class="text-gray-600">
          Accede a nuestras plataformas educativas digitales según el nivel correspondiente.
        </p>
      </div>

      <div class="space-y-6">
        <div
          v-for="platform in platforms"
          :key="platform.nivel"
          class="bg-white rounded-lg shadow-lg p-6 border border-gray-200"
        >
          <h2 class="text-2xl font-bold text-school-burgundy mb-3">{{ platform.nivel }}</h2>
          <div class="space-y-4">
            <p class="text-gray-600">{{ platform.descripcion }}</p>
            
            <div class="mt-4">
              <h3 class="font-semibold text-gray-700 mb-2">Plataforma:</h3>
              <div v-if="platform.link" class="mb-4">
                <a
                  :href="platform.link"
                  target="_blank"
                  class="inline-block px-4 py-2 bg-school-burgundy text-white rounded-lg hover:bg-opacity-90 transition-colors"
                >
                  Acceder a {{ platform.plataforma }}
                </a>
              </div>
              <div v-else class="text-gray-600 italic mb-4">
                Acceso proporcionado por la institución
              </div>
            </div>

            <div>
              <h3 class="font-semibold text-gray-700 mb-2">Consultas:</h3>
              <div class="space-y-1">
                <a
                  v-for="email in platform.emails"
                  :key="email"
                  :href="`mailto:${email}`"
                  class="block text-school-burgundy hover:text-school-green"
                >
                  {{ email }}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>