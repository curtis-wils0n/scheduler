import { useState, useEffect } from "react";
import axios from "axios";

export default function useApplicationData() {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {},
  });

  const dayCode = {
    "Monday": 0,
    "Tuesday": 1,
    "Wednesday": 2,
    "Thursday": 3,
    "Friday": 4,
  }

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

  function bookInterview(id, interview) {

    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };
    
    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };

    const dayIndex = dayCode[state.day];
    const day = {
      ...state.days[dayIndex],
      spots: state.days[dayIndex].spots
    }
    if (!state.appointments[id].interview) {
      day.spots = state.days[dayIndex].spots - 1;
    }
    state.days[dayIndex] = day;

    return axios.put(`http://localhost:8001/api/appointments/${id}`, appointment)
      .then(() => {
        setState({ ...state, appointments, ...state.days })
      });
  }

  function cancelInterview(id) {
    const dayIndex = dayCode[state.day];

    const day = {
      ...state.days[dayIndex],
      spots: state.days[dayIndex].spots + 1
    }

    state.days[dayIndex] = day;

    return axios.delete(`http://localhost:8001/api/appointments/${id}`)
      .then(() => {
        setState({...state, ...state.days });
      })
  }

  return { state, setDay, bookInterview, cancelInterview };

}