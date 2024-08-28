export default function useAsyncAxios (resolver, defaultValue) {
  const isLoading = ref(false)
  const error = ref(null)
  const state = ref(defaultValue)

  async function execute (payload) {
    try {
      isLoading.value = true
      error.value = null

      const { data } = await resolver(payload)
      state.value = data
      return data
    } catch (err) {
      error.value = err
    } finally {
      isLoading.value = false
    }
  }

  return {
    state: state,
    execute,
    isLoading,
    error,
  }
}