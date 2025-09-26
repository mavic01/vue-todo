
import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Todos from '../views/Todos.vue'
import TodoDetail from "../views/TodoDetail.vue"
import { supabase } from '../lib/supabase'
import NotFound from '../views/NotFound.vue'

const routes = [
  { path: "/", component: Login },
  { path: "/todos", component: Todos },
  { path: "/todos/:id", component: TodoDetail }, 
  { path: "/:pathMatch(.*)*", component: NotFound }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

// Navigation Guard: check auth before going to a protected route
router.beforeEach(async (to) => {
  const { data } = await supabase.auth.getSession()
  const user = data.session?.user

  if (to.meta.requiresAuth && !user) {
    return { path: '/' }  
  }

  if (to.path === '/' && user) {
    return { path: '/todos' } 
  }
})

export default router
