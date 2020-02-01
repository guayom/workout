import React from "react"
import { StoreContainer } from "../state/store"
import Row from "./row"

export default () => {
  const { excercises } = StoreContainer.useContainer()

  return (
    <div>
      {excercises.map(ex => (
        <Row key={ex.title} {...ex} />
      ))}
    </div>
  )
}
