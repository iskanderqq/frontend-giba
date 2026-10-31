import { BrowserRouter } from 'react-router'
import { ChakraProvider } from '@chakra-ui/react'
import AppRoutes from './app/AppRoutes'
import { system } from '@/shared/theme/theme'



function App() {
	return (
		<BrowserRouter>
			<ChakraProvider value={system}>
				<AppRoutes />
			</ChakraProvider>
		</BrowserRouter>
	)
}

export default App
