/**
 * @param {Object} state a collection of states to be searched
 * @param {string} day a weekday to search the state object
 * @returns a list of appointments for the given 'day' parameter
 */
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
/**
 * @param {Object} state a collection of states for reference
 * @param {Object} interview an interview object
 * @returns returns an interview object if it is booked by a student
 */
export function getInterview(state, interview) {
  const result = {};
  if (interview) {
    result['student'] = interview.student;
    result['interviewer'] = state.interviewers[interview.interviewer];
    return result;
  }
  return null;
}
/**
 * @param {Object} state a collection of states to be searched 
 * @param {string} day a weekday to search the state object
 * @returns a list of interviewers for the given day
 */
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