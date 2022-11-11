import React from "react";
import classNames from "classnames";

import "components/DayListItem.scss";
/**
 * Component to represent an individual day item (limited to weekdays) 
 * 
 * @param {*} props 
 * @returns JSX Element
 */
export default function DayListItem(props) {
  // Returns an appropriately-formatted string based on spots remaining.
  function formatSpots(spots) {
    if (spots === 1) return "1 spot remaining";
    if (spots === 0) return "no spots remaining";
    return `${spots} spots remaining`;
  }

  let dayClass = classNames("day-list__item", {
    "day-list__item--selected": props.selected,
    "day-list__item--full": props.spots === 0,
  });
  
  return (
    <li
      className={dayClass}
      onClick={() => {props.setDay(props.name)}}
      selected={props.selected}
      data-testid="day"
    >
      <h2 className="text--regular">{props.name}</h2>
      <h3 className="text--light">{formatSpots(props.spots)}</h3>
    </li>
  );
}