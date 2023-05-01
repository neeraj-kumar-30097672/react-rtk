import React, { useState } from 'react'
// import { useSelector, useDispatch } from 'react-redux'
import { useAppSelector,  useAppDispatch} from '../../store/hooks'
import { ordered, restocked } from './cakeSlice'

export default function CakeView() {
  const [value, setValue] = useState(1)
  const numOfCakes = useAppSelector(state => state.cake.numOfCakes)
  const dispatch = useAppDispatch()

  return (
    <div>
      <h2>Number of Cakes - {numOfCakes}</h2>
      <button onClick={() => dispatch(ordered())}>Order Cake</button>
      <input 
        type='number'
        value={value}
        onChange={(e) => setValue(parseInt(e.target.value))}
      />
      <button onClick={() => dispatch(restocked(value))}>Restock Cakes</button>
    </div>
  )
}
