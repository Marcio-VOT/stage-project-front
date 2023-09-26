import api from './api'

export async function getMe({ token }: { token: string }) {
  const { data } = await api.get('/user/me', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  return data
}

export async function signin({
  cpf,
  password,
}: {
  cpf: string
  password: string
}) {
  const { data } = await api.post('/auth/signin', {
    cpf,
    password,
  })
  return data
}

export async function signup({
  cpf,
  password,
  name,
  team,
}: {
  cpf: string
  password: string
  name: string
  team: string
}) {
  const { data } = await api.post('/auth/signup', {
    cpf,
    password,
    name,
    team,
  })
  return data
}
