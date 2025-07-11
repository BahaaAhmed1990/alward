const path = require('path');
const fs = require('fs');

const logController = (req, res) => {
    const { date, pass } = req.query
    console.log(date)
    if (pass !== '789') {
        console.log('wrong pass')
        return res.status(400).send('please add pass')
    }
    if (!date) {
        console.log('no date found')
        return res.status(400).send('please add date on parameters')
    }

    const isValid = /^\d{4}-\d{2}-\d{2}$/g.test(date);
    if (!isValid) {
        console.log('invalid date')
        return res.status(400).send('invalid date')
    }

    const logFilePath = path.resolve(__dirname, '..', 'logs', `${date}.log`);
    console.log(logFilePath)
    fs.access(logFilePath, fs.constants.F_OK, (err) => {
        if (err) {
            console.log('can not access file', err)
            return res.status(404).send('can not access file', err)
        }
    })

    res.sendFile(logFilePath)
}

module.exports = logController