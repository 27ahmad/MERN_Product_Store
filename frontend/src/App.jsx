import { Box} from "@chakra-ui/react"
import { Route, Routes } from "react-router-dom"
import { Toaster} from "./components/ui/toaster"
import HomePage from "./pages/HomePage"
import CreatePage from "./pages/CreatePage"
import Navbar from "./components/Navbar"

function App() {
  
  return (
    <Box minH="100vh" bg="gray.50">
      <Navbar />
      <Box as="main" py={4}>
      <Toaster/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create" element={<CreatePage />} />
        </Routes>
      </Box>
    </Box>
  )
}

export default App
