<script setup lang>
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
      isActive: route.matched.some(x => x.name === 'transactions'),
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
</template>

