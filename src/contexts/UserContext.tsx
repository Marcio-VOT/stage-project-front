'use client'

import { ReactNode, createContext, useEffect, useState } from 'react'
import { parseCookies, destroyCookie, setCookie } from 'nookies'
import { getMe } from '@/services/usersApi'
import { usePathname, useRouter } from 'next/navigation'

// type SignInCredentials = {
//   cpf: string
//   name: string
//   password: string
//   team: string
// }

type User = {
  id: string
  cpf: string
  name: string
  team: string
}

type UserContextData = {
  user: User | null
  isAuthenticated: boolean
  signOut: () => void
  signin: (user: User, token: string) => void
}

export const UserContext = createContext({} as UserContextData)

export function UserProvider({ children }: { children: ReactNode }) {
  const router = useRouter()
  const pathname = usePathname()
  const [user, setUser] = useState<User | null>(null)
  const isAuthenticated = !!user

  function signOut() {
    destroyCookie(undefined, 'nextauth.token')
    setUser(null)
    if (pathname !== '/signin' && pathname !== '/signup') router.push('/signin')
  }

  function signin(user: User, token: string) {
    setUser(user)
    router.push('/')
    setCookie(undefined, 'nextauth.token', token, {
      maxAge: 60 * 60 * 24 * 7,
    })
  }

  useEffect(() => {
    const { 'nextauth.token': token } = parseCookies()
    getMe({ token })
      .then((response) => {
        setUser(response.data)
      })
      .catch(() => {
        signOut()
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  return (
    <UserContext.Provider
      value={{
        user,
        isAuthenticated,
        signOut,
        signin,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}
