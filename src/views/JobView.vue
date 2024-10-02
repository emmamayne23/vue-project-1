<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import jobData from '@/jobs.json'

const route = useRoute()
const job = ref(null)

onMounted(() => {
  const jobId = route.params.id
  job.value = jobData.find((j) => j.id === parseInt(jobId)) // Find the job by the id
})
</script>

<template>
  <div
    class="bg-blue-50 grid place-items-center gap-5 p-4 md:grid md:grid-cols-70/30 md:grid-cols-2"
  >
    <div class="grid place-items-center gap-5">
      <div class="grid place-items-center bg-white w-11/12 shadow-xl rounded-lg py-5">
        <p class="text-gray-400">{{ job?.type }}</p>
        <h2 class="text-4xl font-semibold my-3">{{ job?.title }}</h2>
        <p class="text-green-500"><i class="fas fa-location-dot"></i>&nbsp;{{ job?.location }}</p>
      </div>
      <div class="p-6 bg-white w-11/12 rounded-lg shadow-xl">
        <h2 class="font-bold text-green-800 text-lg">Job Description</h2>
        <p class="my-3">
          {{ job?.description }}
        </p>
        <h2 class="my-2 font-bold text-lg text-green-800">Salary</h2>
        <p>{{ job?.salary }} / Year</p>
      </div>
    </div>
    <div class="grid place-items-center gap-5 mt-7">
      <div class="p-5 bg-white rounded-lg w-11/12">
        <h1 class="text-xl font-medium my-3">Company info</h1>
        <h2 class="text-2xl my-2">Newtek Solutions</h2>
        <p>
          {{ job?.detailedDescription.moreDetails }}
        </p>
        <hr class="my-3" />
        <h2>Conatct Email:</h2>
        <p class="bg-green-300 pl-3 py-1 rounded my-2 font-semibold">
          {{ job?.detailedDescription.email }}
        </p>
        <h2>Contact Phone:</h2>
        <p class="bg-green-300 pl-3 py-1 rounded my-2 font-semibold">
          {{ job?.detailedDescription.telephone }}
        </p>
      </div>
      <div class="w-full grid place-items-center">
        <button
          class="bg-blue-500 w-4/5 text-white py-2 rounded-xl max-w-lg duration-300 hover:bg-blue-900"
        >
          Apply
        </button>
      </div>
    </div>
  </div>
</template>
