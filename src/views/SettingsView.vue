<script setup lang>
// libs
import _sortBy from 'lodash/sortBy'

const settingStore = useSettingStore()
const { lookupSetting, updateSetting } = settingStore
const { setting, isLookingUpSetting } = storeToRefs(settingStore)

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

const prices = computed(() => {
  if (!setting.value) {
    return []
  }

  const priceList = Object.entries(setting.value.content)
    .map(([price, amountRange]) => {
      return {
        price: `₱${price}`,
        amountRange: amountRange.map(x => `₱${x}`).join(' - '),
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

  lookupSetting({
    name: 'prices',
  })
}

lookupSetting({
  name: 'prices',
})
</script>

<template>
  <div class="p-4">
    <h1 class="text-2xl mb-5">
      Prices
    </h1>

    <div class="mb-2 flex justify-end">
      <BaseButton
        color="blue"
        size="md"
        @click="isAddPriceModalVisible = true"
      >
        Add Price
      </BaseButton>
    </div>

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

    <SettingsAddPriceModal v-model="isAddPriceModalVisible" />

    <SettingsUpdatePriceModal
      v-model="isEditPriceModalVisible"
      :setting="settingToUpdate"
    />
  </div>
</template>

