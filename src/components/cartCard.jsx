import '../components/cartCard.scss'
import { useState } from 'react'

const CartCard = () => {
  const [count, setCount] = useState(0)
  function increaseCount() {
    setCount((prevCount) => prevCount + 1)
  }

  function decreaseCount() {
    if (count > 0) {
      setCount((prevCount) => prevCount - 1)
      console.log(count)
    }
  }
  return (
    <div className='cartContainer'>
      <div className='counterWrapper'>
        <input
          type='button'
          className='btn left'
          value='-'
          onClick={decreaseCount}
        ></input>
        <div className='count'>{count}</div>
        <input
          type='button'
          className='btn right'
          value='+'
          onClick={increaseCount}
        ></input>
      </div>
      <input
        type='submit'
        className='addCartButton'
        value='Add to Cart'
      ></input>
    </div>
  )
}

export default CartCard
