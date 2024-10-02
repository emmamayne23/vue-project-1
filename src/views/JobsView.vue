<script setup>
import JobListings from '@/components/JobListings.vue'
import HeroCard from '@/components/HeroCard.vue'
</script>

<template>
  <HeroCard message=" Jobs" />
  <JobListings :showSearchButton="true" />
</template>
