import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import SimpleView from '../views/SimpleView.vue'
import FormkitView from '../views/FormkitView.vue'
import AuthView from '../views/AuthView.vue'

import MaisonEditView from '../views/maisons/edit/[[id]].vue' // Importez la vue MaisonEditView
import IndexView from '../views/maisons/IndexView.vue' // Importez la vue IndexView

import QuartierEditView from '../views/quartiers/edit/[[id]].vue' 
import QuartierIndexView from '../views/quartiers/IndexView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/',      name: 'home',       component: HomeView},
    { path: '/about', name: 'about',      component: AboutView},
    { path: '/simple', name: 'simple',    component: SimpleView},
    { path: '/formkit', name: 'formkit',  component: FormkitView},
    { path: '/maisons/edit/:id?', name: 'maisons-edit', component: MaisonEditView }, // Ajoutez la route MaisonEditView
    { path: '/maisons', name: 'maisons-index', component: IndexView }, 
    { path: '/quartiers/edit/:id?', name: 'quartiers-edit', component: QuartierEditView },
    { path: '/quartiers', name: 'quartiers-index', component: QuartierIndexView },
    { path: '/auth', name: 'auth', component: AuthView}
  ]
})

export default router
