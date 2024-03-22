export function countdownTimer(targetDateString: string, intervalId: NodeJS.Timeout) {
  const targetDate = new Date(targetDateString);

  if (isNaN(targetDate.getTime())) {
    clearInterval(intervalId);
    throw new Error("Invalid date format");
  };

  const now = new Date().getTime();
  const difference = targetDate.getTime() - now;

  if (difference <= 0) {
    clearInterval(intervalId);
    return { days: 0, hours: 0, minutes: 0, seconds: 0, expired: false };
  }
  
  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds, expired: true };
}