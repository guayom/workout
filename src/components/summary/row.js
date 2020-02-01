import React from "react"
import { StoreContainer } from "../state/store"

export default ({ title, reps, rest }) => {
  const { excercise, excercises, set } = StoreContainer.useContainer()
  const isActive = excercises[excercise].title === title

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "10px",
      }}
    >
      <div style={{ color: isActive ? "red" : "black" }}>
        <strong>{title}</strong>
        <div>Rest: {rest}</div>
      </div>
      <div style={{ display: "flex" }}>
        {reps.map((cant, i) => (
          <div
            style={{
              width: "2em",
              marginLeft: "2px",
              textAlign: "right",
              fontWeight: i === set && isActive ? "bold" : "normal",
            }}
            key={title + i}
          >
            {cant}
          </div>
        ))}
      </div>
    </div>
  )
}
