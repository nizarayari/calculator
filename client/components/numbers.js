import React from "react";
import Button from "./button.js"

const Numbers = props => {
  const arrNumbers = Array.from(Array(10).keys())

  return (
    <div className="btnContainer">
      <For each="number" of={ arrNumbers }>
        <Button key={ number } value={ number } handleClick={props.handleClick}/>
      </For>
    </div>
  )
}

export default Numbers

