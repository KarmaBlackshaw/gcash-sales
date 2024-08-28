<script setup lang>
const props = defineProps({
  label: {
    type: String,
  },
  items: {
    type: Array,
    default: () => [],
  },
})

const attrs = useAttrs()

const model = defineModel({
  type: [String, Number],
  default: '',
})
</script>

<template>
  <label>
    <span
      v-if="label"
      class="block text-xs text-neutral-500 mb-1"
    >
      {{ label }}
    </span>

    <select
      v-model="model"
      v-bind="attrs"
      class="border rounded py-2 px-3 w-full !focus:ring-0 ring-0 outline-none text-sm"
      :class="[
        'disabled' in attrs ? 'cursor-not-allowed' : ''
      ]"
    >
      <option
        v-for="(item, itemKey) in items"
        :key="itemKey"
        :value="item.value"
      >
        {{ item.text }}
      </option>
    </select>
  </label>
</template>

