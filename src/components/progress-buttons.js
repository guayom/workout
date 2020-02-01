import React from "react"
import { StoreContainer } from "./state/store"

export default () => {
  let counter = StoreContainer.useContainer()

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div>
        <button onClick={counter.decrement}>-</button>
      </div>
      <div>
        <button onClick={counter.increment}>+</button>
      </div>
    </div>
  )
}
