import React from "react";

const Button = props => {
  return <div className="button" onClick={props.handleClick}>{props.value}</div>
}

export default Button