<script setup lang>
const props = defineProps({
  label: {
    type: String,
  },
  type: {
    type: String,
    default: 'text',
  },
})

const attrs = useAttrs()

const model = defineModel({
  type: [String, Number, Date],
  default: '',
})

const preventE = event => {
  if (event.key === 'e' || event.key === 'E' && props.type === 'number') {
    event.preventDefault()
  }
}

</script>

<template>
  <label>
    <span
      v-if="label"
      class="block text-xs text-neutral-500 mb-1"
    >
      {{ label }}
    </span>

    <input
      v-model="model"
      v-bind="attrs"
      :type="type"
      class="border rounded py-2 px-3 w-full !focus:ring-0 ring-0 outline-none text-sm"
      :class="[
        'disabled' in attrs ? 'cursor-not-allowed' : ''
      ]"
      @keydown="preventE"
    >
  </label>
</template>

