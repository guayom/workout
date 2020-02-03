import { useState } from "react"
import { createContainer } from "unstated-next"
import { getAmountOfReps } from "../../utils"

function useCounter(initialState = []) {
  let [excercise, setExcercise] = useState(0)
  let [set, setSet] = useState(0)
  const [excercises, setExcercises] = useState(initialState)
  const currentExcercise = excercises[excercise]
  const previousExcercise = excercises[excercise - 1] || excercises[0]
  const maxExcercises = Object.values(excercises).length - 1
  const isFirst = excercise === 0 && set === 0
  const hasMoreSets = set < getAmountOfReps(currentExcercise) - 1
  const isLast = excercise === maxExcercises && !hasMoreSets

  let decrement = () => {
    // If set is 0, move to previous set
    if (set === 0 && excercise > 0) {
      setExcercise(excercise - 1)
      setSet(getAmountOfReps(previousExcercise) - 1)
    } else {
      setSet(set - 1)
    }
  }

  let increment = () => {
    // If current excercise has more sets, increase set
    if (!hasMoreSets) {
      setExcercise(excercise + 1)
      setSet(0)
    } else {
      setSet(set + 1)
    }
  }

  return {
    currentExcercise,
    decrement,
    excercise,
    excercises,
    increment,
    isFirst,
    isLast,
    maxExcercises,
    set,
    setExcercises,
  }
}

export const StoreContainer = createContainer(useCounter)
