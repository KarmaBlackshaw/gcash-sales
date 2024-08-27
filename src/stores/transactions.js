import { baseApi } from '@/axios'

export const useTransactionStore = defineStore('transaction', () => {
  const {
    execute: storeTransaction,
    isLoading: isStoringTransaction,
  } = useAsyncAxios(
    data => baseApi.post('/transactions', data)
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

  return {
    storeTransaction,
    isStoringTransaction,

    fetchTransactions,
    isFetchingTransactions,
    transactions,
    transactionsCount,
  }
})
