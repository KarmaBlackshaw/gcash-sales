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

  const {
    state: setting,
    execute: lookupSetting,
    isLoading: isLookingUpSetting,
  } = useAsyncAxios(
    query => baseApi.post('/settings/find', query),
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

    setting,
    lookupSetting,
    isLookingUpSetting,

    updateSetting,
    isUpdatingSetting,
  }
})
