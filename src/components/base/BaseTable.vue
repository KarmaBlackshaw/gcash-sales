<script setup lang>
const props = defineProps({
  headers: {
    type: Array,
    required: true,
    default: () => [
      {
        label: 'Header',
        key: 'header',
      },
    ],
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
  <div class="overflow-x-auto rounded-lg border border-gray-200 max-h-96 relative">
    <table class="min-w-full bg-white text-sm border-collapse">
      <thead class="text-left top-0 bg-white">
        <tr>
          <th
            v-for="(header, headerKey) in headers"
            :key="headerKey"
            class="whitespace-nowrap sticky z-2 top-0 text-sm leading-6 font-semibold text-slate-700 bg-white p-0"
          >
            <div class="px-4 py-2  border-b border-gray-200">
              <slot
                :name="`header:${header.key}`"
                :header="header"
              >
                {{ header.label || '&nbsp;' }}
              </slot>
            </div>
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

        <tr v-else-if="items.length === 0">
          <td :colspan="headers.length">
            <div class="py-5 text-center flex items-center justify-center gap-2 text-neutral-400">
              <IconEmojiSad />
              Such empty space
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
  </div>
</template>
