/**
 * Calculates total formatted duration string from an array of lesson durations.
 * Supports formats like "45m", "1h 15m", "60", "50 mins", etc.
 */
export function parseDurationToMinutes(durationStr: string): number {
  if (!durationStr) return 0;
  const str = durationStr.toLowerCase().trim();
  
  let hours = 0;
  let mins = 0;

  const hMatch = str.match(/(\d+)\s*(?:h|hr|hours?)/);
  if (hMatch) hours = parseInt(hMatch[1], 10);

  const mMatch = str.match(/(\d+)\s*(?:m|min|minutes?)/);
  if (mMatch) mins = parseInt(mMatch[1], 10);

  if (!hMatch && !mMatch) {
    const rawNum = parseInt(str, 10);
    if (!isNaN(rawNum)) mins = rawNum;
  }

  return hours * 60 + mins;
}

export function formatMinutesToDuration(totalMinutes: number): string {
  if (totalMinutes <= 0) return "0m";
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  if (hours > 0 && minutes > 0) return `${hours}h ${minutes}m`;
  if (hours > 0) return `${hours} Hours`;
  return `${minutes}m`;
}

export function computeModuleTotalDuration(
  lessons: Array<{ duration?: string; durationMinutes?: number }>
): string {
  const totalMins = lessons.reduce((sum, les) => {
    if (les.durationMinutes) return sum + les.durationMinutes;
    return sum + parseDurationToMinutes(les.duration || "");
  }, 0);

  return formatMinutesToDuration(totalMins);
}
