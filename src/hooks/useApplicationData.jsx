import { useState, useEffect } from "react";
import axios from "axios";
/**
 * A function to store various helper methods and state mutators to be 
 *  referenced by Application.js
 * @returns state, setDay(), bookInterview(), cancelInterview()
 */
export default function useApplicationData() {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {},
  });
  
  // Map days to list index
  const dayCode = {
    "Monday": 0,
    "Tuesday": 1,
    "Wednesday": 2,
    "Thursday": 3,
    "Friday": 4,
  }
  // Fetch data from server and populate states
  useEffect(()=>{
    const dayURL = "/api/days";
    const appointmentURL = "/api/appointments";
    const interviewersURL = "/api/interviewers";
    Promise.all([
      axios.get(dayURL),
      axios.get(appointmentURL),
      axios.get(interviewersURL)
    ]).then((all) =>{
      setState(prev=>({...prev, days:all[0].data, appointments:all[1].data, interviewers:all[2].data}));
    })
  },[]);

  const setDay = day => {return setState({ ...state, day })};
  // Performs a PUT call to the database and updates "spots left" display
  function bookInterview(id, interview) {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };
    // Return the index based on specified day value
    const dayIndex = dayCode[state.day];
    const day = {
      ...state.days[dayIndex],
      spots: state.days[dayIndex].spots - 1
    }
    state.days[dayIndex] = day;
    // Place new appointment in data
    return axios.put(`/api/appointments/${id}`, appointment)
      .then(() => {
        // If successful, update states
        setState({ ...state, appointments, ...state.days })
      });
  }
  // Performs a DELETE call to the database and updates "spots left" for day
  function cancelInterview(id) {
    const dayIndex = dayCode[state.day];
    const day = {
      ...state.days[dayIndex],
      spots: state.days[dayIndex].spots + 1
    }
    state.days[dayIndex] = day;
    // Remove appointment from data
    return axios.delete(`/api/appointments/${id}`)
      .then(() => {
        // If successful, update states
        setState({...state, ...state.days });
      })
  }
  
  return { state, setDay, bookInterview, cancelInterview };
}
