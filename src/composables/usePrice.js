export default () => {
  const settingStore = useSettingStore()
  const { lookupSettingByName } = settingStore
  const { lookedUpSetting } = storeToRefs(settingStore)

  const setting = computed(() => lookedUpSetting.value.prices)

  const getPrice = amount => {
    if (!setting.value) {
      return 0
    }

    const priceMap = setting.value.content

    const maxAmount = Object.values(priceMap)
      .map(([_, max]) => max)
      .sort((a, b) => a - b)
      .pop()

    const maxPrice = Number(
      Object.keys(priceMap)
        .find(key => priceMap[key][1] === maxAmount)
    )

    if (amount > maxAmount) {
      return maxPrice + getPrice(amount - maxAmount)
    }

    for (const key in priceMap) {
      const [min, max] = priceMap[key]
      if (amount >= min && amount <= max) {
        return Number(key)
      }
    }
  }

  lookupSettingByName('prices')

  return {
    getPrice,
  }
}