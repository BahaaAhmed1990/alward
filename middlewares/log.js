const path = require('path');
const fs = require('fs');

const log = function (req, res, next) {
    // console.log(req.url)
    // console.log('==============')
    const acceptHeader = req.headers['accept'] || '';

    if (!acceptHeader.includes('text/html')) {
        return next();
    }
    const logsDir = path.resolve(__dirname, '..', 'logs');
    if (!fs.existsSync(logsDir)) {
        fs.mkdirSync(logsDir, { recursive: true })
    }

    const now = new Date();
    const date = now.toISOString().split('T')[0];
    const logFilePath = path.resolve(__dirname, '..', 'logs', `${date}.log`);
    const logEntry = `${now.toISOString()} | ${req.method}  ${req.url} | ${req.ip}\n`


    fs.appendFile(logFilePath, logEntry, (err) => {
        if (err) console.log("error can't write to file", err)
    })
    // console.log(date)


    next()
}

module.exports = log