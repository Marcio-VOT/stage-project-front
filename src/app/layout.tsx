import './globals.css'
import type { Metadata } from 'next'
import { Roboto_Flex as RobotoFlex } from 'next/font/google'
import { ReactNode } from 'react'
import { Providers } from './providers'
import Link from 'next/link'

const roboto = RobotoFlex({ subsets: ['latin'], variable: '--font-roboto' })

export const metadata: Metadata = {
  title: 'STAGE - NEXTJS',
  description: 'Stage Consulting tech interview project - NextJS',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-br" className="light">
      <body
        className={`${roboto.variable} font-sans h-full max-h-fit min-h-screen flex-1 bg-zinc-100 ps-48 py-4`}
      >
        <div className="absolute top-0 start-0 h-full bg-slate-500 w-48 flex-wrap text-gray-100  text-xl font-extrabold pt-8 drop-shadow-md">
          <div className="flex align-middle ">
            <div className="w-full flex mt-2">
              <Link
                href="/"
                className=" ps-2 pt-1 m-auto hover:text-white hover:drop-shadow-lg "
              >
                HOME
              </Link>
            </div>
          </div>
          <div className="w-full flex mt-2">
            <Link
              href="/signin"
              className=" ps-2 pt-1 m-auto hover:text-white hover:drop-shadow-lg"
            >
              SIGNIN
            </Link>
          </div>

          <div className="w-full flex mt-2">
            <Link
              href="/signup"
              className=" ps-2 pt-1 m-auto hover:text-white hover:drop-shadow-lg"
            >
              SIGNUP
            </Link>
          </div>
        </div>
        <div className=" h-full w-full">
          <Providers>{children}</Providers>
        </div>
        {/* <div className="fixed bottom-0 h-12 bg-slate-500 w-full"></div> */}
      </body>
    </html>
  )
}
