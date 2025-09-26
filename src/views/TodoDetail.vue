<script setup lang="ts">
import { ref, onMounted } from "vue"
import { useRoute, useRouter } from "vue-router"
import { supabase } from "../lib/supabase"

const route = useRoute()
const router = useRouter()

const todo = ref<any>(null)
const loading = ref(true)
const errorMsg = ref("")

onMounted(async () => {
  const id = route.params.id as string

  const { data, error } = await supabase
    .from("todos")
    .select("*")
    .eq("id", id)
    .single()

  if (error) {
    errorMsg.value = error.message
  } else {
    todo.value = data
  }

  loading.value = false
})

async function goBack() {
  router.push("/todos")
}
</script>

<template>
  <div class="max-w-xl mx-auto p-6">
    <button
      @click="goBack"
      class="mb-4 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
    >
      ← Back
    </button>

    <div v-if="loading">Loading...</div>
    <div v-else-if="errorMsg" class="text-red-600">{{ errorMsg }}</div>
    <div v-else-if="todo" class="bg-white shadow rounded p-6">
      <h2 class="text-2xl font-bold mb-2">{{ todo.title }}</h2>
      <p class="mb-2">ID: {{ todo.id }}</p>
      <p class="mb-2">
        Status:
        <span
          :class="todo.completed ? 'text-green-600 font-semibold' : 'text-red-600 font-semibold'"
        >
          {{ todo.completed ? "Completed" : "Not completed" }}
        </span>
      </p>
      <p class="text-gray-600">User ID: {{ todo.user_id }}</p>
    </div>
  </div>
</template>
