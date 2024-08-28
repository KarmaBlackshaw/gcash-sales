<script setup lang>
// libs
import _sortBy from 'lodash/sortBy'

const settingStore = useSettingStore()
const { lookupSettingByName, updateSetting } = settingStore
const { lookedUpSetting } = storeToRefs(settingStore)

const setting = computed(() => lookedUpSetting.value.balance)

const balance = ref(0)

watchEffect(() => {
  if (!setting.value) {
    return
  }

  balance.value = setting.value.content.amount
})

async function onClickSave () {
  const content = {
    amount: balance.value,
  }

  await updateSetting({
    id: setting.value.id,
    content: JSON.stringify(content),
  })

  lookupSettingByName('balance')
}

lookupSettingByName('balance')
</script>

<template>
  <div>
    <h1 class="text-2xl mb-5">
      Balance
    </h1>

    <div class="flex flex-col gap-2">
      <BaseInput
        v-model="balance"
        label="Amount"
        type="number"
      />

      <div class="flex justify-end">
        <BaseButton @click="onClickSave">
          Save
        </BaseButton>
      </div>
    </div>
  </div>
</template>

