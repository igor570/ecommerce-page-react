import React, { useState } from 'react'
import '../components/productGallery.scss'

const ProductGallery = () => {
  const [image, setImage] = useState('images/image-product-1.jpg')

  return (
    <>
      <div className='galleryWrapper'>
        <img className='container' src={image} />
        <div className='smallContainerWrapper'>
          <img
            onClick={() => setImage('images/image-product-1.jpg')}
            className='smallContainer'
            src='images/image-product-1-thumbnail.jpg'
          />
          <img
            onClick={() => setImage('images/image-product-2.jpg')}
            className='smallContainer'
            src='images/image-product-2-thumbnail.jpg'
          />
          <img
            onClick={() => setImage('images/image-product-3.jpg')}
            className='smallContainer'
            src='images/image-product-3-thumbnail.jpg'
          />
          <img
            onClick={() => setImage('images/image-product-4.jpg')}
            className='smallContainer'
            src='images/image-product-4-thumbnail.jpg'
          />
        </div>
      </div>
    </>
  )
}

export default ProductGallery
