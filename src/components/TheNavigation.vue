<script setup>
const route = useRoute()
const router = useRouter()

const navs = [
  {
    name: 'Home',
    routeName: 'home',
  },
  {
    name: 'Portfolio',
    routeName: 'portfolio',
  },
  {
    name: 'Contact',
    routeName: 'contact',
  },
]

</script>

<template>
  <nav class="h-[64px] bg-neutral-900 w-full text-neutral-200 shadow border-b border-neutral-800 px-20 sm:px-0">
    <ul class="flex gap-10 container mx-auto items-center h-full">
      <li
        v-for="nav in navs"
        :key="nav.name"
        class="relative h-full grid place-content-center cursor-pointer select-none"
        @click="router.push({ name: nav.routeName })"
      >
        {{ nav.name }}

        <div
          v-if="route.name === nav.routeName"
          class="bg-white h-[5px] w-full absolute bottom-0"
        />
      </li>
    </ul>
  </nav>
</template>
