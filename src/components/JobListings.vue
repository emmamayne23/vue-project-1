<script setup>
import { ref, defineProps, computed } from 'vue'
import jobData from '@/jobs.json'
import JobListing from './JobListing.vue'

defineProps({
  limit: Number,
  showButton: {
    type: Boolean,
    default: false
  },
  showSearchButton: {
    type: Boolean,
    default: false
  }
})

const jobs = ref(jobData)
const searchJob = ref('')

//the search query to filter the job search
const filteredJobs = computed(() => {
  if (!searchJob.value) {
    return jobs.value
  } else {
    return jobs.value.filter((job) =>
      job.title.toLowerCase().includes(searchJob.value.toLowerCase())
    )
  }
})
</script>

<template>
  <div v-if="showSearchButton" class="w-full bg-white grid place-items-center py-5">
    <input
      type="search"
      class="border w-32 focus:w-96 duration-300 focus:outline-none focus:ring rounded-md p-3"
      placeholder="search here..."
      v-model="searchJob"
    />
  </div>
  <div class="bg-blue-100 grid place-items-center">
    <h2 class="text-center text-green-600 font-bold text-2xl md:text-4xl p-5">Browse Jobs</h2>
    <div class="grid md:grid-cols-3">
      <JobListing
        v-for="job in filteredJobs.slice(0, limit || jobs.length)"
        :key="job.id"
        :job="job"
      />
    </div>
  </div>
  <section v-if="showButton" class="grid place-items-center bg-blue-100 p-10">
    <RouterLink
      to="/jobs"
      class="block bg-black w-full max-w-lg text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
      >View All Jobs</RouterLink
    >
  </section>
</template>
