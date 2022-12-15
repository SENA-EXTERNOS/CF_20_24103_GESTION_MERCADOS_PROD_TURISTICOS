<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 1
      h1 Cierre de eventos 
    
    .row.justify-content-around.align-items-center.mt-5
      .col-lg-2
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/temas/tema1/img1.svg', alt='Texto que describa la imagen').banner-principal-decorativo-5
      
      .col-lg-8
        p.mt-5 El cierre del evento se realiza cuando ya se haya obtenido el objetivo planteado inicialmente, y se lleva a cabo de manera posterior a la fecha de su ejecución. Es en este momento cuando comienza la última fase de la realización del evento, pues un cierre no es solo la conclusión de la actividad, sino que es el momento en el cual se generan informes requeridos por la organización, para conocer el alcance de los objetivos planteados de manera inicial, y formular aprendizajes que sirven para su aplicación en posteriores eventos. 

    .row.mt-5
      p En el cierre se realizan evaluaciones operativas, administrativas y financieras. Para cada una de ellas es importante diseñar herramientas que ayuden a determinar el alcance de las acciones, pero lo más importante, es que permitan obtener una retroalimentación. 

    .row.justify-content-around.align-items-center.mt-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Figura 1
          span Elementos del cierre

      
        figure(data-aos="zoom-in")
          img(src="@/assets/curso/temas/tema1/img2.svg", alt="alt")
          figcaption Nota: elaboración propia del experto.

    SlyderF(columnas="col-lg-6 col-xl-4").mt-5
      .tarjeta.color-secundario.p-4.background-tarjeta.height-tarjeta
        .row.justify-content-center.mb-3
          .col-6
            img(src='@/assets/curso/temas/tema1/img3.svg')
        h2.text-center Gestión de eventos
        p.text-center Los informes y evaluaciones tienen a su vez herramientas que facilitan su elaboración. Estas se construyen con base a criterios estipulados en las fases de planificación y de gestión.

      .tarjeta.color-secundario.p-4.background-tarjeta.height-tarjeta
        .row.justify-content-center.mb-3
          .col-6
            img(src='@/assets/curso/temas/tema1/img4.svg' alt='AvatarTop')
        h2.text-center Objetivo inicial
        p.text-center Estas herramientas deben tenerse en cuenta, ya que el conjunto de criterios apunta al objetivo inicial propuesto, que debe ser medible y verificable en su alcance. 

      .tarjeta.color-secundario.p-4.background-tarjeta.height-tarjeta
        .row.justify-content-center.mb-3
          .col-6
            img(src='@/assets/curso/temas/tema1/img5.svg' alt='AvatarTop')
        h2.text-center Herramientas de evaluación 
        p.text-center No solo hay que conocer sobre herramientas de evaluación, también de manera especial, al personal que trabaja o se vincula a la realización de eventos.

      .tarjeta.color-secundario.p-4.background-tarjeta.height-tarjeta
        .row.justify-content-center.mb-3
          .col-6
            img(src='@/assets/curso/temas/tema1/img6.svg' alt='AvatarTop')
        h2.text-center Habilidades
        p.text-center Se deben desarrollar unas habilidades propias de esta actividad, como son la supervisión, comunicación, trabajo en equipo, alcance de logros, atención al cliente y conocimiento técnico, las cuales ya se han abordado en temarios anteriores.

    separador

    #t_1_1

    .titulo-segundo.color-acento-contenido.mt-5(data-aos="zoom-in-left")
      h2 1.1 Supervisión 
    
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img7.svg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La supervisión es la acción y efecto de supervisar, un verbo que supone ejercer la inspección de un trabajo realizado por otra persona. Quien supervisa se encuentra en una situación de superioridad jerárquica, porque tiene la capacidad o la facultad de determinar si la acción supervisada es correcta o no. Por lo tanto, la supervisión es el acto de vigilar ciertas actividades, de tal manera que se realicen en forma satisfactoria. (Pérez Porto y Gardey, 2008, párr. 1).

    .row.justify-content-around.align-items-center.mt-5
      .col-lg-2
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/temas/tema1/img8.svg', alt='Texto que describa la imagen')

      .col-lg-8
        .bloque-texto-d.bloque-texto-amarillo3.p-4
          .bloque-texto-d__texto
            p Según lo anterior, esta es una actividad desempeñada por una persona que debe desarrollar habilidades técnicas para el buen uso de los recursos, entre los que se encuentran los recursos financieros, humanos y de equipos proporcionados por la organización para la realización del evento. Este supervisor tiene, no solo la tarea de garantizar el buen uso de los recursos, sino también de facilitar las actividades de todo el equipo mediante su coordinación, además de presentar informes al gerente general.

    .row.justify-content-center.align-items-center.mb-5.mt-5          
      .col-lg-12(data-aos="fade-left")     
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)            
              
    .row.mt-3
      ul.lista-ul--color
        li 
          i.fas.fa-square
          p.mb-0 #[b Actitudes, aptitudes y funciones de la supervisión]


    .bg--img_03
      .row.justify-content-center.align-items-center.mb-5.mt-5   
        .col-lg-8
          AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
            .row(titulo="Actitudes con las que debe contar la supervisión")
              .col-12
                p.mb-0 Un supervisor de eventos debe ser un profesional que se adapte fácilmente a la organización de cualquier actividad, capaz de realizar distintas funciones dentro de la organización y la planificación, debe ser flexible ante los cambios, seguro ante su conocimiento técnico y habilidad, estar motivado para alcanzar las metas, ser dinámico, tener iniciativa y transmitir confianza.

            .row(titulo="Aptitudes con las que debe contar la supervisión")
              .col-12
                p.mb-0 Responsabilizarse del proyecto y tener amplios conocimientos sobre los eventos; conocer a las personas a su cargo, saber dirigir a su equipo en la consecución de los objetivos marcados, manteniéndose informado de lo que cada uno hace y haciéndolo sentir parte de cada proyecto; resolver problemas con rapidez, tener habilidad especial para la comunicación practicando la escucha activa.

            .row(titulo="Funciones principales del supervisor del evento")
              .col-12
                ul.lista-ul--color
                  li 
                    i.fas.fa-check
                    p.mb-0 Participar en la planeación.

                  li 
                    i.fas.fa-check
                    p.mb-0 Supervisar todo lo que ocurre durante el desarrollo.

                  li 
                    i.fas.fa-check
                    p.mb-0 Proponer soluciones para realizar las correcciones necesarias.

                  li 
                    i.fas.fa-check
                    p.mb-0 Evaluar el evento según lo previsto.

                  li 
                    i.fas.fa-check
                    p.mb-0 Presentar informes de gestión. 

                  li 
                    i.fas.fa-check
                    p.mb-0 Realizar el cierre administrativo y contable.


        .col-lg-4
          figure(data-aos="zoom-in")
            img(src="@/assets/curso/temas/tema1/img9.svg", alt="alt").img400.m-auto

    .row.mt-5
      p El supervisor también debe tener habilidades para la elaboración de herramientas que le faciliten su labor y le sirvan de control, estas pueden ser:

    .row.justify-content-center.align-items-center.mb-5.mt-5          
      .col-lg-12
        ImagenInfografica.color-acento-botones
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema1/img10.svg', alt='Texto que describa la imagen')

          .tarjeta.color-acento-botones.p-3(x="31.4%" y="28.2%" numero="1")
            .h5.mb-2 #[i Checklist o listas de chequeo:]
            p Son documentos donde se desglosan de manera puntual las tareas a realizar. La ventaja de su uso es permitir al supervisor el poder de delegar y realizar un control, de una manera más sencilla, de cada una de las acciones, además de ser una herramienta de inventario una vez finalizado el evento.

          .tarjeta.color-acento-botones.p-3(x="50%" y="28.2%" numero="2")
            .h5.mb-2 El cronograma del programa:
            p Es una herramienta eficiente utilizada para la organización de las actividades y el cumplimiento a tiempo de las tareas.

          .tarjeta.color-acento-botones.p-3(x="68.7%" y="28.2%" numero="3")
            .h5.mb-2 Encuestas para la evaluación del evento:
            p El supervisor de eventos, junto con su equipo, se encargará de evaluar el proyecto; dicha evaluación sirve para establecer si se han alcanzado los objetivos propuestos, utilizando principalmente encuestas de satisfacción.

    .row.mt-5
      p Las encuestas se pueden realizar durante, finalizando y después del evento, como se indica a continuación:

    .tarjeta.tarjeta--azul.p-4.mt-3.background-slider-1
      SlyderA(tipo="b")
        .row
          .col-md-7.mb-4.mb-md-0
            p #[b Lugar del evento]
            p Durante el evento se puede preguntar por las instalaciones y conocer si se tienen que cambiar determinados aspectos.

          .col-md-5
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/tema1/img11.svg', alt='Texto que describa la imagen')

        .row
          .col-md-7.mb-4.mb-md-0
            p #[b Encuesta de satisfacción]
            p Durante el evento se puede preguntar por las instalaciones y conocer si se tienen que cambiar determinados aspectos.

          .col-md-5
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/tema1/img12.png', alt='Texto que describa la imagen')

        .row
          .col-md-7.mb-4.mb-md-0
            p #[b Enviar encuesta]
            p Después del evento se puede enviar la encuesta a los invitados, aunque esta tiene menor aceptación; no obstante, presenta resultados más fiables.

          .col-md-5
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/tema1/img13.png', alt='Texto que describa la imagen')

        .row
          .col-md-7.mb-4.mb-md-0
            p #[b Analizar datos]
            p Finalmente, el supervisor y su equipo deben analizar los datos recogidos y presentar los resultados ante el comité de organización del evento, con sus conclusiones para futuras actividades.

          .col-md-5
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/tema1/img14.png', alt='Texto que describa la imagen')

     
    separador

    #t_1_2

    .titulo-segundo.color-acento-contenido.mt-5(data-aos="zoom-in-left")
      h2 1.2 Bases de datos

    .row.mt-5
      p A continuación, se mencionará la importancia de las bases de datos y su utilidad en el mundo actual. Se revisará el avance que se ha tenido en cuanto a herramientas o aplicaciones que se usan para su creación.

    .row.justify-content-center.align-items-center.mb-5.mt-5          
      .col-lg-12
        TabsA.color-acento-botones.mb-5        
          .tarjeta.clr-paleYellow.p-4(titulo="Bases de datos")
            .row.justify-content-center.align-items-center.mb-5.mt-5
              .col-lg-2
                figure(data-aos="zoom-in")
                  img(src='@/assets/curso/temas/tema1/img15.svg', alt='Texto que describa la imagen')       
              .col-lg-10
                h4 Bases de datos
                p Las bases de datos son un conjunto de datos relacionados entre sí que poseen una coherencia lógica y contienen la representación de objetos, sujetos o hechos de la vida real o simulados. Son creadas con un fin específico, es decir, deben tener una utilidad para una persona o un grupo. (Granero, 2022, párr. 1)

          .tarjeta.clr-paleYellow.p-4(titulo="Ejemplo de base de datos")
            .row.justify-content-center.align-items-center.mb-5.mt-5
              .col-lg-2
                figure(data-aos="zoom-in")
                  img(src='@/assets/curso/temas/tema1/img16.svg', alt='Texto que describa la imagen')       
              .col-lg-10
                h4 Ejemplo de base de datos
                p Las bases de datos pueden pensarse como una agenda telefónica, la cual contiene información sobre contactos; su fin es tener información a la mano que permita establecer una comunicación ágil con los mismos. A medida que se obtiene más información de ellos, se va almacenando de manera organizada.

          .tarjeta.clr-paleYellow.p-4(titulo="Cantidad de información")
            .row.justify-content-center.align-items-center.mb-5.mt-5
              .col-lg-2
                figure(data-aos="zoom-in")
                  img(src='@/assets/curso/temas/tema1/img17.svg', alt='Texto que describa la imagen')       
              .col-lg-10
                h4 Cantidad de información
                p Anteriormente, solo era un número de teléfono (quizá fijo) y su dirección de residencia, a medida que ha pasado el tiempo también se puede contener información sobre redes sociales, la fecha de nacimiento, entre otros. Todos estos datos son importantes para la comunicación con las personas con las cuales se requiere mantener un contacto personal, profesional o empresarial. 

          .tarjeta.clr-paleYellow.p-4(titulo="Información de clientes")
            .row.justify-content-center.align-items-center.mb-5.mt-5
              .col-lg-2
                figure(data-aos="zoom-in")
                  img(src='@/assets/curso/temas/tema1/img18.svg', alt='Texto que describa la imagen')       
              .col-lg-10
                h4 Información de clientes
                p Una base de datos, por ejemplo, pueden ser nuestros clientes, su email, su nombre, apellidos, teléfono, fecha en la que entraron a nuestra web, productos o servicios que han comprado, fechas en las que compraron, su dirección y muchos otros campos. Gracias a todos estos datos, podremos trabajarlos para conocer mucho más a nuestros clientes y potenciar nuestro negocio, así como sacar conclusiones o analizar comportamientos. (Aurora, 2022, párr. 2)

          .tarjeta.clr-paleYellow.p-4(titulo="Herramientas tecnológicas")
            .row.justify-content-center.align-items-center.mb-5.mt-5
              .col-lg-2
                figure(data-aos="zoom-in")
                  img(src='@/assets/curso/temas/tema1/img19.svg', alt='Texto que describa la imagen')       
              .col-lg-10
                h4 Herramientas tecnológicas
                p Para la elaboración de las bases de datos existen herramientas tecnológicas o softwares diseñados para tal fin; dependiendo del nivel de complejidad y de lo que se busca se eligen los tipos a usar. Es importante conocer las diferencias entre estas.

          .tarjeta.clr-paleYellow.p-4(titulo="Hojas de cálculo")
            .row.justify-content-center.align-items-center.mb-5.mt-5
              .col-lg-2
                figure(data-aos="zoom-in")
                  img(src='@/assets/curso/temas/tema1/img20.svg', alt='Texto que describa la imagen')       
              .col-lg-10
                h4 Hojas de cálculo
                p Tanto las bases de datos como las hojas de cálculo tienen la finalidad de ordenar y almacenar la información para ser manipulada. Cabe destacar algunos puntos fundamentales:

                ul.lista-ul--color
                  li 
                    i.fas.fa-check
                    p.mb-0 Las hojas de cálculo están pensadas para un trabajo más de usuario, son perfectas para equipos más pequeños y que manejen volúmenes no muy complejos.

                  li 
                    i.fas.fa-check
                    p.mb-0 Las bases de datos están orientadas a almacenar grandes cantidades de datos de manera organizada; permiten consultar información de varios usuarios al mismo tiempo y se puede acceder a los datos de forma rápida y segura.

          .tarjeta.clr-paleYellow.p-4(titulo="Sistemas de Gestión de Bases de Datos")
            .row.justify-content-center.align-items-center.mb-5.mt-5
              .col-lg-2
                figure(data-aos="zoom-in")
                  img(src='@/assets/curso/temas/tema1/img21.svg', alt='Texto que describa la imagen')       
              .col-lg-10
                h4 Sistemas de Gestión de Bases de Datos
                p Existen programas especializados, denominados ‘Sistemas de Gestión de Bases de Datos’, que ofrecen mayores ventajas a la hora del procesamiento y almacenamiento.

          .tarjeta.clr-paleYellow.p-4(titulo="<em>Cloud</em>")
            .row.justify-content-center.align-items-center.mb-5.mt-5
              .col-lg-2
                figure(data-aos="zoom-in")
                  img(src='@/assets/curso/temas/tema1/img22.svg', alt='Texto que describa la imagen')       
              .col-lg-10
                h4 #[i Cloud]
                p También existen otro tipo de bases de datos que se ofrecen como servicio desde la nube, no requieren de infraestructura y su diseño es mucho más sencillo. Además, se puede hacer uso de plantillas que guardan determinadas tablas para su uso.


    .row.mt-5
      p Los software de bases de datos tienen ventajas y desventajas, como se comenta a continuación:

    .row.justify-content-center.align-items-center.mb-5.mt-5          
      .col-lg-8
        .tarjeta--container.row.mb-5
          .col-md.tarjeta.color-tarjeta-1.p-5
            .row.justify-content-center.mb-4
              .col-6
                figure(data-aos="zoom-in")
                  img(src='@/assets/curso/temas/tema1/img23.svg', alt='Texto que describa la imagen')
              
            h2.text-center Ventajas
            ul.lista-ul--color
              li 
                i.fas.fa-check
                p.mb-0 Controlan la redundancia.

              li 
                i.fas.fa-check
                p.mb-0 Restringen el acceso no autorizado.

              li 
                i.fas.fa-check
                p.mb-0 Ahorran tiempo.

              li 
                i.fas.fa-check
                p.mb-0 La Información permanece actualizada.

              li 
                i.fas.fa-check
                p.mb-0 Reducen el espacio de almacenamiento.

          .col-md.tarjeta.color-tarjeta-2.p-5
            .row.justify-content-center.mb-4
              .col-6
                figure(data-aos="zoom-in")
                  img(src='@/assets/curso/temas/tema1/img24.svg', alt='Texto que describa la imagen')
              
            h2.text-center Desventajas
            ul.lista-ul--color
              li 
                i.fas.fa-check
                p.mb-0 Requieren una fuerte inversión inicial.

              li 
                i.fas.fa-check
                p.mb-0 Los procesos de implementación pueden ser complejos.


    separador

    #t_1_3

    .titulo-segundo.color-acento-contenido.mt-5(data-aos="zoom-in-left")
      h2 1.3 Informes de cierre de eventos

    .row
      p El informe final del evento es muy importante, ya que se obtienen datos que pueden ayudar a revisar aquellos puntos en los cuales se debe mejorar.

    TabsB.color-primario
      .py-4.py-md-5(titulo="Gestión de informes" :icono="require('@/assets/curso/temas/tema1/img25.svg')")
        .row.justify-content-center.align-items-center
          .col-md-3.mb-4.mb-md-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/tema1/img27.svg', alt='Texto que describa la imagen')

          .col-md-9
            p Para realizar proyecciones, establecer estrategias y proponer mejoras, es necesario conocer el estado actual de las cosas; es por eso que, para el proceso de gestión de informes, el objetivo principal es proporcionar a todos los involucrados en la planeación, ejecución y evaluación del evento, una visión realista basada en datos que permitan establecer la calidad y el rendimiento de los servicios prestados.
      
      .py-4.py-md-5(titulo="Herramienta de evaluación" :icono="require('@/assets/curso/temas/tema1/img26.svg')")
        .row.justify-content-center.align-items-center
          .col-md-3.mb-4.mb-md-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/tema1/img28.svg', alt='Texto que describa la imagen')

          .col-md-9
            p Por lo tanto, el propósito del informe final es mantener notificados de una manera puntual a los directivos y al personal de la organización, acerca de la calidad, el rendimiento y el alcance de lo planificado. Así mismo, es una herramienta de evaluación que servirá para una mejora continua.


    .row.mt-5
      p El informe final se elabora a partir de documentos o comprobantes que sirven como base para registrar el cumplimiento de las actividades que se realizan, y aunque no siempre son solicitados, en general son aquellos que se requieren para realizar el cierre financiero, administrativo y operativo.

    .row.justify-content-center.align-items-center.mb-5.mt-5          
      .col-lg-8
        ImagenInfografica.color-acento-botones
          template(v-slot:imagen)
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/tema1/img29.svg', alt='Texto que describa la imagen')

          .tarjeta.color-acento-botones.p-3(x="50%" y="5%" numero="")
            .h5.mb-2 Facturas de pagos:
            p Son recibos donde se detallan los servicios contratados (refrigerios, carpas, equipos audiovisuales, etc.).

          .tarjeta.color-acento-botones.p-3(x="85%" y="50%" numero="")
            .h5.mb-2 Lista de participantes e invitados:
            p Es un formato que describe a las personas visitantes, con sus nombres, apellidos y nacionalidad.

          .tarjeta.color-acento-botones.p-3(x="50%" y="95%" numero="")
            .h5.mb-2 Libro de novedades:
            p En algunos casos es importante llevar un registro diario de novedades del evento al final de cada jornada, para luego tener la información disponible.

          .tarjeta.color-acento-botones.p-3(x="15%" y="50%" numero="")
            .h5.mb-2 Herramientas de evaluación del servicio:
            p Estas pueden ser encuestas, grabaciones o demás herramientas que se hayan diseñado para obtener información acerca de la satisfacción del evento.

    .row.mt-3
      ul.lista-ul--color
        li 
          i.fas.fa-square
          p.mb-0 #[b Ejemplo de alguna encuesta para eventos]

      p A continuación, se da un ejemplo de una encuesta que se puede realizar al finalizar los eventos:

      .row.justify-content-center
      .col-lg-4.d-none.d-lg-flex
        figure(data-aos="zoom-in")
          img(src="@/assets/curso/temas/tema1/img30.svg", alt="alt").m-auto 
      .col-lg-8
        AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta clr--gris")
          .row(titulo="Nivel de satisfacción")
            .col-12
              ol.lista-ol
                li 
                  span.text-bold 1. 
                  p.mb-0 Teniendo en cuenta su experiencia completa en el evento, ¿qué posibilidades tiene de recomendarlo a sus amigos o compañeros de trabajo?
                li 
                  span.text-bold 2. 
                  p.mb-0 En una escala del 1 al 7, siendo el 7 el más alto, ¿cómo calificaría el evento?
                li 
                  span.text-bold 3. 
                  p.mb-0 Por favor, indique las 3 cosas que más le gustaron del evento.
                li 
                  span.text-bold 4. 
                  p.mb-0 Por favor, indique las 3 cosas que no le gustaron del evento.

                li 
                  span.text-bold 5. 
                  p ¿Cómo calificaría la organización del evento?

              ul.lista-ul--color.margen-ul
                    li 
                      i.fas.fa-check
                      p.mb-0 Muy buena 

                    li 
                      i.fas.fa-check
                      p.mb-0 Buena

                    li 
                      i.fas.fa-check
                      p.mb-0 Aceptable

                    li 
                      i.fas.fa-check
                      p.mb-0 Mala

                    li 
                      i.fas.fa-check
                      p.mb-0 Muy mala


          .row(titulo="¿Qué tan útil fue el personal del evento?")
            .col-12
              ol.lista-ol
                li 
                  span.text-bold 6. 
                  p ¿Qué tan útil fue el personal del evento?

              ul.lista-ul--color.margen-ul
                li 
                  i.fas.fa-check
                  p.mb-0 Extremadamente útil

                li 
                  i.fas.fa-check
                  p.mb-0 Muy útil

                li 
                  i.fas.fa-check
                  p.mb-0 Algo útil
                
                li 
                  i.fas.fa-check
                  p.mb-0 No tan útil

                li 
                  i.fas.fa-check
                  p.mb-0 Nada útil

              ol.lista-ol
                li 
                  span.text-bold 7. 
                  p.mb-0 Previo al evento, ¿cuánta información le fue proporcionada para ayudarle a entender de qué se trataba?

              ul.lista-ul--color.margen-ul
                li 
                  i.fas.fa-check
                  p.mb-0 Recibí toda la información

                li 
                  i.fas.fa-check
                  p.mb-0 Recibí la mayor parte de la información

                li 
                  i.fas.fa-check
                  p.mb-0 Recibí parte de la información
                
                li 
                  i.fas.fa-check
                  p.mb-0 Recibí poca información

                li 
                  i.fas.fa-check
                  p.mb-0 No recibí nada de información

          .row(titulo="Duración del evento")
            .col-12
              ol.lista-ol
                li 
                  span.text-bold 8. 
                  p.mb-0 Por favor, indique el nivel acorde para la declaración: la duración del evento fue perfecta (ni muy largo ni muy corto).

              ul.lista-ul--color.margen-ul
                li 
                  i.fas.fa-check
                  p.mb-0 Totalmente en desacuerdo

                li 
                  i.fas.fa-check
                  p.mb-0 En desacuerdo

                li 
                  i.fas.fa-check
                  p.mb-0 Neutral

                li 
                  i.fas.fa-check
                  p.mb-0 Aceptable

                li 
                  i.fas.fa-check
                  p.mb-0 Totalmente de acuerdo

              ol.lista-ol
                li 
                  span.text-bold 9. 
                  p.mb-0 ¿Ha asistido anteriormente a alguno de los eventos realizados por la organización?

              ul.lista-ul--color.margen-ul
                li 
                  i.fas.fa-check
                  p.mb-0 Si

                li 
                  i.fas.fa-check
                  p.mb-0 No 

          .row(titulo="Satisfacción del evento")
            .col-12
              ol.lista-ol
                li 
                  span.text-bold 10. 
                  p.mb-0 ¿Cuál fue la razón por la que decidió asistir a este evento y sus expectativas del mismo?

                li 
                  span.text-bold 11. 
                  p.mb-0 ¿Cumplió el evento con estas?

              ul.lista-ul--color.margen-ul
                li 
                  i.fas.fa-check
                  p.mb-0 Si

                li 
                  i.fas.fa-check
                  p.mb-0 No

              ol.lista-ol
                li 
                  span.text-bold 12. 
                  p.mb-0 En general, ¿qué tan satisfecho estuvo con el evento?

              ul.lista-ul--color.margen-ul
                li 
                  i.fas.fa-check
                  p.mb-0 Muy insatisfecho

                li 
                  i.fas.fa-check
                  p.mb-0 Insatisfecho  

                li 
                  i.fas.fa-check
                  p.mb-0 Neutral

                li 
                  i.fas.fa-check
                  p.mb-0 Satisfecho 

                li 
                  i.fas.fa-check
                  p.mb-0 Muy satisfecho 

          .row(titulo="Evento Interactivo")
            .col-12
              ol.lista-ol
                li 
                  span.text-bold 13. 
                  p.mb-0 ¿Diría que el evento fue interactivo?

              ul.lista-ul--color.margen-ul
                li 
                  i.fas.fa-check
                  p.mb-0 No, la comunicación era unidireccional

                li 
                  i.fas.fa-check
                  p.mb-0 Sí, fue muy interactivo 

              ol.lista-ol
                li 
                  span.text-bold 14. 
                  p.mb-0 ¿El evento le ayudó a obtener nuevos aprendizajes o conocimientos?

              ul.lista-ul--color.margen-ul
                li 
                  i.fas.fa-check
                  p.mb-0 Sí

                li 
                  i.fas.fa-check
                  p.mb-0 No               

          .row(titulo="Presentador del evento")
            .col-12
              ol.lista-ol
                li 
                  span.text-bold 15. 
                  p.mb-0 ¿Diría que los oradores o presentadores estaban bien informados?

              ul.lista-ul--color.margen-ul
                li 
                  i.fas.fa-check
                  p.mb-0 Si

                li 
                  i.fas.fa-check
                  p.mb-0 No

              ol.lista-ol
                li 
                  span.text-bold 16. 
                  p.mb-0 ¿Tiene algún otro comentario o sugerencia que ayude a mejorar los eventos futuros?

    .row.mt-3
      ul.lista-ul--color
        li 
          i.fas.fa-square
          p.mb-0 #[b Pasos para elaborar el informe de cierre de un evento]

      p Para la elaboración del informe de cierre de evento es importante tener en cuenta los siguientes pasos:               

    .tarjeta.tarjeta--gris.p-4.background-slider-1
      PasosB.color-acento-botones
        .row(titulo="Paso 1")
          .col-md-5
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/tema1/img31.png', alt='Texto que describa la imagen')

          .col-md-7.mb-4.mb-md-0
            p #[b Presentación del informe:]

            ul.lista-ul--color.margen-ul
                li 
                  i.fas.fa-check
                  p.mb-0 Determinar el estilo y el formato de la presentación. 

                li 
                  i.fas.fa-check
                  p.mb-0 Pueden usarse diferentes herramientas ofimáticas.

        .row(titulo="Paso 2")
          .col-md-5
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/tema1/img32.png', alt='Texto que describa la imagen')

          .col-md-7.mb-4.mb-md-0
            p #[b Elaboración del informe:]

            ul.lista-ul--color.margen-ul
                li 
                  i.fas.fa-check
                  p.mb-0 Tener la información necesaria para la elaboración del informe.

                li 
                  i.fas.fa-check
                  p.mb-0 Esto incluye la planificación, el presupuesto, facturas, contratos, encuestas, etc.

        .row(titulo="Paso 3")
          .col-md-5
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/tema1/img33.png', alt='Texto que describa la imagen')

          .col-md-7.mb-4.mb-md-0
            p #[b Información clave:]

            ul.lista-ul--color.margen-ul
                li 
                  i.fas.fa-check
                  p.mb-0 Utilizar solo información clave.

                li 
                  i.fas.fa-check
                  p.mb-0 Elegir algunos de los momentos más representativos del evento y describirlos al detalle. Una buena idea es considerar tres puntos positivos, y quizás, tres que causaron sorpresa.

        .row(titulo="Paso 4")
          .col-md-5
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/tema1/img34.png', alt='Texto que describa la imagen')

          .col-md-7.mb-4.mb-md-0
            p #[b Ayudas visuales:]

            ul.lista-ul--color.margen-ul
                li 
                  i.fas.fa-check
                  p.mb-0 Incluir ayudas visuales.

                li 
                  i.fas.fa-check
                  p.mb-0 Uso de videos, fotos o audios.

        .row(titulo="Paso 5")
          .col-md-5
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/tema1/img35.png', alt='Texto que describa la imagen')

          .col-md-7.mb-4.mb-md-0
            p #[b Documentar la publicidad]

            ul.lista-ul--color.margen-ul
                li 
                  i.fas.fa-check
                  p.mb-0 Documentar, tanto la publicidad como la cobertura mediática.

                li 
                  i.fas.fa-check
                  p.mb-0 Rastrear en medios la estrategia de comunicación planteada.

        .row(titulo="Paso 6")
          .col-md-5
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/tema1/img36.png', alt='Texto que describa la imagen')

          .col-md-7.mb-4.mb-md-0
            p #[b Objetivo propuesto]

            ul.lista-ul--color.margen-ul
                li 
                  i.fas.fa-check
                  p.mb-0 Indicar el objetivo propuesto.

                li 
                  i.fas.fa-check
                  p.mb-0 Determinar si el objetivo se alcanzó o no.

        .row(titulo="Paso 7")
          .col-md-5
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/tema1/img37.png', alt='Texto que describa la imagen')

          .col-md-7.mb-4.mb-md-0
            p #[b Información financiera]

            ul.lista-ul--color.margen-ul
                li 
                  i.fas.fa-check
                  p.mb-0 Incluir una comparación de los gastos presupuestados y los gastos reales, así como indicar los puntos positivos y las áreas en las que se debe mejorar. 


        .row(titulo="Paso 8")
          .col-md-5
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/tema1/img38.png', alt='Texto que describa la imagen')

          .col-md-7.mb-4.mb-md-0
            p #[b Estadísticas]

            ul.lista-ul--color.margen-ul
                li 
                  i.fas.fa-check
                  p.mb-0 Incluir estadísticas que sean relevantes para los lectores, como el número de visitantes, el valor de compras, el ingreso de vehículos, etc.

        .row(titulo="Paso 9")
          .col-md-5
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/tema1/img39.png', alt='Texto que describa la imagen')

          .col-md-7.mb-4.mb-md-0
            p #[b Mejoras]

            ul.lista-ul--color.margen-ul
                li 
                  i.fas.fa-check
                  p.mb-0 Aportar mejoras. 

                li 
                  i.fas.fa-check
                  p.mb-0 Incluir en las conclusiones los aspectos a mejorar.


    .row.justify-content-center.align-items-center.mb-5.mt-5
      .col-lg-10
        .cajonAmarillo.bgr-tarjeta-tema1.p-4
           p Concluyendo, el informe final recopila todo lo transcurrido en la ejecución del evento, por lo que requiere de unos insumos para su elaboración. De igual forma, debe presentar los datos más relevantes de manera clara para la organización.



</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
