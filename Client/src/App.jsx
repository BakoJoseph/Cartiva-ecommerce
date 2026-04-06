import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/HomeSec'
import Header from './components/Header'
import './App.css'
const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
