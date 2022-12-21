import { Article } from '@/src/interface/article.interface';

type Item = {
  name: string;
  items: {
    name: string;
    slug: string;
    description?: string;
    isDisabled?: boolean;
  }[];
};

export const demos: Item[] = [
  {
    name: 'Layouts',
    items: [
      {
        name: 'Nested Layouts',
        slug: 'layouts',
        description: 'Create UI that is shared across routes',
      },
      {
        name: 'Grouped Layouts',
        slug: 'route-groups',
        description: 'Organize routes without affecting URL paths',
      },

      {
        name: 'Streaming with Suspense',
        slug: 'streaming',
        description:
          'Streaming data fetching from the server with React Suspense',
      },
      {
        name: 'Root Layouts',
        slug: 'root-layouts',
        description: 'Create top-level layouts that apply to all routes',
        isDisabled: true,
      },
    ],
  },
  {
    name: 'File Conventions',
    items: [
      {
        name: 'Loading',
        slug: 'loading',
        description:
          'Create meaningful loading UI for specific parts of an app',
      },
      {
        name: 'Error',
        slug: 'error-handling',
        description: 'Create error UI for specific parts of an app',
      },
    ],
  },
  {
    name: 'Components',
    items: [
      {
        name: 'Hooks',
        slug: 'hooks',
        description:
          'Preview the hooks available for Client and Server Components',
      },
      {
        name: 'Client Context',
        slug: 'context',
        description:
          'Pass context between Client Components that cross Server/Client Component boundary',
      },
    ],
  },
  {
    name: 'Styling',
    items: [
      {
        name: 'CSS and CSS-in-JS',
        slug: 'styling',
        description: 'Preview the supported styling solutions',
      },
    ],
  },
];

export const articles = [
  {
    title: 'Qué es una página web, para qué sirve y tipos de web',
    slug: 'ques-es-una-pagina-web',
    content: `
  Una página web es un conjunto de archivos que se encuentran en Internet y que pueden ser accedidos a través de un navegador web. Estas páginas pueden incluir texto, imágenes, videos, formularios y otros elementos interactivos.

  Las páginas web sirven principalmente para proporcionar información y comunicación a través de Internet. Pueden utilizarse para promocionar empresas o servicios, compartir conocimientos o recursos útiles, o simplemente como una forma de comunicación entre personas.
    
  Hay varios tipos de páginas web, dependiendo de su función y de cómo están diseñadas:
    
  - Páginas web institucionales: son páginas web que presentan la información de una empresa, organización o institución. Suelen incluir información sobre la historia, productos o servicios, y contacto de la empresa.
    
  - Blogs: son páginas web que consisten en una secuencia de entradas o artículos escritos por uno o varios autores. Los blogs suelen cubrir una amplia gama de temas y son una forma popular de compartir conocimientos o opiniones.
    
  - Páginas web de e-commerce: son páginas web que permiten a los usuarios comprar productos o servicios en línea. Suelen incluir un catálogo de productos, carritos de compra y opciones de pago.
    
  - Páginas web de redes sociales: son páginas web que permiten a los usuarios crear perfiles y conectarse con amigos y seguidores. También suelen incluir funcionalidades para compartir contenido, mensajes y actualizaciones.
    
  - Páginas web de portafolios: son páginas web que muestran el trabajo o logros de una persona o empresa. Suelen incluir ejemplos de proyectos o productos realizados y pueden ser utilizadas para promocionar sus servicios o para demostrar su expertise.
    
  En resumen, las páginas web son conjuntos de archivos que se encuentran en Internet y que pueden ser accedidos a través de un navegador web. Sirven para proporcionar información y comunicación y existen varios tipos de páginas web, dependiendo de su función y diseño.
    `,
  },
];
