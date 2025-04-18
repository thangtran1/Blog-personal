import { Route, Routes } from 'react-router-dom'
import IndexPage from '@/pages/index'
import Myportfolio from './pages/portfolio'
import InterestPage from './pages/interest'
import SearchProvider from './shared/search'
import { Navbar } from './components/navbar'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <SearchProvider>
      <Navbar />
      <Routes>
        <Route element={<IndexPage />} path="/" />
        <Route element={<Myportfolio />} path="/myportfolio" />
        <Route element={<InterestPage />} path="/interest" />
      </Routes>
      <ToastContainer />
    </SearchProvider>
  )
}

export default App
