import React from 'react';
import { StoreContainer } from "../state/store"

export default ({title, reps, rest}) => {
  const {count, excercises} = StoreContainer.useContainer()
  const isActive = excercises[count].title === title

  return (
    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
      <div style={{color: isActive ? "red" : "black"}}>
        <strong>{title}</strong>
        <div>Rest: {rest}</div>
        count: { count.count }
      </div>
      <div style={{ display: "flex" }}>
        {reps.map(cant => (
          <div style={{width: "2em", marginLeft: "2px", textAlign: "right" }}>{cant}</div>
        ))}
      </div>
    </div>
  )
};