import { Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './components/Home/home'
import Contact from './components/Contact/contact'
import About from './components/About/about'
import Product from './components/Product/Product'
import ProductDetails from './components/Product/ProductDetails'
import CheckOut from './components/Checkout/CheckOut'
import Cart from './components/Cart/Cart'
import './App.css'

function App() {
  

  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/product' element={<Product/>} />
        <Route path='/products/:id' element={<ProductDetails/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/checkout' element={<CheckOut/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='*' element={<h1>page not found</h1>} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
