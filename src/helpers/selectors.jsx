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