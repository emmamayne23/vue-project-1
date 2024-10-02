<script setup>
import { defineProps, ref, computed } from 'vue'

const props = defineProps({
  job: Object
})

const showFullDescription = ref(false)

const toggleFullDescription = () => {
  showFullDescription.value = !showFullDescription.value
}

const truncatedDescription = computed(() => {
  let description = props.job.description
  if (!showFullDescription.value) {
    description = description.substring(0, 60) + '...'
  }
  return description
})
</script>

<template>
  <div class="container grid place-items-center p-3">
    <div class="job-listing-card bg-white w-11/12 rounded-2xl p-5 flex flex-col gap-1">
      <h3>{{ job.type }}</h3>
      <h2 class="text-2xl font-bold">{{ job.title }}</h2>
      <p>
        {{ truncatedDescription }}
      </p>
      <a @click="toggleFullDescription" class="text-green-500 hover:text-green-600 cursor-pointer">
        {{ showFullDescription ? 'Less' : 'More' }}
      </a>
      <br />
      <span class="salary text-blue-700">{{ job.salary }} / Year</span>
      <hr class="m-1" />
      <span class="location text-green-700"
        ><i class="fas fa-location-dot"></i> {{ job.location }}</span
      ><br />
      <a
        :href="'/job/' + job.id"
        class="button w-full bg-blue-800 text-center text-white py-3 rounded-xl hover:bg-blue-600 duration-300"
      >
        Read More
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.job-listing-card {
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.3);
}
</style>
