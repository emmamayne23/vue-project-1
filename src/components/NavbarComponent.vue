<script setup>
import { RouterLink, useRoute } from 'vue-router'
import logoImage from '@/assets/image.png'
import VueLogo from '@/assets/logo.svg'

const isActiveLink = (routePath) => {
  const route = useRoute()
  return route.path === routePath
}
</script>

<template>
  <nav>
    <div class="navbar flex gap-20 items-center justify-between py-3 px-3 bg-blue-800">
      <header>
        <RouterLink to="/">
          <img :src="logoImage" alt="Company Logo" class="w-44 md:w-56" />
        </RouterLink>
      </header>
      <div class="nav-links flex items-center justify-between">
        <img alt="Vue logo" class="logo w-10 mr-5 md:mr-52" :src="VueLogo" />
        <div class="links text-white flex gap-3 mr-3">
          <RouterLink
            to="/"
            :class="[
              isActiveLink('/') ? 'bg-slate-900' : 'hover:text-white hover:bg-slate-800',
              'p-2',
              'rounded-lg',
              'duration-300'
            ]"
            >Home</RouterLink
          >
          <RouterLink
            to="/jobs"
            :class="[
              isActiveLink('/jobs') ? 'bg-slate-900' : 'hover:text-white hover:bg-slate-800',
              'p-2',
              'rounded-lg',
              'duration-300'
            ]"
            >Jobs</RouterLink
          >
          <RouterLink
            to="/login"
            :class="[
              isActiveLink('/login') ? 'bg-slate-900' : 'hover:text-white hover:bg-slate-800',
              'p-2',
              'rounded-lg',
              'duration-300'
            ]"
            ><i class="fa-solid fa-user"></i
          ></RouterLink>
        </div>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
nav {
  .isActive {
    background-color: rgb(15, 23, 42);
  }
}
</style>
