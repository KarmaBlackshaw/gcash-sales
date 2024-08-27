<script setup lang>
const transactionStore = useTransactionStore()
const router = useRouter()

const { fetchTransactions } = transactionStore
const { transactions } = storeToRefs(transactionStore)

const headers = [
  {
    label: 'Date',
    key: 'date',
  },
  {
    label: 'Amount',
    key: 'amount',
    resolver: item => prefixPeso(item.amount),
  },
  {
    label: 'Fee',
    key: 'fee',
    resolver: item => prefixPeso(item.fee),
  },
]

fetchTransactions()
</script>

<template>
  <div class="p-4">
    <h1 class="text-2xl mb-5">
      Transactions
    </h1>

    <div class="mb-2 flex justify-end gap-2">
      <BaseButton
        color="blue"
        size="md"
        @click="router.push({name: 'bulk-add-transactions'})"
      >
        Add Bulk Transactions
      </BaseButton>
    </div>

    <BaseTable
      :headers="headers"
      :items="transactions"
    />
  </div>
</template>

