function twoDigits(num) {
  return num > 9 ? String(num) : `0${num}`;
}

function formatSecondsToMinutesAndSeconds(seconds) {
  // reference: https://stackoverflow.com/questions/3733227/javascript-seconds-to-minutes-and-seconds/37770048
  const m = twoDigits(Math.floor((seconds % 3600) / 60));
  const s = twoDigits(Math.floor(seconds % 3600 % 60));
  return `${m}:${s}`;
}

export default formatSecondsToMinutesAndSeconds;
