<script setup lang="ts">
import { ref, onMounted } from "vue"
import { useRouter } from "vue-router"
import { useTodos } from "../composables/useTodos"
import { supabase } from "../lib/supabase"

const router = useRouter()

// composable
const { todos, loading, addTodo, toggleTodo, deleteTodo } = useTodos()

// new todo modal
const showModal = ref(false)
const newTitle = ref("")
const newCompleted = ref(false)

// user
const user = ref<any>(null)
onMounted(async () => {
  const { data } = await supabase.auth.getUser()
  if (!data.user) {
    router.push("/") // redirect if not logged in
  } else {
    user.value = data.user
  }
})

async function handleAdd() {
  if (!newTitle.value || !user.value) return
  await addTodo(newTitle.value, user.value.id, newCompleted.value)
  newTitle.value = ""
  newCompleted.value = false
  showModal.value = false
}

async function handleLogout() {
  await supabase.auth.signOut()
  router.push("/")
}
</script>

<template>
  <div class="min-h-screen bg-gray-100">
    <!-- Main content -->
    <main class="max-w-xl mx-auto p-6">
      <div class="flex justify-between items-center mb-6">
        <h2 class="text-2xl font-semibold">Todo List</h2>
        <button
          @click="showModal = true"
          class="bg-teal-600 cursor-pointer font-semibold text-white px-4 py-2 rounded-md hover:bg-teal-700"
        >
          + Add Todo
        </button>
        <button
          @click="handleLogout"
          class="bg-red-500 cursor-pointer font-semibold text-white px-4 py-2 rounded-md hover:bg-red-700"
        >
          Logout
        </button>
      </div>

      <!-- Loading -->
      <div v-if="loading" class="text-gray-500">Loading...</div>

      <!-- Todo list -->
      <ul v-else class="space-y-3">
        <li
          v-for="todo in todos"
          :key="todo.id"
          class="flex items-center justify-between bg-white shadow p-3 rounded"
        >
          <div class="flex items-center gap-3">
            <input
              type="checkbox"
              :checked="todo.completed"
              @change="toggleTodo(todo.id, !todo.completed)"
              class="h-4 w-4 text-teal-600"
            />
            <span :class="todo.completed ? 'line-through text-gray-500' : ''">
              {{ todo.title }}
            </span>
          </div>
          <div class="flex gap-3">
            <router-link
              :to="`/todos/${todo.id}`"
              class="text-teal-600 hover:underline"
            >
              View
            </router-link>
            <button
              @click="deleteTodo(todo.id)"
              class="text-red-600 hover:underline"
            >
              Delete
            </button>
          </div>
        </li>
      </ul>
    </main>

    <!-- Modal -->
    <div
      v-if="showModal"
      class="fixed inset-0 flex items-center justify-center bg-white/20 backdrop-blur-xs"
    >
      <div class="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        <h2 class="text-xl font-bold mb-4">Add New Todo</h2>

        <label class="block mb-3">
          <span class="text-gray-700">Title</span>
          <input
            v-model="newTitle"
            type="text"
            placeholder="Enter todo title"
            class="w-full mt-1 border rounded-md px-3 py-2 focus:ring focus:ring-teal-300"
          />
        </label>

        <label class="flex items-center gap-2 mb-4">
          <input
            type="checkbox"
            v-model="newCompleted"
            class="h-4 w-4 text-teal-600"
          />
          <span class="text-gray-700">Completed</span>
        </label>

        <div class="flex justify-end gap-3">
          <button
            @click="showModal = false"
            class="px-4 py-2 rounded-md border border-gray-300 hover:bg-gray-100 cursor-pointer"
          >
            Cancel
          </button>
          <button
            @click="handleAdd"
            class="bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700 cursor-pointer"
          >
            Add Todo
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
