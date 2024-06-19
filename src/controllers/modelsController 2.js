const path = require('path')


exports.render = (req, res) => {
    res.sendFile(path.join(__dirname, '../views/models.html'))
}


exports.getCar = (req, res) => {
    const car = req.params.car
    res.json({car: car})
}