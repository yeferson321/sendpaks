export function countdownTimer(
  targetDateString: string,
  callback: (remainingTime: {
    hours: number;
    minutes: number;
    seconds: number;
  }) => void
) {
  const targetDate = new Date(targetDateString);

  if (isNaN(targetDate.getTime())) {
    throw new Error("Invalid date format");
  }

  const intervalId = setInterval(() => {
    const now = new Date().getTime();
    const difference = targetDate.getTime() - now;

    if (difference <= 0) {
      callback({ hours: 0, minutes: 0, seconds: 0 });
      clearInterval(intervalId);
    } else {
      const hours = Math.floor(difference / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      callback({ hours, minutes, seconds });
    }
  }, 1000);
}
