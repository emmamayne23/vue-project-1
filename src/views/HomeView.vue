<script setup>
import JobListings from '@/components/JobListings.vue'
import HeroCard from '@/components/HeroCard.vue'
</script>

<template>
  <HeroCard message="Welcome !!!" />
  <JobListings :limit="3" :showButton="true" />
</template>
