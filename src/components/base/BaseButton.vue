<script setup lang>
const props = defineProps({
  outline: {
    type: Boolean,
    default: false,
  },
  color: {
    type: String,
    default: 'blue',
  },
  size: {
    type: String,
    default: 'md',
  },
})

const textClass = computed(() => {
  if (props.color === 'stone') {
    return props.outline
      ? 'text-stone-600 hover:text-white active:text-white'
      : 'text-white'
  }

  return props.outline
    ? 'text-blue-600 hover:text-white active:text-white'
    : 'text-white'
})

const borderClass = computed(() => {
  if (props.color === 'stone') {
    return 'border border-stone-600'
  }

  return 'border border-blue-600'
})

const backgroundClass = computed(() => {
  if (props.color === 'stone') {
    return props.outline
      ? 'bg-transparent hover:bg-stone-700 active:bg-stone-600'
      : 'bg-stone-600 hover:bg-stone-700 active:bg-stone-600'
  }

  return props.outline
    ? 'bg-transparent hover:bg-blue-700 active:bg-blue-600'
    : 'bg-blue-600 hover:bg-blue-700 active:bg-blue-600'
})

const sizeClass = computed(() => {
  if (props.size === 'sm') {
    return 'px-5 py-1 text-sm'
  }

  if (props.size === 'lg') {
    return 'px-12 py-3 text-lg'
  }

  // md
  return 'px-6 py-2 text-sm'
})
</script>

<template>
  <button
    class="inline-block rounded text-sm font-medium focus:outline-none focus:ring"
    href="#"
    :class="[
      textClass,
      borderClass,
      backgroundClass,
      sizeClass
    ]"
  >
    <slot></slot>
  </button>
</template>

