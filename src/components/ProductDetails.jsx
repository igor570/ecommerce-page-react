import React from 'react'
import '../components/ProductDetails.scss'

const ProductDetails = ({ details }) => {
  return (
    <>
      <div className='productDetailsWrapper'>
        <div className='corpTitle'>{details.corporateTitle}</div>
        <div className='sneakerTitle'>{details.sneakerTitle}</div>
        <div className='sneakerDescription'>{details.sneakerDescription}</div>
        <div className='priceWrapper'>
          <div className='sneakerPrice'>${details.price}</div>
          <div className='discountTag'> {details.discount}</div>
        </div>
        <div className='salePrice'>{details.salePrice}</div>
      </div>
    </>
  )
}

export default ProductDetails
