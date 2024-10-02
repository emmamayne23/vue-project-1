<script setup>
import { defineProps } from 'vue'
defineProps({
  message: String
})
</script>

<template>
  <div class="bg-blue-500 grid place-items-center w-full h-72 md:h-80 lg:h-96">
    <h1 class="text-white text-7xl font-bold">{{ message }}</h1>
  </div>
</template>
