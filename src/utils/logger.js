const fs = require('fs');
const path = require('path');

const logFile = path.join(__dirname, '../../access.log');
const logStream = fs.createWriteStream(logFile, { flags: 'a' });

exports.logRequests = logStream;
