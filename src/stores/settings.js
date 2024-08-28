import { baseApi } from '@/axios'

export const useSettingStore = defineStore('settings', () => {
  const {
    state: settings,
    execute: fetchSettings,
    isLoading: isFetchingSettings,
  } = useAsyncAxios(
    () => baseApi.post('/settings/list'),
    []
  )

  const lookedUpSetting = reactive({})
  const {
    execute: lookupSettingByName,
    isLoading: isLookingUpSetting,
  } = useAsyncAxios(
    async name => {
      const { data } = await baseApi.post('/settings/find', {
        name,
      })

      lookedUpSetting[name] = data
    },
    null
  )

  const {
    execute: updateSetting,
    isLoading: isUpdatingSetting,
  } = useAsyncAxios(
    query => baseApi.patch('/settings', query),
    null
  )

  return {
    settings,
    fetchSettings,
    isFetchingSettings,

    lookedUpSetting,
    lookupSettingByName,
    isLookingUpSetting,

    updateSetting,
    isUpdatingSetting,
  }
})
