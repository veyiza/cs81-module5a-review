// Array of objects: each entry represents one day and includes the hobby, time spent, and mood.
const hobbyLog = [
  { day: "Monday", hobby: "drawing", minutes: 30, mood: "focused" },
  { day: "Tuesday", hobby: "reading", minutes: 20, mood: "relaxed" },
  { day: "Wednesday", hobby: "gaming", minutes: 45, mood: "excited" },
  { day: "Thursday", hobby: "drawing", minutes: 25, mood: "creative" },
  { day: "Friday", hobby: "reading", minutes: 35, mood: "calm" }
];

// Returns the total time spent on all hobbies combined.
// Uses .reduce() to loop through the array and sum the 'minutes' values.
function totalTime(log) {
  // sum starts at 0 then adds the minutes from each session
  return log.reduce((sum, session) => sum + session.minutes, 0);
}

// Returns a list of all unique hobby names without duplicates.
// .map() creates an array of hobby names.
function uniqueHobbies(log) {
  const names = log.map(entry => entry.hobby); // pulls out all hobby names
  return [...new Set(names)]; // spreads unique items from the Set into a new array
}

// Filters out hobby sessions that last longer than a chosen number of minutes.
// .filter() returns only entries that match the condition.
function longSessions(log, minMinutes) {
  return log.filter(entry => entry.minutes > minMinutes);
}

// Counts how many sessions match a certain mood.
// .filter() is used again but only to count how many entries fit the moodType.
function countMood(log, moodType) {
  return log.filter(entry => entry.mood === moodType).length;
}

console.log("Total time spent:", totalTime(hobbyLog), "minutes");
console.log("Unique hobbies:", uniqueHobbies(hobbyLog));
console.log("Sessions longer than 30 min:", longSessions(hobbyLog, 30));
console.log("Number of relaxed sessions:", countMood(hobbyLog, "relaxed"));
