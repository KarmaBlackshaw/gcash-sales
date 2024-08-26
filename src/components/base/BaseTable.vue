<script setup lang>
const props = defineProps({
  headers: {
    type: Array,
    required: true,
  },
  items: {
    type: Array,
    required: true,
  },
  isLoading: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <table class="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
    <thead class="text-left">
      <tr>
        <th
          v-for="(header, headerKey) in headers"
          :key="headerKey"
          class="whitespace-nowrap px-4 py-2 font-medium text-gray-900"
        >
          {{ header.label }}
        </th>
      </tr>
    </thead>

    <tbody class="divide-y divide-gray-200">
      <tr v-if="isLoading">
        <td :colspan="headers.length">
          <div class="py-5 text-center flex items-center justify-center gap-2">
            <IconLoading />
            Loading
          </div>
        </td>
      </tr>

      <template v-else>
        <tr
          v-for="(item, itemKey) in items"
          :key="itemKey"
        >
          <td
            v-for="(header, headerKey) in headers"
            :key="headerKey"
            class="whitespace-nowrap px-4 py-2 font-medium text-gray-900"
          >
            <slot
              :name="`column:${header.key}`"
              :header="header"
              :item="item"
            >
              {{ header.resolver ? header.resolver(item) : item[header.key] }}
            </slot>
          </td>
        </tr>
      </template>
    </tbody>
  </table>
</template>

