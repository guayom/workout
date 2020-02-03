import { useState } from "react"
import { createContainer } from "unstated-next"

function getAmountOfReps(excercise) {
  return Object.values(excercise.reps).length
}

function verfifyHasMoreSets(currentExcercise, set) {
  const totalSets = getAmountOfReps(currentExcercise)
  return set < totalSets - 1
}

function useCounter(initialState = []) {
  let [excercise, setExcercise] = useState(0)
  let [set, setSet] = useState(0)
  const [excercises, setExcercises] = useState(initialState)
  const currentExcercise = excercises[excercise]
  const previousExcercise = excercises[excercise - 1] || excercises[0]
  const hasMoreSets = verfifyHasMoreSets(currentExcercise, set)
  const maxExcercises = Object.values(excercises).length - 1
  const isFirst = excercise === 0 && set === 0
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
    excercise,
    decrement,
    increment,
    excercises,
    setExcercises,
    set,
    maxExcercises,
    isFirst,
    isLast,
  }
}

export const StoreContainer = createContainer(useCounter)
