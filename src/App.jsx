import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import './index.css'
import { CartProvider } from './context/CartContext'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cart from './pages/Cart'
import ProductDetails from './components/ProductDetails'


function App() {

  return (
    <>
    <CartProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path='/product/:id' element = {<ProductDetails/>}></Route>
        </Routes>
    </CartProvider>
    </>
  )
}

export default App
