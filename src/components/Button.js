import React from "react";
import classNames from "classnames";

import "components/Button.scss";
/**
 * Component to display buttons used in app
 * 
 * @param {*} props 
 * @returns JSX Element
 */
export default function Button(props) {
  // Buttons will be in one of two classes
  const buttonClass = {
    'button--confirm': props.confirm,
    'button--danger': props.danger, 
  };

  return (
    <button
      disabled={props.disabled}
      className={classNames('button', buttonClass)}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}
