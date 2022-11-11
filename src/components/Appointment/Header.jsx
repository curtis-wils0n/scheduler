import React from "react";
/**
 * Component to display timestamp and delimiting ruler
 * 
 * @param {*} props 
 * @returns JSX Element
 */
export default function Header(props) {
  return (
    <header className="appointment__time">
      <h4 className="text--semi-bold">{props.time}</h4>
      <hr className="appointment__separator" />
    </header>
  );
}