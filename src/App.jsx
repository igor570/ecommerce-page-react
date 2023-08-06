import { createContext, useState } from 'react'
import './App.scss'
import NavBar from './components/NavBar'
import ProductGallery from './components/ProductGallery'
import ProductDetails from './components/ProductDetails'
export const appContext = createContext()

function App() {
  const [count, setCount] = useState(0)

  const productInfo = {
    corporateTitle: 'SNEAKER COMPANY',
    sneakerTitle: 'Fall Limited Edition Sneakers',
    sneakerDescription:
      "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
    price: '125.00',
    discount: '50%',
    salePrice: '250',
  }
  return (
    <>
      <appContext.Provider value={{ count, setCount }}>
        <NavBar />
        <div className='productWrapper'>
          <ProductGallery />
          <ProductDetails details={productInfo} />
        </div>
      </appContext.Provider>
    </>
  )
}

export default App
