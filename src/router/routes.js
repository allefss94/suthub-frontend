export const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/pages/Home')
  },
  {
    path: '/formulario',
    name: 'Form',
    component: () => import('@/pages/Form')
  },
  {
    path: '/paises',
    name: 'Countries',
    component: () => import('@/pages/Countries')
  },
  {
    path: '/regiao/:region',
    name: 'RegionCountries',
    component: () => import('@/pages/RegionCountries')
  },
  {
    path: '/language/:name',
    name: 'Language',
    component: () => import('@/pages/Languages')
  }
]
