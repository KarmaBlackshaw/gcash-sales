<script setup lang>

</script>

<template>
  <div class="py-10 min-h-[calc(100vh-64px)]">
    <div class="container mx-auto flex flex-col gap-4 px-20 sm:px-0">
      <h1 class="text-7xl max-w-[14ch] font-bold mb-10">
        Checkout my latest and single  <span class="text-cyan-500">works</span>
      </h1>

      <div class="flex flex-wrap gap-4">
        <div
          v-for="i in 10"
          :key="i"
          class="flex flex-col gap-1"
        >
          <div>
            <iframe
              height="200"
              width="280"
              src="https://www.youtube.com/embed/NTgouy-3vqA"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              class="rounded-lg"
            />
          </div>

          <h4>A simple title</h4>
        </div>
      </div>
    </div>
  </div>
</template>

