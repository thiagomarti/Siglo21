<script setup lang="ts">
import { ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

const tabs = [
    { id: "pautas", name: "Pautas" },
    { id: "requisitos", name: "Requisitos" },
    { id: "aranceles", name: "Aranceles" },
    { id: "uniformes", name: "Uniformes" },
    { id: "visita", name: "Visita Virtual" },
];

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

const currentTab = ref(route.params.tab?.toString() || "sugerencias");

watch(
    () => route.params.tab,
    (newTab) => {
        if (newTab) {
            currentTab.value = newTab.toString();
        }
    }
);

const selectedImage = ref<string | null>(null);

const openImage = (src: string) => {
  selectedImage.value = src;
};

const closeModal = () => {
  selectedImage.value = null;
};

const changeTab = (tabId: string) => {
    currentTab.value = tabId;
    router.push(`/ingreso/${tabId}`);
};

const goToNextTab = () => {
    const currentIndex = tabs.findIndex((tab) => tab.id === currentTab.value);
    if (currentIndex < tabs.length - 1) {
        changeTab(tabs[currentIndex + 1].id);
    }
};

const goToPreviousTab = () => {
    const currentIndex = tabs.findIndex((tab) => tab.id === currentTab.value);
    if (currentIndex > 0) {
        changeTab(tabs[currentIndex - 1].id);
    }
};
</script>

<template>
    <div class="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
        <div class="max-w-4xl mx-auto">
            <div class="mb-8">
                <h1 class="text-3xl font-bold text-school-burgundy mb-6">Ingreso</h1>

                <!-- Tab Navigation -->
                <div class="flex flex-wrap gap-2 mb-6">
                    <button v-for="tab in tabs" :key="tab.id" @click="changeTab(tab.id)"
                        class="px-4 py-2 rounded-lg transition-colors" :class="currentTab === tab.id
                                ? 'bg-school-burgundy text-white'
                                : 'bg-white text-school-burgundy border border-school-burgundy hover:bg-gray-50'
                            ">
                        {{ tab.name }}
                    </button>
                </div>

                <!-- Content Area -->
                <div class="bg-white rounded-lg shadow-lg p-8">
                    <div v-if="currentTab === 'pautas'" class="prose max-w-none">
                        <h1 class="text-4xl font-bold text-school-burgundy mb-8">
                            ELECCIÓN DEL COLEGIO
                        </h1>
                        <p class="mb-4">
                            La elección del colegio al que concurrirán los niños puede generar
                            dudas, inseguridades y sentimientos contradictorios. Ellos inician
                            una etapa que marca crecimiento y cambio, entonces la necesidad de
                            informarse sobre la selección de un colegio es esencial. Antes de
                            visitar los distintos colegios pensemos que son los niños los que
                            van a hacer el recorrido por las aulas, los recreos, los amigos.
                        </p>
                        <p class="mb-4">
                            Y son ellos, diferentes y únicos; por eso la visita a los
                            distintos establecimientos debe ser programada por los padres con
                            anterioridad siguiendo los siguientes parámetros:
                        </p>
                        <p class="mb-4">
                            Armar un listado reducido de colegios en función de:
                        </p>
                        <ul class="mb-4 list-disc pl-6">
                            <li>Religioso o no</li>
                            <li>Bilingüe o no</li>
                            <li>Mixto o no</li>
                        </ul>
                        <p class="mb-4">Aspectos importantes a tener en cuenta:</p>
                        <ul class="mb-4 list-disc pl-6">
                            <li>
                                Que posea todos los niveles educativos (Inicial - Primaria -
                                Secundaria) permite una articulación entre ellos.
                            </li>
                            <li>
                                Campo de deportes dentro del Establecimiento. (Evita traslados)
                            </li>
                        </ul>
                        <p class="mb-4">
                            Luego de preseleccionar los colegios, conviene pedir
                            recomendaciones a familiares y amigos que tengan experiencias
                            concretas con hijos en esas Instituciones.
                        </p>
                        <p class="mb-4">
                            Conviene visitar los colegios seleccionados sin entrevista
                            concertada. De esta forma se puede evaluar si están preparados
                            espontáneamente para recibirlos.
                        </p>
                        <p class="mb-4">
                            Cuando se efectúe la visita, tener en cuenta los siguientes
                            aspectos:
                        </p>
                        <ul class="mb-4 list-disc pl-6">
                            <li>
                                La atención en general: la recepción, la Dirección, la
                                Administración, etc.
                            </li>
                            <li>
                                La visita a las instalaciones: el tamaño y la disposición, la
                                limpieza, etc.
                            </li>
                            <li>
                                El Proyecto Educativo: el método de enseñanza, la cantidad de
                                alumnos por aula, las horas de idioma y computación, los
                                deportes y las distintas actividades extra-programáticas y
                                cursos.
                            </li>
                            <li>
                                La existencia de una persona visible dentro de la institución
                                con poder de decisión: lo que permite a los padres tener acceso
                                inmediato para la resolución de los distintos problemas sin
                                esperar citas con autoridades a las cuales nunca se tiene
                                acceso.
                            </li>
                            <li>
                                Si se trata de un Establecimiento Privado con subvención estatal
                                o no: marca la diferencia entre establecimientos que se
                                solventan con sus propios recursos y otros que arman su
                                estructura de costos en base a un subsidio estatal; lo que
                                determina la solvencia e independencia en la toma de las
                                decisiones de cada institución.
                            </li>
                        </ul>
                        <p class="mb-4">
                            Una vez finalizada la visita por las distintas instalaciones,
                            solicite folletos o material descriptivo de la Institución e
                            información sobre los aranceles escolares para el Ciclo Lectivo en
                            que cursarán sus hijos, estos folletos e información le permitirán
                            realizar una evaluación posterior.
                        </p>
                        <p class="mb-4">Lugares de Búsqueda en Internet:</p>
                        <ul class="mb-4 list-disc pl-6">
                            <li>
                                <a href="http://www.abc.gov.ar" target="_blank"
                                    class="text-blue-500 underline">www.abc.gov.ar (Cédula Escolar)</a>
                            </li>
                            <li>
                                <a href="http://www.paginasamarillas.com.ar" target="_blank"
                                    class="text-blue-500 underline">www.paginasamarillas.com.ar</a>
                            </li>
                        </ul>
                        <p class="mb-4">
                            Por Lic. Marcelo Daniel Muccillo (Centro Educativo Siglo 21) -
                            Representante Legal
                        </p>
                    </div>

                    <div v-if="currentTab === 'requisitos'" class="prose max-w-none">
                        <h1 class="text-4xl font-bold text-school-burgundy mb-8">
                            PROCEDIMIENTO DE INSCRIPCIÓN
                        </h1>
                        <p class="text-lg font-semibold mb-4">Ciclo lectivo 2025</p>
                        <p class="mb-4">
                            <strong class="font-bold text-black">IMPORTANTE:</strong> Leer
                            información administrativa/pedagógica, previo a completar el
                            formulario:
                            <a href="#" class="text-blue-500 underline font-bold">CONTRATO ADMINISTRATIVO</a>
                        </p>
                        <ul class="mb-4 list-decimal pl-6">
                            <li class="mb-4">
                                Completar el formulario en línea para que se contacte la
                                dirección y coordine una entrevista:
                                <a href="https://docs.google.com/forms/d/e/1FAIpQLSeUxFTw9NboujT9DOdkO5ngmsGynOHjDowPf2mgm5YkT4Jwpg/viewform"
                                    target="_blank" class="text-blue-500 underline mb-4 block">
                                    Formulario de inscripción
                                </a>
                            </li>
                            <li class="mb-2">Realizar la entrevista presencial.</li>
                            <li class="mb-2">
                                El directivo, vía mail o por teléfono, informará si existe
                                disponibilidad de la vacante solicitada.
                            </li>
                            <li class="mb-2">
                                Si la vacante es confirmada, las familias deberán realizar el
                                alta administrativa (<a href="#"
                                    class="text-blue-500 underline font-bold">requisitos</a>) y el pago de la Reserva de
                                vacante en el colegio
                                (administración - lunes a viernes de 9 a 17 hs.).
                            </li>
                        </ul>
                        <p class="mb-4">
                            Ante cualquier consulta, estamos a su disposición:
                        </p>
                        <p class="mb-4">
                            <a href="mailto:info@siglo21.edu.ar" class="text-blue-500 underline">info@siglo21.edu.ar</a>
                            - Tel.
                            <a href="tel:+54946210616" class="text-blue-500 underline">4621-0616</a>
                        </p>
                        <p class="mb-8">Los saludamos afectuosamente,</p>
                        <p class="mb-8 font-bold">Administración y Representación Legal</p>

                        <h2 class="text-2xl font-bold text-school-burgundy mb-4">
                            Personas de Contacto
                        </h2>
                        <p class="mb-4">
                            <img src="/images/qr.png" alt="" class="mb-4" />
                            <a href="https://qrfy.io/p/Siglo21" target="_blank"
                                class="text-blue-500 underline">Información específica sobre inscripción</a>
                        </p>
                        <div class="bg-school-burgundy text-white px-4 py-4 mb-4">
                            <h3 class="text-lg font-bold mb-2">Administración</h3>
                            <ul class="list-disc pl-6">
                                <li>Mónica Muccillo</li>
                                <li>Carola Zagert</li>
                                <li>Santino Carfagna</li>
                                <li>Cristina Delle Camelie</li>
                            </ul>
                        </div>
                        <div class="bg-school-burgundy text-white px-4 py-4 mb-4">
                            <h3 class="text-lg font-bold mb-2">Dirección Pedagógica</h3>
                            <ul class="list-disc pl-6">
                                <li>Lic. Miriam Casais - Inicial</li>
                                <li>Vice Directora Verena Griguelli - Primaria</li>
                                <li>Directora Mónica Cerrone - Secundaria</li>
                            </ul>
                        </div>
                    </div>

                    <div v-if="currentTab === 'aranceles'" class="prose max-w-none">
                        <h1 class="text-4xl font-bold text-school-burgundy mb-8">ARANCELES</h1>
        <p class="mb-4">
          Estos aranceles se mantendrán siempre y cuando no medien circunstancias que modifiquen 
          la estructura de costos o impliquen mayores cargas impositivas ajenas a la Institución.
        </p>
        <ul class="list-disc pl-6 mb-8">
          <li class="mb-2">
            El vencimiento de la cuota mensual opera el día <strong>10 de cada mes</strong>. 
            Para pagos fuera de término, se aplicará un interés compensatorio similar al fijado por 
            el Banco de la Nación Argentina para operaciones en descubierto.
          </li>
          <li class="mb-2">
            Todo importe abonado en concepto de reserva de vacante podrá ser acreditado en cualquier momento a cuenta de deuda contraída.
          </li>
          <li class="mb-2">
            Todas las familias de nuestra comunidad contarán con una cobertura sin cargo hasta el cierre del año lectivo, 
            en caso de fallecimiento del responsable del pago. Para mantener esta cobertura, 
            es imprescindible estar al día con los aranceles.
          </li>
        </ul>
        <p class="font-bold text-right mb-8">LA ADMINISTRACIÓN</p>

        <h2 class="text-2xl font-bold text-school-burgundy mb-4">Tabla de descuentos por hermanos</h2>
        <table class="w-full table-auto border-collapse border border-gray-300 mb-8">
          <thead class="bg-gray-100">
            <tr>
              <th class="border border-gray-300 px-4 py-2 text-left">Cantidad de Alumnos</th>
              <th class="border border-gray-300 px-4 py-2 text-left">Descuento</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border border-gray-300 px-4 py-2">1 Alumno</td>
              <td class="border border-gray-300 px-4 py-2">0%</td>
            </tr>
            <tr>
              <td class="border border-gray-300 px-4 py-2">2 Alumnos</td>
              <td class="border border-gray-300 px-4 py-2">10% (en el nivel más alto)</td>
            </tr>
            <tr>
              <td class="border border-gray-300 px-4 py-2">3 Alumnos</td>
              <td class="border border-gray-300 px-4 py-2">
                10% (en el nivel intermedio) y 20% (en el nivel más alto)
              </td>
            </tr>
          </tbody>
        </table>

        <h2 class="text-2xl font-bold text-school-burgundy mb-4">Detalle de Aranceles</h2>
        <div class="overflow-x-auto">
          <table class="w-full table-auto border-collapse border border-gray-300">
            <thead class="bg-gray-100">
              <tr>
                <th class="border border-gray-300 px-4 py-2 text-left">Nivel</th>
                <th class="border border-gray-300 px-4 py-2 text-left">Reserva Vacante (1)</th>
                <th class="border border-gray-300 px-4 py-2 text-left">Cuota (Mar/Dic) (10)</th>
                <th class="border border-gray-300 px-4 py-2 text-left">Adicional (Jul y Dic) (2)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border border-gray-300 px-4 py-2">Sala de 2</td>
                <td class="border border-gray-300 px-4 py-2">$139,400</td>
                <td class="border border-gray-300 px-4 py-2">$139,400</td>
                <td class="border border-gray-300 px-4 py-2">$69,700</td>
              </tr>
              <tr>
                <td class="border border-gray-300 px-4 py-2">Inicial</td>
                <td class="border border-gray-300 px-4 py-2">$104,800</td>
                <td class="border border-gray-300 px-4 py-2">$104,800</td>
                <td class="border border-gray-300 px-4 py-2">$52,400</td>
              </tr>
              <tr>
                <td class="border border-gray-300 px-4 py-2">EPB 1</td>
                <td class="border border-gray-300 px-4 py-2">$133,900</td>
                <td class="border border-gray-300 px-4 py-2">$133,900</td>
                <td class="border border-gray-300 px-4 py-2">$66,950</td>
              </tr>
              <tr>
                <td class="border border-gray-300 px-4 py-2">EPB 2</td>
                <td class="border border-gray-300 px-4 py-2">$134,900</td>
                <td class="border border-gray-300 px-4 py-2">$134,900</td>
                <td class="border border-gray-300 px-4 py-2">$69,700</td>
              </tr>
              <tr>
                <td class="border border-gray-300 px-4 py-2">Secundaria</td>
                <td class="border border-gray-300 px-4 py-2">$159,700</td>
                <td class="border border-gray-300 px-4 py-2">$159,700</td>
                <td class="border border-gray-300 px-4 py-2">$79,850</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p class="mt-8 text-gray-500 text-sm text-right">Actualizado: Noviembre 2024</p>
                    </div>

                    <div v-if="currentTab === 'uniformes'" class="prose max-w-none">
                        <h1 class="text-4xl font-bold text-school-burgundy mb-8">Uniformes</h1>
                        <img src="/images/uniformes.png" alt="">
                    </div>

                    <div v-if="currentTab === 'visita'" class="prose max-w-none">
    <!-- Mapa -->
    <div class="w-full h-64 md:h-96 mb-8">
      <iframe
        class="w-full h-full rounded-lg shadow-lg"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.8876612721745!2d-58.71271492427385!3d-34.63861005946277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcbf6a9b8d0b27%3A0x8f6a5a65a87f05c2!2sC.%20Jos%C3%A9%20Mar%C3%ADa%20Paz%202667%2C%20B1714%20Ituzaing%C3%B3%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1707835436044!5m2!1ses!2sar"
        allowfullscreen
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>

    <!-- Información principal -->
    <div class="">
      <h1 class="text-2xl font-bold text-school-burgundy mb-4">
        Información sobre la Institución
      </h1>
      <p class="mb-6">
        Las familias que desean informarse sobre la Institución deben llevar a cabo 2 (dos) Entrevistas:
      </p>

      <!-- Primera Entrevista -->
      <h2 class="text-xl font-bold text-gray-700 mb-3">
        Primera Entrevista (Inicial)
      </h2>
      <p class="mb-4">
        <strong>Horario:</strong> Lun a Vie 9 a 17 hs / Sáb 10 a 12 hs / Sin cita previa.
      </p>
      <p class="mb-4">
        Se recorren las instalaciones y se conversan los siguientes aspectos:
      </p>
      <ul class="list-disc pl-6 mb-6">
        <li class="mb-2">
          <strong>Seguridad:</strong> Cámaras en accesos, con conexión a una central de Alarmas con monitoreo permanente, personal de seguridad y emergencia médica (VITTAL).
        </li>
        <li class="mb-2">
          <strong>Materias Especiales:</strong> Inglés, Computación, Educación Física, Plástica, Artística, y Huerta.
        </li>
        <li class="mb-2">
          <strong>Actividades Extraprogramáticas (opcionales):</strong> Fútbol, Telas, Juegos Coreográficos, Apoyo Escolar y Doble Escolaridad.
        </li>
        <li class="mb-2">
          <strong>Proyectos Especiales:</strong> Campamentos, Megabandos.
        </li>
        <li class="mb-2">
          <a class="text-blue-500 underline" href="/files/pdi.pdf" download="">PDI:</a>  (14 aulas con Pizarra Digital Interactiva)
        </li>
        <li class="mb-2">
          <strong>Aranceles Educativos y Requisitos</strong>
        </li>
      </ul>

      <!-- Segunda Entrevista -->
      <h2 class="text-xl font-bold text-gray-700 mb-3">
        Segunda Entrevista (Individual)
      </h2>
      <p class="mb-4">
        En la Segunda Instancia se realiza una entrevista individual con el Personal Directivo:
      </p>
      <p class="mb-4">
        Una vez conversados los temas precedentes; si la familia manifiesta la intención de realizar la entrevista con el Personal Directivo; se acuerda día, horario y se los convoca con el futuro alumno que deberá traer:
      </p>
      <ul class="list-disc pl-6 mb-6">
        <li>Sus carpetas</li>
        <li>Cuadernos anteriores</li>
      </ul>
      <p class="mb-4">
        Esto es necesario para realizar un Diagnóstico de Situación Escolar, no siendo esta evaluación excluyente del ingreso al establecimiento.
      </p>
      <p class="font-semibold mb-4">En la entrevista se conversan los siguientes Aspectos Institucionales:</p>
      <ul class="list-disc pl-6 mb-6">
        <li class="mb-2">
          <strong>Ideario y Objetivos Institucionales</strong>
        </li>
        <li class="mb-2">
          <strong>Proyecto Educativo Institucional (PEI)</strong>
        </li>
        <li class="mb-2">
          <strong>Aspectos Pedagógicos:</strong>
          <ul class="list-disc pl-6">
            <li>Áreas</li>
            <li>Contenidos Curriculares</li>
            <li>Articulaciones de Contenidos, Años y Niveles</li>
            <li>Metodologías de Trabajo</li>
            <li>Bibliografía Utilizada</li>
            <li>Formas de Evaluación y Compensación</li>
            <li>Apoyaturas Pedagógicas</li>
          </ul>
        </li>
        <li class="mb-2"><strong>Lecciones Paseo</strong></li>
        <li class="mb-2"><strong>Actos Escolares</strong></li>
        <li class="mb-2">
          <strong>Aspectos Disciplinarios:</strong>
          <ul class="list-disc pl-6">
            <li>Convivencia</li>
            <li>Formas de abordar y de resolver los conflictos que surgen</li>
          </ul>
        </li>
        <li class="mb-2">
          <strong>Compromiso Hogar-Escuela:</strong> Participación y acuerdos con las familias
        </li>
      </ul>
      <p class="mb-4">
        Por último, la familia interesada deberá traer toda la documentación solicitada (original y copia para el establecimiento) y realizar el pago de la reserva de vacante.
      </p>
    </div>

    <!-- Galería -->
    <div class="">
      <h2 class="text-2xl font-bold text-school-burgundy mb-6">Galería de Imágenes</h2>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div
          v-for="image in images"
          :key="image.src"
          class="rounded-lg overflow-hidden shadow-lg"
          @click="openImage(image.src)"
        >
          <img
            :src="image.src"
            :alt="image.alt"
            class="w-full h-40 object-cover hover:scale-105 transition-transform duration-300"
            
          />
        </div>
      </div>
    </div>

    <div
      v-if="selectedImage"
      class="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
    >
      <div class="relative max-w-3xl w-full">
        <button
          @click="closeModal"
          class="absolute top-2 right-2 text-white text-2xl"
        >
          &times;
        </button>
        <img
          :src="selectedImage"
          alt="Imagen ampliada"
          class="rounded-lg w-full object-contain"
        />
      </div>
    </div>
  </div>
                    </div>

                    <!-- Navigation Arrows -->
                    <div class="flex justify-between mt-8">
                        <button @click="goToPreviousTab"
                            class="px-4 py-2 text-school-burgundy hover:text-school-green disabled:opacity-50 disabled:cursor-not-allowed"
                            :disabled="currentTab === tabs[0].id">
                            ← Anterior
                        </button>
                        <button @click="goToNextTab"
                            class="px-4 py-2 text-school-burgundy hover:text-school-green disabled:opacity-50 disabled:cursor-not-allowed"
                            :disabled="currentTab === tabs[tabs.length - 1].id">
                            Siguiente →
                        </button>
                    </div>
                </div>
            </div>
        </div>
</template>