import React from 'react'
import NavLinkUser from '@/app/components/NavLinkUser/NavLinkUser'
import LayoutMainPage from '../LayoutMainPage/LayoutMainPage'
export default function LayoutUser({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <LayoutMainPage>
      <NavLinkUser />
      {children}
      </LayoutMainPage>
    </div>
  )
}
