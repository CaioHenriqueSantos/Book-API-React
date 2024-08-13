import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import NotFound from './pages/NotFound'

function App() {

  return (
    <>
      <Routes>
        <Route index element={ <Home /> } />
        <Route path="/*" element={ <NotFound />} />
      </Routes>
    </>
  )
}

export default App
