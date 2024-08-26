<script setup lang>
import { vOnClickOutside } from '@vueuse/components'

const isVisible = defineModel({
  type: Boolean,
  default: false,
})

defineProps({
  title: {
    type: String,
    required: true,
  },
})

</script>

<template>
  <Teleport to="body">
    <div
      v-if="isVisible"
      class="w-screen h-screen bg-black/50 fixed top-0 left-0"
    >
      <div
        v-on-click-outside="() => isVisible = false"
        class="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]  bg-white rounded shadow-lg mx-2 w-[300px] sm:w-[700px] p-4"
      >
        <div class="flex flex-col gap-8">
          <div class="flex justify-between">
            <div>
              {{ title }}
            </div>

            <IconClose
              class="text-red-500 text-2xl cursor-pointer"
              @click="isVisible = false"
            />
          </div>

          <div>
            <slot></slot>
          </div>

          <div class="flex gap-2 justify-end">
            <slot name="footer"></slot>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>

