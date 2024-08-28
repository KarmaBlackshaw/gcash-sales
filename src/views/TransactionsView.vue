<script setup lang>
const transactionStore = useTransactionStore()
const router = useRouter()
const swal = useSwal()

const { fetchTransactions, deleteTransaction } = transactionStore
const { transactions } = storeToRefs(transactionStore)

const headers = [
  {
    label: '',
    key: 'checkbox',
  },
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
  {
    label: 'Type',
    resolver: item => {
      return item.type === 'cash-in'
        ? 'Cash In'
        : 'Cash Out'
    },
  },
  {
    label: '',
    key: 'action',
  },
]

async function onClickDeleteTransaction (transaction) {
  const isConfirmed = await swal.confirm()

  if (!isConfirmed) {
    return
  }

  await deleteTransaction({
    id: transaction.id,
  })

  fetchTransactions()

  swal.alert({ type: 'success' })
}

const selectedTransactions = ref([])
const isSelectAll = ref(false)

function toggleSelectAll () {
  if (selectedTransactions.value.length === transactions.value.length) {
    selectedTransactions.value = []
  } else {
    selectedTransactions.value = transactions.value.map(x => x.id)
  }
}

async function onClickBulkDeleteTransaction () {
  const isConfirmed = await swal.confirm()

  if (!isConfirmed) {
    return
  }

  await Promise.all(
    selectedTransactions.value.map(async id => {
      await deleteTransaction({
        id,
      })
    })
  )

  selectedTransactions.value = []

  fetchTransactions()

  swal.alert({ type: 'success' })
}

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

      <BaseButton
        v-if="selectedTransactions.length"
        color="red"
        size="md"
        @click="onClickBulkDeleteTransaction"
      >
        Delete Selected
      </BaseButton>
    </div>

    <BaseTable
      :headers="headers"
      :items="transactions"
    >
      <template #header:checkbox>
        <input
          v-model="isSelectAll"
          type="checkbox"
          @click="toggleSelectAll"
        >
      </template>

      <template #column:checkbox="{item}">
        <input
          v-model="selectedTransactions"
          :value="item.id"
          type="checkbox"
        >
      </template>

      <template #column:action="{item}">
        <BaseButton
          outline
          size="sm"
          color="stone"
          @click="onClickDeleteTransaction(item)"
        >
          Delete
        </BaseButton>
      </template>
    </BaseTable>
  </div>
</template>

