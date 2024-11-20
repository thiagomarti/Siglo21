<script setup lang="ts">
const downloadFiles = [
  { name: 'Reglamento Escuelas', path: '/files/reglamento.pdf' },
  { name: 'Formulario de inscripción', path: '/files/form.pdf' }
];
</script>

<template>
  <div class="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-4xl mx-auto">
      <h1 class="text-4xl font-bold text-school-burgundy mb-8">SIGLO 21 SPORTS</h1>
      <h2 class="text-2xl font-semibold text-school-burgundy mb-6">ESCUELAS DEPORTIVAS</h2>

      <div class="bg-white border border-school-burgundy rounded-lg shadow-lg p-8 mb-8">
        <h3 class="text-xl font-bold text-school-burgundy mb-4">FUTBOL</h3>
        
        <h4 class="font-semibold mb-2">Objetivos de la Actividad</h4>
        <p class="mb-4">Brindar un espacio recreativo, de formación y de prácticas deportivas</p>

        <h4 class="font-semibold mb-2">Perfil / Edad el Alumno</h4>
        <p class="mb-4">Todos los alumnos de primero, segundo ciclo primaria y primeros 3 años secundaria</p>

        <h4 class="font-semibold mb-2">Lugar de realización</h4>
        <p class="mb-4">Canchas de futbol 5 con iluminación halógena, campo del colegio</p>

        <h4 class="font-semibold mb-2">Torneos, encuentros, salidas y actividades especiales</h4>
        <ul class="list-disc pl-5 mb-4">
          <li>Participación en la LIGA U.E.F.O (Unión escuelas de futbol del oeste)</li>
          <li>Encuentros amistosos todo el año</li>
          <li>Salidas y visitas guiadas, partidos y entrenamientos a clubes de 1º división</li>
          <li>Campamentos recreativos y de entrenamiento</li>
        </ul>

        <h4 class="font-semibold mb-2">Días y horarios:</h4>
        <p class="mb-4">Lunes y Miércoles de 17:15 a 18:15</p>

        <h4 class="font-semibold mb-2">Teléfono</h4>
        <p class="mb-8">Siglo 21 Sports 4481-7092</p>
      </div>

      <div class="bg-white border border-school-burgundy rounded-lg shadow-lg p-8 mb-8">
        <h3 class="text-xl font-bold text-school-burgundy mb-4">JUEGOS COREOGRÁFICOS</h3>
        <p class="mb-6">Descubrí a través de la danza una forma de comunicación. Sentirás la posibilidad de expresión que hay dentro de tu cuerpo. Mejoras tu postura y plasticidad. Forma parte de nuestro grupo de trabajo. Bailá tus propias coreografías.</p>

        <h4 class="font-semibold mb-2">Actividades:</h4>
        <ul class="list-disc pl-5 mb-4">
          <li>DANZA CONTEMPORÁNEA</li>
          <li>DANZAS JAZZ</li>
          <li>COMEDIA MUSICAL</li>
        </ul>

        <h4 class="font-semibold mb-2">Lugar de realización:</h4>
        <p class="mb-4">Salón de usos múltiples y escenario</p>
      </div>

      <div class="bg-white border border-school-burgundy rounded-lg shadow-lg p-8 mb-8">
        <h3 class="text-xl font-bold text-school-burgundy mb-4">HORARIOS</h3>
        <ul class="space-y-4">
          <li><strong>MINI-FÚTBOL:</strong> 3 A 5 AÑOS LUNES Y MIÉRCOLES 17:00 A 18:00 HS.</li>
          <li><strong>FÚTBOL:</strong> 6 A 9 AÑOS (CAT 2006, ´07,´08,´09) LUNES Y MIÉRCOLES 17:30 A 18:30 HS.</li>
          <li><strong>FÚTBOL</strong> 10 A 13 AÑOS (CAT 2001,´02,´03,´04,´05) LUNES Y MIÉRCOLES 18:00 19:30 HS.</li>
          <li><strong>NATACION JARDIN</strong> (3,4 Y 5 AÑOS) PRIMARIA MIERCOLES Y VIERNES 10:00 HS.</li>
          <li><strong>NATACION JARDIN</strong> (3,4 Y 5 AÑOS) PRIMARIA VIERNES 14:00 HS.</li>
          <li><strong>NATACION SECUNDARIA</strong> VIERNES 15:00 HS.</li>
          <li><strong>TALLER DE ACROBACIA EN TELA:</strong> 4 AÑOS EN ADELANTE LUNES Y MIERCOLES 17.30 A 18:30 HS.</li>
        </ul>
      </div>

      <div class="bg-white border border-school-burgundy rounded-lg shadow-lg p-8">
        <h3 class="text-xl font-bold text-school-burgundy mb-4">Documentos descargables</h3>
        <div class="space-y-2">
          <a
            v-for="file in downloadFiles"
            :key="file.name"
            :href="file.path"
            class="block px-4 py-2 bg-school-burgundy text-white rounded hover:bg-opacity-90 transition-colors"
            download
          >
            {{ file.name }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
