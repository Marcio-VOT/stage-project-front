// create a signup page, with the fields of name, cpf, password and team, and a button to submit. all at the same way as the signin page
//
// Path: src/app/signup/page.tsx
// Compare this snippet from src/app/signin/page.tsx:
'use client'
import { useContext, useState } from 'react'
import { UserContext } from '@/contexts/UserContext'
import { Button, Input, Spacer } from '@nextui-org/react'
import { signup } from '@/services/usersApi'

export default function SignUp() {
  const { signin: signInContext } = useContext(UserContext)
  const [name, setName] = useState('')
  const [cpf, setCpf] = useState('')
  const [password, setPassword] = useState('')
  const [team, setTeam] = useState('')

  async function handleSubmit() {
    try {
      const data = await signup({ name, cpf, password, team })
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
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Spacer y={2} />
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
        <Spacer y={2} />
        <Input
          width="100%"
          placeholder="Time"
          value={team}
          onChange={(e) => setTeam(e.target.value)}
        />
        <Spacer y={5} />
        <Button onClick={handleSubmit} color="primary" fullWidth>
          Cadastrar
        </Button>
      </div>
    </>
  )
}
