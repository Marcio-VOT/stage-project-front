'use client'

import { useContext, useState } from 'react'
import { UserContext } from '@/contexts/UserContext'
import { Button, Input, Spacer } from '@nextui-org/react'
import { signin } from '@/services/usersApi'

export default function SignIn() {
  const { signin: signInContext } = useContext(UserContext)
  const [cpf, setCpf] = useState('')
  const [password, setPassword] = useState('')

  async function handleSubmit() {
    try {
      const data = await signin({ cpf, password })
      const { token } = data
      delete data.token
      data.team = data.team.name
      signInContext(data, token)
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      alert(err.response.data.message)
    }
  }

  return (
    <>
      <div className="w-96 bg-white p-6 m-auto mt-10 rounded-xl">
        <Input
          width="100%"
          placeholder="CPF"
          value={cpf}
          onChange={(e) => setCpf(e.target.value)}
        />
        <Spacer y={2} />
        <Input
          width="100%"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Spacer y={5} />
        <Button onClick={handleSubmit} color="primary" fullWidth>
          Entrar
        </Button>
      </div>
    </>
  )
}
