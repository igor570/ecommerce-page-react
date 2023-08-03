import './App.scss'
import NavBar from './components/NavBar'
import ProductGallery from './components/ProductGallery'

function App() {
  const productInfo = {
    corporateTitle: 'Sneaker Company',
    sneakerTitle: 'Fall Limited Edition Sneakers',
    sneakerDescription:
      'These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outeer sole, they will withstand everything the weather can offer.',
    price: 125,
    discount: '50%',
  }
  return (
    <>
      <NavBar />
      <ProductGallery />
    </>
  )
}

export default App
