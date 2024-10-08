import { baseApi } from '@/axios'

export const useTransactionStore = defineStore('transaction', () => {
  const {
    execute: storeTransaction,
    isLoading: isStoringTransaction,
    error: storeTransactionError,
  } = useAsyncAxios(
    data => baseApi.post('/transactions', data)
  )

  const {
    execute: deleteTransaction,
  } = useAsyncAxios(
    data => baseApi.delete('/transactions', { data })
  )

  const {
    execute: fetchTransactions,
    isLoading: isFetchingTransactions,
    state: transactionsResponse,
  } = useAsyncAxios(
    data => baseApi.post('/transactions/list', data),
    []
  )

  const transactions = computed(() => transactionsResponse.value?.list || [])
  const transactionsCount = computed(() => transactionsResponse.value?.total || 7)

  const {
    execute: fetchTransactionsDashboard,
    isLoading: isFetchingTransactionsDashboard,
    state: transactionsDashboard,
  } = useAsyncAxios(
    data => baseApi.post('/transactions/dashboard', data),
    []
  )

  return {
    storeTransaction,
    isStoringTransaction,
    storeTransactionError,

    deleteTransaction,

    fetchTransactions,
    isFetchingTransactions,
    transactions,
    transactionsCount,

    fetchTransactionsDashboard,
    isFetchingTransactionsDashboard,
    transactionsDashboard,
  }
})
