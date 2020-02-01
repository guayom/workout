import { useState } from "react"
import { createContainer } from "unstated-next"

function useCounter(initialState = []) {
  let [count, setCount] = useState(0)
  const [excercises, setExcercises] = useState(initialState)

  let decrement = () => setCount(count - 1)
  let increment = () => setCount(count + 1)
  return { count, decrement, increment, excercises, setExcercises }
}

export const StoreContainer = createContainer(useCounter)
