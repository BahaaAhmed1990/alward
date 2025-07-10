const log = function (req, res, next) {
    console.log(req.headers['accept'])
    next()
}

module.exports = log