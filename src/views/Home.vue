<script setup lang="ts">
import ImageCarousel from '../components/ImageCarousel.vue';
</script>

<template>
  <div class="min-h-screen bg-white">
    <!-- Welcome Section -->
    <div class="bg-school-burgundy text-white py-8 text-left px-20">
      <h1 class="text-4xl font-bold mb-2">Bienvenidos</h1>
      <p class="text-xl">Escuela de enseñanza inicial, primaria y secundaria</p>
    </div>

    <!-- Main Content Section -->
    <div class="container mx-auto px-4 py-8">
      <div class="grid md:grid-cols-2 gap-8 mb-16">
        <!-- Carousel Section -->
        <div class="w-full" style="max-width: 90vw;">
          <ImageCarousel />
        </div>

        <!-- Buttons Section -->
        <div class="flex flex-col items-center justify-center space-y-4">
          <a
            href="/ingreso"
            class="w-[85%] xs:w-[48%] px-6 py-3 bg-school-burgundy text-white text-center rounded-lg hover:bg-opacity-90 transition-colors"
          >
            Ingreso
          </a>
          <router-link
            to="/plataformas"
            class="w-[85%] xs:w-[48%] px-6 py-3 bg-school-burgundy text-white text-center rounded-lg hover:bg-opacity-90 transition-colors"
          >
            Plataformas Digitales
          </router-link>
        </div>
      </div>

      <!-- About Us Section -->
      <div class="bg-white rounded-lg shadow-lg border border-gray-200 p-8 mb-16" id="sbns">
        <h2 class="text-3xl font-bold text-school-burgundy mb-8">Sobre Nosotros</h2>
        <div class="prose max-w-none">
          <p class="mb-6">
            El Centro Educativo Siglo 21 es una Institución Educativa Privada sin subvención estatal, que inició sus actividades en Marzo de 1992, contando en la actualidad con una matrícula aprox. de 750 alumnos. Nuestro Proyecto consiste en ofrecer un Servicio Educativo planificado y articulado en los tres niveles (Inicial, Primaria y Secundarial) de 2 a 18 años de edad, brindándole apoyo a los alumnos para integrarse a la comunidad, ya sea para continuar estudios superiores y/o iniciar una carrera laboral. Por lo tanto contamos con definiciones de objetivos pedagógicos que los alumnos deben alcanzar en cada nivel determinándose métodos y una estrategia adecuada para lograrlos.
          </p>

          <h3 class="text-2xl font-bold text-school-burgundy mb-4">OBJETIVOS GENERALES</h3>
          <p class="mb-6 font-bold">
            LOGRAR EL CRECIMIENTO DE NUESTROS NIÑOS, DENTRO DE UN CLIMA DE RESPETO, ENTUSIASMO Y DISFRUTE. UNA FORMACIÓN INTEGRAL: ARTÍSTICA, DEPORTIVA, INTELECTUAL Y SOCIAL.
          </p>

          <p class="mb-4">Para que los alumnos optimicen:</p>
          <ol class="list-decimal pl-6 mb-6">
            <li>El sentido de la responsabilidad.</li>
            <li>El Espíritu de iniciativa.</li>
            <li>La capacidad de crear.</li>
          </ol>

          <p class="mb-6">
            Al intentar lograr los objetivos señalados, estamos motivando a los alumnos que tomen decisiones. El éxito en lograr los objetivos depende exclusivamente del grado de acierto en las decisiones que adopten. Por lo tanto es imprescindible fijar como meta
          </p>

          <h4 class="text-xl font-bold text-school-burgundy mb-4">DESARROLLAR LA INTELIGENCIA</h4>
          <p class="mb-4">para lo cual debemos:</p>
          <ol class="list-decimal pl-6">
            <li class="mb-4">Enseñar a pensar: Ayudarlos a descubrir, crear, a encontrar diferentes caminos, a vencer obstáculos, a buscar posibles soluciones, a volver a empezar. Desarrollar la capacidad para leer críticamente la realidad y en consecuencia crear y elegir siendo partícipe de la historia de la comunidad, localidad y país.</li>
            <li class="mb-4">Revalorizar las conductas sociales: Por ello entendemos, adoptar una escala de valores encuadradas por la Moral y la Etica, respetar ideas distintas, poseer sentido de la solidaridad, aceptar trabajar en grupo, aprender a: compartir, esperar, perder...</li>
            <li>Concientizar acerca de la preservación del Medio Ambiente: Tomar conciencia del rol de cada hombre, generar cambios de actitudes en la comunidad, tendiente a revertir el deterioro ambiental y mejorar la calidad de vida.</li>
          </ol>
        </div>
      </div>

      <!-- Contact Section -->
      <div class="grid md:grid-cols-2 gap-8">
        <!-- Map -->
        <div class="w-full h-[400px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.8876612721745!2d-58.71271492427385!3d-34.63861005946277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcbf6a9b8d0b27%3A0x8f6a5a65a87f05c2!2sC.%20Jos%C3%A9%20Mar%C3%ADa%20Paz%202667%2C%20B1714%20Ituzaing%C3%B3%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1707835436044!5m2!1ses!2sar"
            width="100%"
            height="100%"
            style="border:0;"
            allowfullscreen="true"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <!-- Contact Info -->
        <div class="bg-white rounded-lg shadow-lg p-8">
          <h3 class="text-2xl font-bold text-school-burgundy mb-6">Información de Contacto</h3>
          <div class="space-y-4">
            <p class="font-bold">Horarios de Administración</p>
            <p>LUN. A VIER. - 8 A 17 Hs.</p>
            <p>Receso: LUN. A VIER. - 10 A 17 HS.</p>
            <div class="mt-8">
              <p class="font-bold mb-2">Personal Administrativo:</p>
              <p>Santino | Mónica | Carola</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>