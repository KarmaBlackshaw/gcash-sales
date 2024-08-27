<script setup lang>
const transactionStore = useTransactionStore()
const { storeTransaction } = transactionStore

const { getPrice } = usePrice()
const router = useRouter()
const { alert } = useSwal()
const form = ref([])

function addForm () {
  form.value.push({
    date: new Date().toISOString().split('T')[0],
    amount: 0,
    fee: 0,
  })
}

watchEffect(() => {
  form.value.forEach((currentForm, formIdx) => {
    form.value[formIdx].fee = getPrice(currentForm.amount)
  })
})

async function save () {
  const hasEmptyForm = form.value.some(currentForm => {
    return currentForm.amount === 0
  })

  if (hasEmptyForm) {
    return alert({
      type: 'error',
      text: 'There seems to be an empty form',
    })
  }

  await Promise.all(
    form.value.map(currentForm => {
      return storeTransaction({
        date: currentForm.date,
        amount: currentForm.amount,
        fee: currentForm.fee,
      })
    })
  )

  alert({
    type: 'success',
  })

  router.push({ name: 'transactions' })
}

addForm()
</script>

<template>
  <div class="p-4">
    <div
      class="flex text-xs gap-1 items-center mb-2 cursor-pointer"
      @click="router.push({name: 'transactions'})"
    >
      <IconChevronLeft /> Go Back
    </div>

    <h1 class="text-2xl mb-5 flex gap-2 items-center">
      Bulk Add Transactions
    </h1>

    <div class="flex justify-end mb-5 gap-2">
      <BaseButton @click="addForm">
        <IconAdd />
      </BaseButton>

      <BaseButton @click="save">
        Save
      </BaseButton>
    </div>

    <div class="mb-2 flex flex-col gap-4">
      <div
        v-for="(currentForm, formKey) in form"
        :key="formKey"
        class="flex gap-2 w-full"
      >
        <BaseInput
          v-model="currentForm.date"
          class="w-full"
          label="Date"
          type="date"
        />

        <BaseInput
          v-model="currentForm.amount"
          class="w-full"
          label="Amount"
          type="number"
          autofocus
        />

        <BaseInput
          v-model="currentForm.fee"
          class="w-full"
          disabled
          label="Fee"
        />

        <IconSubtract
          class="text-red-500 text-2xl shrink-0 self-center"
          :class="[
            formKey === 0 ? 'opacity-0' : 'opacity-100 cursor-pointer',
          ]"
          @click="() => formKey === 0 ? null : form.splice(formKey, 1)"
        />
      </div>
    </div>
  </div>
</template>

