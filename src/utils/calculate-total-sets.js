export const CalculateTotalSets = excercises => {
  return excercises.reduce(
    (accumulator, currentValue) => currentValue.reps.length + accumulator,
    0
  )
}
