<script setup lang>
const settingStore = useSettingStore()
const { updateSetting, lookupSettingByName } = settingStore
const { lookedUpSetting } = storeToRefs(settingStore)

const isModalVisible = defineModel({
  type: Boolean,
  default: false,
})

const props = defineProps({
  setting: {
    type: Object,
    default: null,
  },
})

const form = reactive({
  price: 0,
  from: 0,
  to: 0,
})

const pricesSetting = computed(() => lookedUpSetting.value.prices)

watchEffect(() => {
  if (!props.setting) {
    return
  }

  console.log(props.setting.amountRange.split('-'))
  const amountRange = props.setting.amountRange
    .split('-')
    .map(x => trimPeso(x))

  form.price = trimPeso(props.setting.price)
  form.from = amountRange[0]
  form.to = amountRange[1]
})

const errorMessages = ref('')
async function updatePrice () {
  if (!form.price || !form.from || !form.to) {
    errorMessages.value = 'All fields are required'
    return
  }

  if (form.from > form.to) {
    errorMessages.value = '"From" must be less than "To"'
    return
  }

  const content = {
    ...pricesSetting.value.content,
    [form.price]: [form.from, form.to],
  }

  await updateSetting({
    id: pricesSetting.value.id,
    content: JSON.stringify(content),
  })

  lookupSettingByName('prices')

  isModalVisible.value = false
}

</script>

<template>
  <BaseModal
    v-model="isModalVisible"
    title="Update Price"
  >
    <div class="grid grid-cols-2 gap-3 ">
      <div
        v-if="errorMessages"
        class="col-span-2 bg-yellow-500 py-3 px-4 rounded text-xs"
      >
        {{ errorMessages }}
      </div>

      <BaseInput
        v-model="form.price"
        label="Price"
        class="col-span-2"
        type="number"
      />

      <BaseInput
        v-model="form.from"
        label="From"
        type="number"
      />

      <BaseInput
        v-model="form.to"
        label="To"
        type="number"
      />
    </div>

    <template #footer>
      <BaseButton
        color="blue"
        size="md"
        @click="updatePrice"
      >
        Update
      </BaseButton>

      <BaseButton
        color="stone"
        size="md"
        @click="isModalVisible = false"
      >
        Cancel
      </BaseButton>
    </template>
  </BaseModal>
</template>

