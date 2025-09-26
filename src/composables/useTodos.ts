import { ref, onMounted } from 'vue'
import { supabase } from '../lib/supabase'

export function useTodos() {
  const todos = ref<any[]>([])
  const loading = ref(true)

  async function fetchTodos() {
    loading.value = true
    const { data, error } = await supabase
      .from('todos')
      .select('*')
      .order('inserted_at', { ascending: false })
    if (!error) todos.value = data || []
    loading.value = false
  }

async function addTodo(title: string, user_id: string, completed = false) {
  const { data, error } = await supabase
    .from('todos')
    .insert([{ title, user_id, completed }])

  if (error) throw error
  return data
}


  async function toggleTodo(id: string, completed: boolean) {
    await supabase.from('todos').update({ completed }).eq('id', id)
    fetchTodos()
  }

  async function deleteTodo(id: string) {
    await supabase.from('todos').delete().eq('id', id)
    fetchTodos()
  }

  onMounted(fetchTodos)

  return { todos, loading, fetchTodos, addTodo, toggleTodo, deleteTodo }
}
