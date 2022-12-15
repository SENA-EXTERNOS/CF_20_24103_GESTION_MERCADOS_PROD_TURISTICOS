<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-around.align-items-center.mt-5
      .col-lg-10
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/temas/introduccion/img1.svg', alt='Texto que describa la imagen').banner-principal-decorativo-5

    .row.justify-content-around.align-items-center.mt-3
      .col-lg-10
        .bloque-texto-d.bloque-texto-amarillo.p-4
          .bloque-texto-d__texto
            p Estimado aprendiz, en este proceso de formación se le invita a recorrer, explorar y analizar la información que se presenta en este recurso educativo enfocado en el #[b cierre de eventos], donde se detallan aspectos relacionados con el registro de información y los documentos asociados a este, que permiten llevar la trazabilidad correspondiente en esta fase, especialmente con relación a actividades vinculadas al turismo.

    .row.justify-content-around.align-items-center
      .col-lg-10
        .bloque-texto-b.bloque-texto-amarillo2.p-4
          .bloque-texto-b__texto
            p Igualmente, se presenta contenido que alude a la importancia de contar con bases de datos, informes de cierre y protocolos en dicha etapa. De esta manera, y con el estudio de estos contenidos, el aprendiz conocerá las funciones e implicaciones que tiene un supervisor para llevar a feliz término actividades turísticas, teniendo en cuenta ítems como la lista de chequeo que se debe realizar antes, durante y después de las actividades. 

    .row.mt-5
      p #[b En el siguiente video conocerá, de forma general, la temática que estudiará. ¡Muchos éxitos en este proceso de aprendizaje!]
    
    .row.justify-content-center.align-items-center.mb-5.mt-5          
      .col-lg-12(data-aos="fade-left")     
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)            
              

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
