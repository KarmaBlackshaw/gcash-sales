// libs
import { ref, nextTick } from 'vue'
import { onClickOutside } from '@vueuse/core'
import {
  computePosition,
  flip,
  shift,
  offset,
  autoUpdate
} from '@floating-ui/dom'

export default ({
  placement = 'bottom-start',
} = {}) => {
  const cleanup = ref(null)
  const button = ref(null)
  const popper = ref(null)

  async function update () {
    await nextTick()

    const { x, y } = await computePosition(button.value, popper.value, {
      placement: placement,
      strategy: 'fixed',
      middleware: [
        flip(),
        shift({
          padding: 5,
        }),
        offset(5),
      ],
    })
    Object.assign(popper.value.style, {
      left: `${x}px`,
      top: `${y}px`,
    })
  }

  async function show () {
    startAutoUpdate()

    await nextTick()

    if (!cleanup.value) {
      startAutoUpdate()
    }
    popper.value.classList.remove('hidden')
    popper.value.classList.add('inline-block')
  }

  function hide () {
    popper.value.classList.add('hidden')
    popper.value.classList.remove('inline-block')

    if (cleanup.value) {
      cleanup.value()
      cleanup.value = null
    }
  }

  function toggle () {
    if (popper.value.classList.contains('hidden')) {
      show()
    } else {
      hide()
    }
  }

  function startAutoUpdate () {
    cleanup.value = autoUpdate(button.value, popper.value, update)
  }

  onClickOutside(
    button,
    () => {
      hide()
    },
    {
      ignore: [popper],
    }
  )

  return {
    button,
    popper,
    show,
    hide,
    toggle,
  }
}