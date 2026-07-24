import LayoutMainPage from "@/app/components/Layout/LayoutMainPage/LayoutMainPage";
export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <LayoutMainPage>
      {children}
    </LayoutMainPage>
  )
}
