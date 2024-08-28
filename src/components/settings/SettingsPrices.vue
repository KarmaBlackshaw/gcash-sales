<script setup lang>
// libs
import _sortBy from 'lodash/sortBy'

const settingStore = useSettingStore()
const { lookupSettingByName, updateSetting } = settingStore
const { lookedUpSetting, isLookingUpSetting } = storeToRefs(settingStore)

const swal = useSwal()

const headers = [
  {
    label: 'Price',
    key: 'price',
  },
  {
    label: 'Amount Range',
    key: 'amountRange',
  },
  {
    label: '',
    key: 'action',
  },
]

const setting = computed(() => lookedUpSetting.value.prices)

const prices = computed(() => {
  if (!setting.value) {
    return []
  }

  const priceList = Object.entries(setting.value.content)
    .map(([price, amountRange]) => {
      return {
        price: prefixPeso(price),
        amountRange: amountRange.map(x => prefixPeso(x)).join(' - '),
      }
    })

  return _sortBy(
    priceList,
    [x => Number(trimPeso(x.price))],
    ['desc']
  )
})

const isAddPriceModalVisible = ref(false)

const settingToUpdate = ref()
const isEditPriceModalVisible = ref(false)
function editPrice (data) {
  settingToUpdate.value = data
  isEditPriceModalVisible.value = true
}

async function deletePrice (data) {
  const isConfirmed = await swal.confirm()

  if (!isConfirmed) {
    return
  }

  const content = {
    ...setting.value.content,
  }

  delete content[trimPeso(data.price)]

  await updateSetting({
    id: setting.value.id,
    content: JSON.stringify(content),
  })

  lookupSettingByName('prices')
}

lookupSettingByName('prices')
</script>

<template>
  <div>
    <h1 class="text-2xl mb-5">
      Prices
    </h1>

    <div class="flex flex-col gap-2">
      <BaseTable
        :is-loading="isLookingUpSetting"
        :headers="headers"
        :items="prices"
      >
        <template #column:action="{item}">
          <div class="flex gap-1">
            <BaseButton
              outline
              size="sm"
              color="stone"
              text
              @click="editPrice(item)"
            >
              Edit
            </BaseButton>

            <BaseButton
              outline
              size="sm"
              color="stone"
              @click="deletePrice(item)"
            >
              Delete
            </BaseButton>
          </div>
        </template>
      </BaseTable>

      <div class="flex justify-end">
        <BaseButton
          color="blue"
          size="md"
          @click="isAddPriceModalVisible = true"
        >
          Add Price
        </BaseButton>
      </div>
    </div>

    <SettingsAddPriceModal v-model="isAddPriceModalVisible" />

    <SettingsUpdatePriceModal
      v-model="isEditPriceModalVisible"
      :setting="settingToUpdate"
    />
  </div>
</template>

