import React from 'react'
import '../components/cartCard.scss'

const cartCard = () => {
  return (
    <div className='cartContainer'>
      <div className='counterWrapper'>
        <input type='button' className='btn left' value='-'></input>
        <div className='count'>0</div>
        <input type='button' className='btn right' value='+'></input>
      </div>

      <input
        type='submit'
        className='addCartButton'
        value='Add to Cart'
      ></input>
    </div>
  )
}

export default cartCard
