import React from "react";
import DayListItem from "./DayListItem";

export default function DayList(props) {
  const dayList = props.days;
  const renderedDayList = dayList.map((day) =>
    <DayListItem
      key={day.id}
      name={day.name}
      spots={day.spots}
      selected={day.name === props.value}
      setDay={props.setDay}
    /> 
  );
  
  return (
    <ul>
      {renderedDayList}
    </ul>
  );
}