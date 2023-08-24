import Header from "../components/Header"
import Sidebar from "../components/Sidebar"


function Dashboard() {
  return (
    <div className="grid lg:grid-cols-4 xl:grid-cols-6 min-h-screen">
      
      <Sidebar/>
      <main className="lg:col-span-3 xl:col-span-5 bg-gray-100 p-8">
        <Header/>
      </main>

    </div>
  )
}

export default Dashboard