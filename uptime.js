const os = require('os');
const formatDate = require('./index');

const currentUptime = formatDate(os.uptime());

//console.log(`Current uptime is ${currentUptime}`);
