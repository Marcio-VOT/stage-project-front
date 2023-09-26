import api from './api'

export async function getAllData({ token }: { token: string }) {
  const { data } = await api.get('/area/alldata', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  return data
}
