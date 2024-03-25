
import { Outlet, useLoaderData } from "react-router-dom";


// components
import Nav from "../components/Nav";


import { fetchData } from "../helpers"
import Footer from "../components/Footer";


export function mainLoader() {
  const userName = fetchData("userName");
  return { userName }
}

const Main = () => {
  const { userName } = useLoaderData()

  return (
    <div className="layout">
      <Nav userName={userName} />
      <main>
        <Outlet />
        
      </main>
      <Footer />
    </div>
  )
}
export default Main