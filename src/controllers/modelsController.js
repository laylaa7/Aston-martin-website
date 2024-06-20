const path = require('path')


exports.renderModel = (req, res) => {
    res.sendFile(path.join(__dirname, '../views/models.html'))
}


exports.renderConfig = (req, res) => {
    res.sendFile(path.join(__dirname, '../views/config.html'))
}

exports.renderEnquire = (req, res) => {
        res.sendFile(path.join(__dirname, '../views/enquire.html'))
}