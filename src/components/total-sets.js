import React from 'react';
import { CalculateTotalSets } from "../utils"
import { StoreContainer } from "./state/store"

export default () => {
  let { excercises } = StoreContainer.useContainer()
  const totalSets = CalculateTotalSets(excercises)

  return (
    <div style={{marginBottom: "20px"}}>
      Total sets: {totalSets}
    </div>
  )
};