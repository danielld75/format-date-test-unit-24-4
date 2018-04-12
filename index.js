const formatDate = (timeInSeconds) => {

  let hour = timeInSeconds / 3600;
  let minute = (`${hour}` - Math.floor(hour)) * 60;
  let second = (`${minute}` - Math.floor(minute)) * 60;

  if (timeInSeconds < 60) {
    return (Math.floor(`${second}`) + 's');
  } else if (timeInSeconds === undefined) {
    return ('0s');
  } else if (timeInSeconds >= 60 && timeInSeconds < 3600) {
    let minutes = (Math.floor(`${minute}`) === 0) ? '' : (Math.floor(`${minute}`) + 'm');
    let seconds = (Math.floor(`${second}`) === 0) ? '' : Math.floor(`${second}`) + 's';
    return ( `${minutes} ${seconds}` ).trim();
  } else if (timeInSeconds >= 3600) {
    let hours = (Math.floor(`${hour}`) === 0) ? '' : (Math.floor(`${hour}`) + 'h');
    let minutes = (Math.floor(`${minute}`) === 0) ? '' : (Math.floor(`${minute}`) + 'm');
    let seconds = (Math.floor(`${second}`) === 0) ? '' : (Math.floor(`${second}`) + 's');
    return (`${hours} ${minutes} ${seconds}`).trim();
  }
};

module.exports = formatDate;
