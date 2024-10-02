<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const email = ref('')
const username = ref('')
const password = ref('')
const passwordConfirmation = ref('')

//reactive state for the errors
const errors = ref({
  email: '',
  username: '',
  password: '',
  passwordConfirmation: ''
})

const validateForm = () => {
  // Reset the values
  errors.value = {
    email: '',
    username: '',
    password: '',
    passwordConfirmation: ''
  }
  if (!/\S+@\S+\.\S+/.test(email.value)) {
    errors.value.email = 'Email is not valid. !!!!!'
  }

  if (username.value < 3) {
    errors.value.username = 'Username must be at least 3 characters long'
  }

  if (password.value.length < 6) {
    errors.value.password = 'Password must be at least 6 characters long'
  }

  if (password.value !== passwordConfirmation.value) {
    errors.value.passwordConfirmation = 'Passwords do not match !!!'
  }

  // Check if there are no errors
  return Object.values(errors.value).every((error) => error === '')
}

const handleSubmit = () => {
  if (validateForm()) {
    router.push({ path: '/' })
    // router.push({ path: 'router.currentRoute.value.path' })
  }
}
</script>

<template>
  <div class="signup-form grid place-items-center h-auto">
    <form @submit.prevent="handleSubmit" class="w-96 py-10 px-6 shadow-lg bg-slate-700 rounded-md">
      <h2 class="text-center text-white mb-4 text-2xl font-medium">Sign Up Here</h2>
      <div class="inputs flex flex-col gap-2">
        <input
          type="text"
          v-model="email"
          placeholder="Email"
          class="focus:outline-none pl-2 py-1 rounded-md"
          required
        />
        <p v-if="errors.email" class="text-red-600">{{ errors.email }}</p>
        <input
          type="text"
          v-model="username"
          placeholder="Username"
          class="focus:outline-none pl-2 py-1 rounded-md"
          required
        />
        <p v-if="errors.username">{{ errors.username }}</p>
        <input
          type="text"
          v-model="password"
          placeholder="Password"
          class="focus:outline-none pl-2 py-1 rounded-md"
          required
        />
        <p v-if="errors.password" class="text-red-500">{{ errors.password }}</p>
        <input
          type="text"
          v-model="passwordConfirmation"
          placeholder="Password confirmation"
          class="focus:outline-none pl-2 py-1 rounded-md"
          required
        />
        <p v-if="errors.passwordConfirmation" class="text-red-500">
          {{ errors.passwordConfirmation }}
        </p>
        <button
          type="submit"
          class="bg-slate-600 text-white py-2 hover:bg-slate-800 duration-300 rounded"
        >
          Sign Up
        </button>
        <a href="" class="text-center underline text-white">have an account? Sign in</a>
        <p class="text-white">
          By registring you accept the
          <span class="underline cursor-pointer">Terms of Service</span> and acknowledge our
          <span class="underline cursor-pointer">privacy Policy</span>
        </p>
      </div>
    </form>
  </div>
</template>

<style lang="scss" scoped>
.signup-form {
  height: 88vh;
}

form {
  .inputs {
    input {
      border: 1px solid gray;
    }
  }
}
</style>
