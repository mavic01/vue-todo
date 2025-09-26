<script setup lang="ts">
import { ref } from 'vue'
import { supabase } from '../lib/supabase'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')
const errorMsg = ref('')
const router = useRouter()

// Handle login
async function handleLogin() {
  errorMsg.value = ''
  const { error } = await supabase.auth.signInWithPassword({
    email: email.value,
    password: password.value,
  })

  if (error) {
    errorMsg.value = error.message
    return
  }

  // redirect after successful login
  router.push('/todos')
}

// Handle signup
async function handleSignup() {
  errorMsg.value = ''
  const { error } = await supabase.auth.signUp({
    email: email.value,
    password: password.value,
  })

  if (error) {
    errorMsg.value = error.message
    return
  }

  // redirect after successful signup
  router.push('/todos')
}
</script>

<template>
  <main class="min-h-screen flex items-center justify-center bg-gray-100 px-4">
    <div class="w-full max-w-md bg-white shadow-lg rounded-xl p-8">
      <h1 class="text-2xl font-bold text-center text-teal-600 mb-6">
        Welcome to Your Task Manager
      </h1>

      <!-- error message -->
      <div v-if="errorMsg" class="bg-red-100 text-red-600 p-3 mb-4 rounded">
        {{ errorMsg }}
      </div>

      <!-- login form -->
      <form class="space-y-4" @submit.prevent="handleLogin">
        <input
          v-model="email"
          type="email"
          placeholder="Email"
          class="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-teal-500"
          required
        />
        <input
          v-model="password"
          type="password"
          placeholder="Password"
          class="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-teal-500"
          required
        />

        <button
          type="submit"
          class="w-full bg-teal-600 text-white py-2 rounded-md hover:bg-teal-700 transition cursor-pointer"
        >
          Login
        </button>
      </form>

      <!-- signup -->
      <button
        @click="handleSignup"
        class="w-full mt-4 bg-gray-200 text-gray-700 py-2 rounded-md hover:bg-gray-300 transition cursor-pointer"
      >
        Sign Up
      </button>
    </div>
  </main>
</template>
