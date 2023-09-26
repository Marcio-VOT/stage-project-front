import { getAllData } from '@/services/areaApi'
import useAsync from './useAsync'
import { useCallback } from 'react'
import { parseCookies } from 'nookies'
import { Data } from '@/protocols'

export default function useAllData() {
  const { 'nextauth.token': token } = parseCookies()
  const {
    data: allData,
    error: allDataError,
    loading: allDataLoading,
    act,
  } = useAsync(
    useCallback(() => getAllData({ token }), [token]),
    true,
  ) as {
    data: Data[]
    error: Error
    loading: boolean
    act: () => Promise<void>
  }

  return { allData, allDataError, allDataLoading, getAllData: act }
}
