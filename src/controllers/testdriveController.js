const path = require('path')


exports.render = (req, res) => {
    res.sendFile(path.join(__dirname, '../views/testdrive2.html'))
}