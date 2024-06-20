const path = require('path')


exports.renderAdmin = (req, res) => {
    res.sendFile(path.join(__dirname, '../views/landingPageAdmin.html'))
}

exports.renderProduct = (req, res) => {
    res.sendFile(path.join(__dirname, '../views/adminDashProduct.html'))
}

exports.renderUser = (req, res) => {
    res.sendFile(path.join(__dirname, '../views/adminDashUser.html'))
}

exports.renderUserHistory = (req, res) => {
    res.sendFile(path.join(__dirname, '../views/userHistory.html'))
}