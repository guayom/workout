import React from 'react';

export default ({title, reps, rest}) => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
      <div>
        <strong>{title}</strong>
        <div>Rest: {rest}</div>
      </div>
      <div style={{ display: "flex" }}>
        {reps.map(cant => (
          <div style={{width: "2em", marginLeft: "2px", textAlign: "right" }}>{cant}</div>
        ))}
      </div>
    </div>
  )
};