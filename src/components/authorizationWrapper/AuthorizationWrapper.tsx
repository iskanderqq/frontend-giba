import { Outlet } from "react-router"


export const AuthorizationWrapper = () => {
  return (
    <>
     <header>
        <h1>giba</h1>
     </header>
     <Outlet/>
     <footer>
      terms of use
     </footer>
    </>
  )
}

