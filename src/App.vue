<script setup>
const router = useRouter()
const route = useRoute()

import IconDashboard from '@/components/icon/IconDashboard.vue'
import IconTransactions from '@/components/icon/IconTransactions.vue'
import IconSettings from '@/components/icon/IconSettings.vue'

const navs = computed(() => {
  return [
    {
      route: { name: 'dashboard' },
      icon: IconDashboard,
      iconClass: 'size-[25px]',
      title: 'Dashboard',
      isActive: route.name === 'dashboard',
    },
    {
      route: { name: 'transactions' },
      icon: IconTransactions,
      iconClass: 'size-[25px]',
      title: 'Transactions',
      isActive: route.name === 'transactions',
    },
    {
      route: { name: 'settings' },
      icon: IconSettings,
      iconClass: 'size-[20px]',
      title: 'Settings',
      isActive: route.name === 'settings',
    },
  ]
})
</script>

<template>
  <div class="grid grid-cols-[300px_1fr] min-h-screen">
    <div class="h-full p-4 border-r">
      <nav class="w-full h-full">
        <img
          class="h-[70px] mb-10"
          src="@/assets/image/gcash.png"
          alt=""
        >

        <ul class="h-full flex flex-col gap-1">
          <li
            v-for="(nav, navKey) in navs"
            :key="navKey"
            class="flex gap-2 items-center cursor-pointer transition py-3 rounded-lg px-2"
            :class="[
              nav.isActive ? 'bg-blue-500 text-white' : 'hover:bg-neutral-200/50',
            ]"
            @click="router.push(nav.route)"
          >
            <component
              :is="nav.icon"
              :class="nav.iconClass"
              class="w-[50px] max-h-[25px]"
            />

            {{ nav.title }}
          </li>
        </ul>
      </nav>
    </div>

    <div>
      <div class="h-[70px] border-b border-neutral-200"></div>

      <div class="p-4">
        <RouterView />
      </div>
    </div>
  </div>
  <!-- <main class="flex justify-center bg-neutral-900 min-h-screen poppins-regular">
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
  </main> -->
</template>

<style scoped>

</style>
