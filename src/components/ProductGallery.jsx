import React from 'react'
import '../components/productGallery.scss'

const ProductGallery = () => {
  return (
    <>
      <div className='galleryWrapper'>
        <img className='container' src='images/image-product-1.jpg' />
        <div className='smallContainerWrapper'>
          <img
            className='smallContainer'
            src='images/image-product-1-thumbnail.jpg'
          />
          <img
            className='smallContainer'
            src='images/image-product-2-thumbnail.jpg'
          />
          <img
            className='smallContainer'
            src='images/image-product-3-thumbnail.jpg'
          />
          <img
            className='smallContainer'
            src='images/image-product-4-thumbnail.jpg'
          />
        </div>
      </div>
    </>
  )
}

export default ProductGallery
