
const routes = [
  {
    path: '/',
    component: () => import('layouts/LoginLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },
  {
    path: '/admin',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/AdminMainPage.vue') }
    ]
  },
  {
    path: '/admin/operador/alta',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/AdminAltaOperadorPage.vue') }
    ]
  },
  {
    path: '/admin/profesional/alta',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/AdminAltaProfesionalPage.vue') }
    ]
  },
  {
    path: '/admin/operador/ok',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/AdminAltaOKPage.vue') }
    ]
  },
  {
    path: '/admin/profesional/ok',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/AdminAltaOKPage.vue') }
    ]
  },
  {
    path: '/operador',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/OperadorMainPage.vue') }
    ]
  },
  {
    path: '/operador/visita/alta',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/OperadorGenerarVisitaPage.vue') }
    ]
  },
  {
    path: '/operador/visita/ok',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/AdminAltaOKPage.vue') }
    ]
  },
  {
    path: '/profesional',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/ProfesionalMainPage.vue') }
    ]
  },
  {
    path: '/profesional/visitas/listar',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/ProfesionalListarVisitas.vue') }
    ]
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
