import React from "react";
import Button from "./button.js"

const Actions = props => {

  return (
    <div className="btnContainer">
      <div className="button" onClick={props.handleClickReset}> CE </div>
      <div className="button" onClick={props.getResult}> = </div>
    </div>
  )
}

export default Actions