import React from "react";
import Button from "components/Button";
/**
 * Component to confirm Delete action by user
 * 
 * @param {*} props 
 * @returns JSX Element
 */
export default function Confirm(props) {
  return (
    <main className="appointment__card appointment__card--confirm">
      <h1 className="text--semi-bold">{props.message}</h1>
      <section className="appointment__actions">
        <Button danger onClick={props.onCancel}>Cancel</Button>
        <Button danger onClick={props.onConfirm}>Confirm</Button>
      </section>
    </main>
  );
}