const formatDate = (timeInSeconds) => {

  let sec_num = parseInt(timeInSeconds, 10);
  let hour = Math.floor(sec_num / 3600);
  let minute = Math.floor((sec_num - (hour * 3600)) / 60);
  let second = sec_num - (hour * 3600) - (minute * 60);

  if (timeInSeconds < 60) {
    return (second + 's');
  } else if (timeInSeconds === undefined) {
    return ('0s');
  } else if (timeInSeconds >= 60 && timeInSeconds < 3600) {
    let minutes = (minute === 0) ? '' : minute + 'm';
    let seconds = (second === 0) ? '' : second + 's';
    return ( `${minutes} ${seconds}` ).trim();
  } else if (timeInSeconds >= 3600 && minute === 0) {
    let hours = (hour === 0) ? '' : hour + 'h';
    let seconds = (second === 0) ? '' : second + 's';
    return (`${hours} ${seconds}`).trim();
  } else if (timeInSeconds >= 3600) {
    let hours = (hour === 0) ? '' : hour + 'h';
    let minutes = (minute === 0) ? '' : minute + 'm';
    let seconds = (second === 0) ? '' : second + 's';
    return (`${hours} ${minutes} ${seconds}`).trim();
  }
};

module.exports = formatDate;
