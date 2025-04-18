import { Route, Routes } from 'react-router-dom'
import IndexPage from '@/pages/index'
import Myportfolio from './pages/portfolio'
import InterestPage from './pages/interest'
import SearchProvider from './shared/search'
import { Navbar } from './components/navbar'
function App() {
  return (
    <SearchProvider>
      <Navbar />
      <Routes>
        <Route element={<IndexPage />} path="/" />
        <Route element={<Myportfolio />} path="/myportfolio" />
        <Route element={<InterestPage />} path="/interest" />
      </Routes>
    </SearchProvider>
  )
}

export default App
