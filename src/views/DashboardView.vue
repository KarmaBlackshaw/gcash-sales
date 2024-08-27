<script setup>
import { format } from 'date-fns'
const transactionStore = useTransactionStore()
const { fetchTransactionsDashboard } = transactionStore
const { transactionsDashboard } = storeToRefs(transactionStore)

import { prefixPeso } from '@/utils/prefixPeso'

const date = ref([])

watchEffect(() => {
  const [dateFrom, dateTo] = date.value

  if (dateFrom && dateTo) {
    fetchTransactionsDashboard({
      dateFrom: format(dateFrom, 'yyyy/MM/dd'),
      dateTo: format(dateTo, 'yyyy/MM/dd'),
    })
  } else {
    fetchTransactionsDashboard()
  }
})
</script>

<template>
  <div class="p-4">
    <h1 class="text-2xl mb-5">
      Transactions
    </h1>

    <div class="mb-7">
      <BaseInput
        v-model="date"
        type="date"
        label="Filter by Date"
        range
        :enable-time-picker="false"
      />
    </div>

    <div class="grid grid-cols-3 gap-7">
      <div class="rounded-lg p-5 border border-neutral-200">
        <h3 class="text-xs text-neutral-400">
          CAPITAL
        </h3>

        <div class="mt-5">
          <p class="text-2xl font-bold">
            {{ prefixPeso(20000) }}
          </p>
        </div>
      </div>

      <div class="rounded-lg p-5 border border-neutral-200">
        <h3 class="text-xs text-neutral-400">
          TOTAL SALES
        </h3>

        <div class="mt-5">
          <p class="text-2xl font-bold">
            {{ prefixPeso(transactionsDashboard.totalSales) }}
          </p>
        </div>
      </div>

      <div class="rounded-lg p-5 border border-neutral-200">
        <h3 class="text-xs text-neutral-400">
          AVERAGE DAILY SALES
        </h3>

        <div class="mt-5">
          <p class="text-2xl font-bold">
            {{ prefixPeso(transactionsDashboard.dailyAverageSales) }}
          </p>
        </div>
      </div>

      <div class="rounded-lg p-5 border border-neutral-200">
        <h3 class="text-xs text-neutral-400">
          TOTAL TRANSACTIONS
        </h3>

        <div class="mt-5">
          <p class="text-2xl font-bold">
            {{ prefixPeso(transactionsDashboard.totalTransactions) }}
          </p>
        </div>
      </div>

      <div class="rounded-lg p-5 border border-neutral-200">
        <h3 class="text-xs text-neutral-400">
          AVERAGE DAILY TRANSACTIONS
        </h3>

        <div class="mt-5">
          <p class="text-2xl font-bold">
            {{ prefixPeso(transactionsDashboard.dailyAverageTransactions) }}
          </p>
        </div>
      </div>

      <div class="rounded-lg p-5 border border-neutral-200">
        <h3 class="text-xs text-neutral-400">
          TOTAL PROFIT
        </h3>

        <div class="mt-5">
          <p class="text-2xl font-bold">
            {{ prefixPeso(transactionsDashboard.totalProfit) }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
