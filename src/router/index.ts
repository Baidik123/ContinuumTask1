// import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

// const router = createRouter({
//   history: createWebHistory(import.meta.env.BASE_URL),
//   routes: [
//     {
//       path: '/',
//       name: 'home',
//       component: HomeView,
//     },
//     {
//       path: '/about',
//       name: 'about',
//       // route level code-splitting
//       // this generates a separate chunk (About.[hash].js) for this route
//       // which is lazy-loaded when the route is visited.
//       component: () => import('../views/AboutView.vue'),
//     },
//   ],
// })

import { createRouter, createWebHistory } from 'vue-router'
import SetupView from '@/views/SetupView.vue'
import ImportView from '@/views/ImportView.vue'
import CoreDataView from '@/views/CoreDataView.vue'
import EstimateView from '@/views/EstimateView.vue'
import ExportView from '@/views/ExportView.vue'
import Model3DView from '@/views/Model3dView.vue'
import ScheduleView from '@/views/ScheduleView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
   {path: '/', name: 'setup', component: SetupView},
   {path: '/import', name: 'import', component: ImportView},  
   {path: '/estimate', name: 'estimate', component: EstimateView},
   {path: '/model3d', name: 'model3d', component: Model3DView},
   {path: '/schedule', name: 'schedule', component: ScheduleView},
   {path: '/coredata', name: 'coredata', component: CoreDataView},
   {path: '/export', name: 'export', component: ExportView},

  ],
})

export default router
