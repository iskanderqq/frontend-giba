import { AuthorizationWrapper } from "@/components/authorizationWrapper";
import { LoginPage } from "@/pages/loginPage";
import  { Routes, Route } from "react-router";


const AppRoutes  = () => {
  return (
		<Routes>
			{/* <Route  path='/' element={<div>213123 <Outlet/></div>} >
				<Route path='/app' element={<div>app</div>}/>
			</Route> */}
			<Route element={<AuthorizationWrapper/>}>
				<Route index path='login' element={<LoginPage/>} />
				<Route path='register' element={<></>} />
			</Route>

			{/* <Route index element={</>} />
			<Route path='about' element={< />} />



			<Route path='concerts'>
				<Route index element={<ConcertsHome />} />
				<Route path=':city' element={<City />} />
				<Route path='trending' element={<Trending />} />
			</Route> */}
		</Routes>
	)
}

export default AppRoutes;