import React from "react";
import InterviewerListItem from "./InterviewerListItem";
import PropTypes from 'prop-types'

import "components/InterviewerList.scss";
/**
 * Component to display a collection of interviewers, displayed when a user
 *  creates or edits an <Appointment/> component.
 * 
 * @param {*} props 
 * @returns JSX Element
 */
export default function InterviewerList(props) {
  const interviewerList = props.interviewers;
  // Creates an interviewer component for each interviewer listed in data
  const renderedInterviewerList = interviewerList.map((interviewer) =>
    <InterviewerListItem
      key={interviewer.id}
      name={interviewer.name}
      avatar={interviewer.avatar}
      selected={interviewer.id === props.value}
      setInterviewer={() => props.onChange(interviewer.id)}
    />
  );

  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">
        {renderedInterviewerList}
      </ul>
    </section>
  );
}
// Necessitate that InterviewerList is of type Array
InterviewerList.propTypes = {
  interviewers: PropTypes.array.isRequired
};