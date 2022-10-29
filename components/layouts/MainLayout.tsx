import Head from 'next/head'
import React, { FC, PropsWithChildren } from 'react'
import { NavbarUI } from '../ui/NavbarUI'

export const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
        <Head>
            <title>MainLayout</title>
        </Head>

        <NavbarUI/>
        
        <main>
            {children}
        </main>
    </>
  )
}
