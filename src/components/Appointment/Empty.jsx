import React from "react";
/**
 * Component to display schedule slot with no booked appointment, including
 *  an 'add' button to schedule one.
 * 
 * @param {*} props 
 * @returns JSX Element
 */
export default function Empty(props) {
  return (
    <main className="appointment__add">
      <img
        src="images/add.png"
        alt="Add"
        className="appointment__add-button"
        onClick={props.onAdd}
      />
    </main>
  );
}