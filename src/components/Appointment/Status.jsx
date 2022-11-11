import React from "react";
/**
 * Component to display a loading animation alongside a relevant message.
 * 
 * @param {*} props 
 * @returns JSX Element
 */
export default function Status(props) {
  return (
    <main className="appointment__card appointment__card--status">
      <img
        className="appointment__status-image"
        src="images/status.png"
        alt="Loading"
      />
      <h1 className="text--semi-bold">{props.message}</h1>
    </main>
  );
}