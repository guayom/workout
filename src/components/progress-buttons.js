import React from "react"
import { StoreContainer } from "./state/store"

export default () => {
  let { decrement, increment, isLast, isFirst } = StoreContainer.useContainer()

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div>
        <button onClick={decrement} disabled={isFirst}>
          Prev
        </button>
      </div>
      <div>
        <button onClick={increment} disabled={isLast}>
          Next
        </button>
      </div>
    </div>
  )
}
