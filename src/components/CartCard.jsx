import '../components/cartCard.scss'
import { useState, useContext } from 'react'
import { appContext } from '../App'

const CartCard = () => {
  const { setCount } = useContext(appContext)
  const [currentCount, setCurrentCount] = useState(0)
  function increaseCount() {
    setCurrentCount((prevCount) => prevCount + 1)
  }

  function decreaseCount() {
    if (currentCount > 0) {
      setCurrentCount((prevCount) => prevCount - 1)
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
        <div className='count'>{currentCount}</div>
        <input
          type='button'
          className='btn right'
          value='+'
          onClick={increaseCount}
        ></input>
      </div>
      <input
        onClick={() => {
          setCount(currentCount)
        }}
        type='submit'
        className='addCartButton'
        value='Add to Cart'
      ></input>
    </div>
  )
}

export default CartCard
