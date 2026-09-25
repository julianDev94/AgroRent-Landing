export const nav = [
  { id: 'solucion', label: 'La plataforma' },
  { id: 'identidad', label: 'Identidad' },
  { id: 'foda', label: 'Análisis FODA' },
  { id: 'equipo', label: 'Equipo' },
]

export const hero = {
  badge: 'Plataforma de alquiler de maquinaria agrícola — NOA',
  titleLead: 'La maquinaria que necesitás,',
  titleAccent: 'a un clic de distancia',
  subtitle:
    'AgroRent conecta a productores con dueños de equipos ociosos en un solo mercado. Contratos digitales, certificación técnica, pagos integrados y logística resuelta.',
  primaryCta: 'Ver cómo funciona',
  secondaryCta: 'Conocer la empresa',
  stats: [
    { value: '100', suffix: '+', label: 'Máquinas certificadas en el catálogo' },
    { value: '90', suffix: '', label: 'Contratos en la primera campaña de cosecha' },
    { value: '4.2', suffix: '/5', label: 'Satisfacción objetivo del sistema de calificación' },
    { value: '50', suffix: ' km', label: 'Radio de cercanía objetivo en cada emparejamiento' },
  ],
}

export const solution = {
  eyebrow: 'La plataforma',
  title: 'Todo el ciclo del alquiler, en un solo lugar',
  lead:
    'Reúnimos en un mismo mercado la oferta dispersa de contratistas y dueños de maquinaria, y sumamos las capas que el acuerdo informal no resuelve: certificación, contrato legal y pago.',
  items: [
    {
      icon: 'layers',
      title: 'Centralización de la oferta',
      body:
        'Un único punto de encuentro entre productores y dueños de maquinaria con equipos ociosos, con precios visibles y comparables en lugar del “boca en boca”.',
    },
    {
      icon: 'shield',
      title: 'Certificación técnica',
      body:
        'Alianzas con concesionarias de la región verifican el estado y el mantenimiento de cada máquina publicada antes de entrar al catálogo.',
    },
    {
      icon: 'file',
      title: 'Contrato digital',
      body:
        'Un modelo contractual con protección legal ante roturas, demoras climáticas o incumplimiento de pago, con verificación conjunta del equipo en la entrega y el retiro.',
    },
    {
      icon: 'card',
      title: 'Pago integrado',
      body:
        'Cheque electrónico o pagos diferidos, con cálculo de impuestos y facturación automática según la condición impositiva de cada cliente.',
    },
    {
      icon: 'pin',
      title: 'Búsqueda por cercanía',
      body:
        'El algoritmo prioriza los equipos más cercanos al lote y el arrendador publica su hoja de ruta, con descuentos por distancia para recomendar la operación local.',
    },
    {
      icon: 'wrench',
      title: 'Asistencia en campo',
      body:
        'Línea de soporte para consultas técnicas y de facturación, más asistencia mecánica ante fallas, para que la máquina no se detenga en plena cosecha.',
    },
  ],
}

export const identity = {
  eyebrow: 'Identidad corporativa',
  title: 'Misión, visión y objetivo general',
  items: [
    {
      tag: 'Misión',
      tone: 'green',
      body:
        'Transformar la logística agroindustrial mediante soluciones tecnológicas que simplifiquen y aseguren el alquiler de maquinaria, garantizando confianza, agilidad y rentabilidad para todos los actores de la cadena productiva.',
    },
    {
      tag: 'Visión',
      tone: 'orange',
      body:
        'Convertirnos en el ecosistema digital estándar y más seguro para la gestión de activos agrícolas, donde cada productor encuentre la tecnología que necesita a un solo clic de distancia.',
    },
    {
      tag: 'Objetivo general',
      tone: 'slate',
      body:
        'Consolidar a AgroRent como el ecosistema digital de referencia del NOA para el alquiler seguro de maquinaria agrícola, conectando a productores y arrendadores mediante tecnología, contratos digitales y pagos integrados que reduzcan los costos, los tiempos y los riesgos de la operación.',
    },
  ],
}

export const foda = {
  eyebrow: 'Análisis de mercado',
  title: 'Contexto competitivo: análisis FODA',
  lead:
    'Definimos el tipo de desarrollo elegido y analizamos la competencia actual y potencial del servicio de alquiler de maquinaria agrícola en la región del NOA.',
  quadrants: [
    {
      key: 'fortalezas',
      tone: 'green',
      label: 'Fortalezas',
      caption: 'Interno · positivo',
      items: [
        {
          title: 'Eficiencia de costos',
          body: 'Permite a pequeños y medianos productores acceder a tecnología avanzada sin grandes inversiones de capital.',
        },
        {
          title: 'Centralización de la oferta',
          body: 'Reúne en un solo lugar a contratistas y dueños de maquinaria con equipos ociosos, aumentando la transparencia de precios.',
        },
        {
          title: 'Escalabilidad',
          body: 'Al ser una plataforma digital, el modelo puede expandirse rápidamente a otras provincias del NOA.',
        },
        {
          title: 'Datos de valor',
          body: 'Capacidad de recolectar datos sobre demanda, precios promedio y zonas de mayor actividad, lo cual es monetizable.',
        },
      ],
    },
    {
      key: 'debilidades',
      tone: 'red',
      label: 'Debilidades',
      caption: 'Interno · negativo',
      items: [
        {
          title: 'Complejidad logística',
          body: 'El alquiler de maquinaria pesada implica transporte, seguros específicos y mantenimiento que la plataforma debe coordinar o supervisar.',
        },
        {
          title: 'Brecha de confianza',
          body: 'Resistencia inicial de los dueños de equipos a prestar maquinaria costosa a terceros a través de una aplicación.',
        },
        {
          title: 'Dependencia de la conectividad',
          body: 'Muchas zonas rurales de Tucumán tienen baja señal, lo que obliga a que la plataforma tenga funcionalidades offline potentes.',
        },
      ],
    },
    {
      key: 'oportunidades',
      tone: 'orange',
      label: 'Oportunidades',
      caption: 'Externo · positivo',
      items: [
        {
          title: 'Diversidad de cultivos en Tucumán',
          body: 'La provincia tiene ventanas de cosecha escalonadas, lo que permite una demanda de maquinaria durante casi todo el año.',
        },
        {
          title: 'Optimización de capacidad instalada',
          body: 'Muchos dueños tienen equipos parados entre campañas; la plataforma les ofrece una fuente de ingresos extra.',
        },
        {
          title: 'Alianzas estratégicas',
          body: 'Posibilidad de aliarse con concesionarias locales para certificar el estado de las máquinas publicadas.',
        },
      ],
    },
    {
      key: 'amenazas',
      tone: 'slate',
      label: 'Amenazas',
      caption: 'Externo · negativo',
      items: [
        {
          title: 'Inestabilidad macroeconómica',
          body: 'La volatilidad del peso dificulta la fijación de precios a mediano plazo y afecta el costo de los repuestos importados.',
        },
        {
          title: 'Relaciones tradicionales',
          body: 'En Tucumán el sector agropecuario se basa mucho en el “boca en boca” y en relaciones personales de años.',
        },
        {
          title: 'Clima',
          body: 'Eventos extremos como sequías o inundaciones pueden paralizar la demanda de alquileres de forma repentina en toda la región.',
        },
      ],
    },
  ],
}

export const team = {
  eyebrow: 'Equipo de trabajo',
  title: 'Estudiantes de Administración de Sistemas de Información',
  lead:
    'AgroRent es un proyecto desarrollado por cuatro estudiantes de la carrera, en el marco del Trabajo Práctico N.º 1 sobre estructura organizacional y descripción de puestos.',
  members: [
    { name: 'Aballay, Cristian Julián', id: '48143' },
    { name: 'Ale, Nicolás Salomón', id: '43586' },
    { name: 'Bulacio, Fernanda Agustina', id: '40885' },
    { name: 'Mercado, Agostina', id: '57481' },
  ],
}

export const institution = {
  university: 'Universidad Tecnológica Nacional',
  faculty: 'Facultad Regional Tucumán',
  department: 'Departamento de Sistemas',
  course: 'Administración de Sistemas de Información — 4K3',
  assignment: 'Trabajo Práctico N.º 1 · Estructura Organizacional y Descripción de Puestos',
  teachers: ['Ing. Lucas Elio Cordero', 'Ing. Fernando Ugarte', 'Ing. Quiroga Hamoud'],
}
