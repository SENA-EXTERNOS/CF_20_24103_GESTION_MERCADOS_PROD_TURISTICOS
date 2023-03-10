<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 2
      h1 Protocolos de cierre de eventos

    .row.justify-content-center.align-items-center.mt-5.mb-3
      .col-lg-3
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/temas/tema2/img1.svg', alt='Texto que describa la imagen').banner-principal-decorativo-5

      .col-lg-7
        p.mt-5 Un protocolo consiste en plasmar en un documento un proceso determinado para una empresa, con el fin de encontrar la secuencia lógica para su realización, garantizando la prestación de servicios con calidad que genere confianza y lealtad en los clientes, y que además cree sensación de organización en los equipos de trabajo.

    .row.justify-content-center.align-items-center.mt-5
      .col-lg-10
        p Para el cierre del evento es importante tener en cuenta la elaboración de un protocolo que facilite el trabajo en esta fase, permitiendo que se pueda realizar de una manera organizada, como un proceso ya establecido.

    ul.lista-ul--color.mb-5
      li 
        i.fas.fa-square
        p.mb-0 #[b Lista de chequeo]
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img2.svg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La herramienta más comúnmente utilizada para aplicar los protocolos es la lista de chequeo, en ella se comprueba el cumplimiento de los procesos que tiene la empresa. 
        br
        br
        | Hay varias estrategias para su elaboración: pueden usarse imágenes, preguntas o secuencias de acciones. 

    p A continuación se adjunta un formato de ejemplo que puede revisar.

    p.mb-5 Para ampliar la información, se le invita a ver el<b> Anexo 1.  Ejemplo de lista de chequeo,</b> en el cual se detalla el <i>checklist</i> de una organización, donde se especifica lo que se debe tener en cuenta antes, durante y después del evento.

    ul.lista-ul--color.mb-5
      li 
        i.fas.fa-square
        p.mb-0 #[b Componentes de la lista de chequeo]


    .row.justify-content-center.align-items-center.mb-3.mt-3
      .col-lg-10
        .tarjeta.bgr-download.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/tema2/img3.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1.text-white Anexo 1 - Ejemplo lista de chequeo
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('/downloads/Anexo_1.xlsx')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download


    .row.mt-3
      p La lista de chequeo, como herramienta metodológica, está compuesta por una serie de componentes necesarios para realizar una tarea, controlarla y evaluarla detalladamente durante el desarrollo de un proyecto, evento, producto o actividad.

    .row.justify-content-center.align-items-center.mb-5.mt-3
      .col-lg-10
        .cajonAmarillo.bgr-tarjeta-tema2.p-4
           p Dichos componentes se organizan de manera coherente para permitir que se evalúe de manera efectiva, dándole valores cualitativos y/o cuantitativos de cumplimiento. Ejemplo: Cumple o no cumple, porcentaje (%) de cumplimiento, valoración de 1 a 5, etc.

           p En otras palabras, se refiere a la elaboración de listados de acciones o preguntas que sirven para verificar el nivel de cumplimiento de unas actividades establecidas, y que aplican para todo tipo de proceso comercial, industrial, de servicio y hasta personal, con el fin de aportar a la labor de supervisión.


    .row.mt-3
      ul.lista-ul--color
        li 
          i.fas.fa-square
          p.mb-0 #[b Proceso de elaboración de las listas de chequeo]

      p Para la elaboración de las listas de chequeo se sugiere seguir una serie de pasos como se ve a continuación:

    ImagenInfografica.color-acento-botones
      template(v-slot:imagen)
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/temas/tema2/img4.svg', alt='Texto que describa la imagen')

      .tarjeta.color-acento-botones.p-3(x="6%" y="9%" numero="")
        p Determinar claramente el objetivo, es decir, qué se busca con la lista.

      .tarjeta.color-acento-botones.p-3(x="17%" y="86%" numero="")
        p Observar el proceso, actividad, equipo o proyecto a evaluar para convertirlo en los ítems a verificar.

      .tarjeta.color-acento-botones.p-3(x="28%" y="9%" numero="")
        p Analizar toda la información e ir haciendo un listado, describiendo los ítems que conformarán la lista de chequeo.

      .tarjeta.color-acento-botones.p-3(x="39%" y="86%" numero="")
        p Filtrar la lista, es decir, anular aquellos elementos que se han repetido o unir los que se requiere que aparezcan individualmente.

      .tarjeta.color-acento-botones.p-3(x="50%" y="9%" numero="")
        p Establecer el formato que se quiere utilizar y hacer un manual de instrucciones. La lista debe tener un encabezado con:

        ul.lista-ul--color
          li 
            i.fas.fa-check
            p.mb-0 Nombre de la empresa.

          li 
            i.fas.fa-check
            p.mb-0 Proyecto, trabajo, actividad a controlar, evaluar o verificar.

          li 
            i.fas.fa-check
            p.mb-0 Fecha

          li 
            i.fas.fa-check
            p.mb-0 Responsable

          li 
            i.fas.fa-check
            p.mb-0 Contenido: definir los ítems a evaluar de fácil aplicación.

      .tarjeta.color-acento-botones.p-3(x="61%" y="86%" numero="")
        p Realizar una prueba piloto con el formato y el manual de instrucciones.

      .tarjeta.color-acento-botones.p-3(x="72%" y="9%" numero="")
        p Retroalimentar el equipo de trabajo con el fin de hacer ajustes tanto de forma como de contenido.

      .tarjeta.color-acento-botones.p-3(x="83%" y="86%" numero="")
        p Normalizar el formato a utilizar y aplicarlo de acuerdo con el cronograma que se establezca.

      .tarjeta.color-acento-botones.p-3(x="94%" y="9%" numero="")
        p Retroalimentar de manera periódica los avances o retrocesos del asunto que se está controlando. (Cardona y Restrepo, s.f.)


    .row.justify-content-center.align-items-center.mb-5.mt-5
      .col-lg-10
        p Para concluir, las listas de chequeo no son elaboraciones estándar, deben construirse de acuerdo a las diferentes necesidades. Existen modelos que se pueden ajustar con base a la planeación de cada actividad. 

    .row.justify-content-center.align-items-center.mb-5.mt-5
      .col-lg-10
        .cajonAmarillo.bgr-tarjeta-tema1.p-4
           p Estimado aprendiz, ha llegado al final de este componente formativo, recuerde explorar los demás recursos que se encuentran disponibles como son la síntesis, la actividad didáctica, material complementario, entre otros.

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
