'use client'

import { UserProvider } from '@/contexts/UserContext'
import { NextUIProvider } from '@nextui-org/react'
import { ReactNode } from 'react'

export function Providers({ children }: { children: ReactNode }) {
  return (
    <>
      <UserProvider>
        <NextUIProvider>{children}</NextUIProvider>
      </UserProvider>
    </>
  )
}
