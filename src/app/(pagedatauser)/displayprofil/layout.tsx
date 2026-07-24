import  LayoutUser from '@/app/components/Layout/LayoutUser/LayoutUser'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <LayoutUser>
      {children}
    </LayoutUser>
  )
}
