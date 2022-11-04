export function getAppointmentsForDay(state, day) {
  const results = [];
  for (const indvDay of state.days) {
    if (indvDay.name === day) {
      indvDay.appointments.forEach((appointment) => {
        results.push(state.appointments[appointment]);
      });
    }
  }
  return results;
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