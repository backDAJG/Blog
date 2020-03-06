const ctrl = {}

ctrl.index = (req, res) => {
    res.send('index page')
}

ctrl.like = (req, res) => {
    res.send('like')
}

ctrl.view = (req, res) => {
    res.send('view')
}

ctrl.comment = (req, res) => {
    res.send('comment')
}

module.exports = ctrl