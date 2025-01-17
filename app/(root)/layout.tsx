import Header from "@/components/global/header"

type Props = {
    children: React.ReactNode
}
const layout = ({children}: Props) => {
  return (
    <main className="root-container">
        <div className="mx-auto max-w-7xl text-white">
            <Header />
            <div className="mt-20 pb-20">
            {children}
            </div>
     
    </div>
    </main>
  )
}

export default layout
