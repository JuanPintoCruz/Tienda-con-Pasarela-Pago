export default [
  {
    title: 'Inicio',
    icon: { icon: 'tabler-home' },
    to: 'dashboards-inicio',
    action: 'ver',
    subject: ['admin', 'vendedor'],
  },

  // {
  //   title: 'Inicio',
  //   to: 'dashboards-inicio',
  // },
  {
    title: 'Ordenes o pedidos',
    to: 'dashboards-orders',
  },
  {
    title: 'Productos',
    to: 'dashboards-producto',
  },

  {
    title: 'Categorias',
    to: 'dashboards-categoria',
  },

  // {
  //     title: 'Productos',
  //     to: 'dashboards-producto',
  // },

  {
    title: 'Cerrar Sesion',

    // to: 'dashboards-producto',
  },

  // {
  //   title: 'Dashboards',
  //   icon: { icon: 'tabler-smart-home' },
  //   children: [
  //     {
  //       title: 'Analytics',
  //       to: 'dashboards-analytics',
  //     },
  //     {
  //       title: 'CRM',
  //       to: 'dashboards-crm',
  //     },
  //     {
  //       title: 'Ecommerce',
  //       to: 'dashboards-ecommerce',
  //     },
  //     {
  //       title: 'Academy',
  //       to: 'dashboards-academy',
  //     },
  //     {
  //       title: 'Logistics',
  //       to: 'dashboards-logistics',
  //     },
  //   ],
  //   badgeContent: '5',
  //   badgeClass: 'bg-error',
  // },
  // {
  //   title: 'Front Pages',
  //   icon: { icon: 'tabler-files' },
  //   children: [
  //     {
  //       title: 'Landing',
  //       to: 'front-pages-landing-page',
  //       target: '_blank',
  //     },
  //     {
  //       title: 'Pricing',
  //       to: 'front-pages-pricing',
  //       target: '_blank',
  //     },
  //     {
  //       title: 'Payment',
  //       to: 'front-pages-payment',
  //       target: '_blank',
  //     },
  //     {
  //       title: 'Checkout',
  //       to: 'front-pages-checkout',
  //       target: '_blank',
  //     },
  //     {
  //       title: 'Help Center',
  //       to: 'front-pages-help-center',
  //       target: '_blank',
  //     },
  //   ],
  // },
]
