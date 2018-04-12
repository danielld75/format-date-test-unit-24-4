// const formatDate = (timeInSeconds) => {
//
//   let secNum = parseInt(timeInSeconds, 10);
//   let hour = Math.floor(secNum / 3600);
//   let minute = Math.floor((secNum - (hour * 3600)) / 60);
//   let second = secNum - (hour * 3600) - (minute * 60);
//
//   if (timeInSeconds < 60) {
//     return second + 's';
//   } else if (timeInSeconds === undefined) {
//     return '0s';
//   } else if (timeInSeconds >= 60 && timeInSeconds < 3600) {
//     let minutes = (minute === 0) ? '' : minute + 'm';
//     let seconds = (second === 0) ? '' : second + 's';
//     return (`${minutes} ${seconds}` ).trim();
//   } else if (timeInSeconds >= 3600 && minute === 0) {
//     let hours = (hour === 0) ? '' : hour + 'h';
//     let seconds = (second === 0) ? '' : second + 's';
//     return (`${hours} ${seconds}`).trim();
//   } else if (timeInSeconds >= 3600) {
//     let hours = (hour === 0) ? '' : hour + 'h';
//     let minutes = (minute === 0) ? '' : minute + 'm';
//     let seconds = (second === 0) ? '' : second + 's';
//     return (`${hours} ${minutes} ${seconds}`).trim();
//   }
// };
const formatDate = (timeInSeconds) => {
  const time = parseInt(timeInSeconds, 10);
  if (!time) {
    return "0s";
  }

  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = Math.floor(time % 60);

  let result = "";
  if (hours) {
    result += hours + "h ";
  }
  if (minutes) {
    result += minutes + "m ";
  }
  if (seconds) {
    result += seconds + "s ";
  }
  return result.slice(0, -1); // odcinamy ostatnią spację
};

module.exports = formatDate;
