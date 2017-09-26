import React from 'react';

export default function Counter(props) {
  return (
    <div>
      <div>
        <button onClick={props.onIncrement}>+</button>
        <h1 style={{'display': 'inline-block'}}>{props.count}</h1>
        <button onClick={props.onDecrement}>-</button>
      </div>
      <button onClick={props.onRemove}>Remove</button>
    </div>
  )
}