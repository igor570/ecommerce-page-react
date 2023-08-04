import './App.scss'
import NavBar from './components/NavBar'
import ProductGallery from './components/ProductGallery'
import ProductDetails from './components/ProductDetails'
import CartCard from './components/cartCard'

function App() {
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
      <NavBar />
      <div className='productWrapper'>
        <ProductGallery />
        <div className='cartWrapper'>
          <ProductDetails details={productInfo} />
          <CartCard />
        </div>
      </div>
    </>
  )
}

export default App
