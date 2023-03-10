export default {
  global: {
    componenteFormativo: 'Cierre de eventos',
    descripcionCurso:
      'En este módulo recibirá información relevante para realizar correctamente un cierre de eventos con las características requeridas por la organización; conocerá las herramientas esenciales para el cierre, como son las bases de datos y los informes de cierre que contengan criterios de evaluación que apunten a los objetivos propuestos para el evento, además de la elaboración de los protocolos para el cierre de eventos.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Cierre de eventos ',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Protocolos de cierre de eventos',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Ejecución de eventos',
      referencia:
        'Blog Flousbury Café. (2021, enero 15) 2021, <em>el año de los eventos y las celebraciones. [Web log bost] Blog Flousbury Café</em>',
      tipo: 'Blog',
      link:
        'https://eventosempresa.fosburycafe.es/experienciaseventosbarcelona/2021-el-ano-de-los-eventos-y-las-celebraciones/',
    },
    {
      tema: 'Turismo de reuniones y eventos',
      referencia:
        'Perlaza Lopera, C., Correa Cortes, J. S. & Tamayo Galeano, C. (2015). Turismo de reuniones y eventos. <em>Revista Intersección: Eventos, turismo, gastronomía y moda</em>, (3) p. 38-53.',
      tipo: 'Artículo',
      link: 'https://www.academia.edu/44441344/Turismo_de_reuniones_y_eventos',
    },
    {
      tema: 'La evaluación de eventos mediante encuestas',
      referencia:
        'InEventos. (2022) <em>La Evaluación de Eventos mediante Encuestas</em>. [Web log bost] <em>Blog inEventos</em>. ',
      tipo: 'Blog',
      link:
        'https://www.ineventos.co/blog/encuestas-para-evaluacion-de-eventos.html',
    },
    {
      tema:
        'El turismo de eventos y reuniones en destinos turísticos maduros: un pilar para la reconversión del producto turístico de Puerto de la Cruz (Tenerife)',
      referencia:
        'Pérez Díaz, C., & Páez Escobar, Á. (2014). El turismo de eventos y reuniones en destinos turísticos maduros: Un pilar para la reconversión del producto turístico de Puerto de la Cruz (Tenerife). <em>Investigaciones Turísticas</em>, (7), p. 102-135.',
      tipo: 'Artículo',
      link:
        'https://investigacionesturisticas.ua.es/article/view/2014-n7-el-turismo-de-eventos-y-reuniones-en-destinos-turisticos-maduros-un-pilar-para-la-reconversion-del-producto-turistico-de-puerto-de-la-cruz-tenerife',
    },
  ],
  glosario: [
    {
      termino: 'Encuesta',
      significado:
        'Es una técnica que se lleva a cabo mediante la aplicación de un cuestionario a una muestra de personas.  Proporciona información sobre las opiniones, actitudes y comportamientos de los ciudadanos.',
    },
    {
      termino: 'Redundancia',
      significado:
        'Es el uso reiterado e innecesario de una palabra o expresión.',
    },
    {
      termino: 'Actitud',
      significado:
        'Es la condición que dirige el comportamiento del hombre en cualquier situación de la vida. Mediante esta se refleja la intención y el propósito que se tiene al actuar.',
    },
    {
      termino: 'Aptitud',
      significado:
        'Es la habilidad o postura que posee una persona o cosa para efectuar una determinada actividad. La capacidad y destreza para el desarrollo y buen desempeño de un negocio, industria, arte, deporte, entre otros.',
    },
    {
      termino: 'Dato',
      significado:
        'Es la representación de una variable que puede ser cuantitativa o cualitativa, indicando un valor que se le asigna a las cosas. Se representa a través de una secuencia de símbolos, números o letras.',
    },
    {
      termino: '<em>Software</em>',
      significado:
        'Es un término informático que hace referencia a un programa o conjunto de programas de cómputo, así como datos, procedimientos y pautas que permiten realizar distintas tareas en un sistema de este tipo.',
    },
    {
      termino: 'Proyección',
      significado:
        'Es una estimación acerca de la potencial situación de una empresa o del progreso de un plan.',
    },
    {
      termino: 'Ofimática',
      significado:
        'Es la combinación de <em>hardware</em> y <em>software</em> para elaborar, automatizar y registrar de forma digital la información que necesita una oficina para llevar a cabo los procesos de manera correcta.',
    },
    {
      termino: 'Estrategia',
      significado:
        'Es un procedimiento dispuesto para la toma de decisiones frente a un determinado escenario, buscando alcanzar uno o varios objetivos previamente definidos.',
    },
    {
      termino: 'Evaluación',
      significado:
        'Es un proceso de análisis, medición y valoración que está destinado a explicar cómo funciona el objeto de estudio, llegando a resultados y conclusiones basados en evidencia.',
    },
  ],
  referencias: [
    {
      referencia:
        'Cardona, C. y Restrepo, A. (s.f.). <em>Herramientas de control. Lista de chequeo</em>. Puntos de Encuentro.',
      link: 'http://puntosdeencuentro.weebly.com',
    },
    {
      referencia:
        'Pérez Porto, J. & Gardey, A. (2008). <em>Definición de supervisión - Qué es, significado y concepto</em>. Definición.',
      link: 'https://definicion.de/supervision/',
    },
    {
      referencia:
        'Estás contratado. (2022, 13 de octubre). <em>Cuáles son las funciones de un supervisor</em>. [Web log bost] Estás contratado Blog.',
      link:
        'https://www.estascontratado.com/blog/funciones-de-un-supervisor.aspx',
    },
    {
      referencia:
        'Granero, M. (2022). <em>Qué es una base de datos y para qué sirve</em>. YESWELAB.',
      link:
        'https://yeswelab.com/blogs/citizen-developer/que-es-una-base-de-datos-y-para-que-sirve',
    },
    {
      referencia:
        'Aurora (2022). <em>Para qué sirve una base de datos</em>. ID boot camps',
      link:
        'https://iddigitalschool.com/bootcamps/para-que-sirve-una-base-de-datos/',
    },
    {
      referencia:
        'Servicio Nacional de Aprendizaje -SENA. (2018). <em>Informe final para la prestación del servicio.</em>',
      link: '',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
