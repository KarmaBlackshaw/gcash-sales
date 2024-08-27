
<template>
  <div class="grid grid-cols-[300px_1fr] min-h-screen">
    <AppSidebar />

    <div class="grid grid-rows-[70px_1fr]">
      <div class="border-b border-neutral-200"></div>

      <div class="p-4">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
