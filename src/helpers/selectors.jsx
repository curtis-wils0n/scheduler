export function getAppointmentsForDay(state, day) {
  const filteredDays = state.days.filter((indvDay) => {
    return indvDay.name === day;
  });
  if (filteredDays[0] === undefined) return [];
  const appointments = filteredDays[0].appointments;
  const result = [];
  appointments.forEach((appointment) => {
    result.push(state.appointments[appointment]);
  });
  return result;
}

export function getInterview(state, interview) {
  const result = {};
  if (interview) {
    result['student'] = interview.student;
    result['interviewer'] = state.interviewers[interview.interviewer];
    return result;
  }
  return null;
}

export function getInterviewersForDay(state, day) {  
  const filteredDays = state.days.filter((indvDay) => {
    return indvDay.name === day;
  });
  if (filteredDays[0] === undefined) return [];
  const interviewers = filteredDays[0].interviewers;
  const result = [];
  interviewers.forEach((interviewer) => {
    result.push(state.interviewers[interviewer]);
  });
  return result;
}