import './globals.css'
import type { Metadata } from 'next'
import { Roboto_Flex as RobotoFlex } from 'next/font/google'
import { ReactNode } from 'react'
import { Providers } from './providers'

const roboto = RobotoFlex({ subsets: ['latin'], variable: '--font-roboto' })

export const metadata: Metadata = {
  title: 'STAGE - NEXTJS',
  description: 'Stage Consulting tech interview project - NextJS',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-br">
      <body
        className={`${roboto.variable} font-sans h-fit max-h-fit min-h-screen bg-zinc-200`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
