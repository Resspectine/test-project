export const formatDate = (date: Date) => date.toLocaleString('en-US', { month: 'short', year: 'numeric' });

export const getTimeFromDate = (date: Date) => date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });

export const getTimeForCompare = (date: Date) => date.toLocaleString('eu', { hour: 'numeric', minute: 'numeric' });

export const monthDiff = (firstDate: Date, secondDate: Date) => {
  return (secondDate.getTime() - firstDate.getTime());
}
