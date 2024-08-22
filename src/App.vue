<script setup>
import { RouterLink, RouterView } from 'vue-router'
import IconGcash from '@/assets/image/gcash.png'
import IconTitle from '@/assets/image/title.png'
</script>

<template>
  <main class="flex justify-center bg-neutral-900 min-h-screen poppins-regular">
    <div class="p-5 flex flex-col gap-4">
      <div class="flex">
        <img
          :src="IconTitle"
          alt=""
          class="h-[150px]"
        >
      </div>

      <div class="">
        <label class="block text-white/50 poppins-light text-sm">Enter price</label>
        <input
          type="number"
          class="w-full rounded p-3 shadow"
        >
      </div>
      <div>
        <label class="block text-white/50 poppins-light text-sm">Date</label>
        <input
          type="date"
          class="w-full rounded p-3 shadow"
        >
      </div>

      <div>
        <button class="">
          Submit
        </button>
      </div>
    </div>
  </main>
</template>

<style scoped>

</style>
