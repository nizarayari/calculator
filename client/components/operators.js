import React from "react";
import Button from "./button.js"

const Operators = props => {
  const arrOperators = ['+','-','/','*','.']

  return (
    <div className="btnContainer">
      <For each="operator" index="idx" of={ arrOperators }>
        <Button key={ idx } value={ operator } handleClick={props.handleClick}/>
      </For>
    </div>
  )
}

export default Operators