const Cat = require('../new/catmodel')

createCat = (req, res) => {
    const body = req.body
    if (!body) {
        return res.status(400).json({ error: 'You must provide a cat'})
    }
    const cat = new Cat(body)
    if (!cat) {
        return res.status(400).json({ error: err })
    }
    cat
        .save()
        .then(() => {
            return res.status(201).json({
                id: cat._id,
                message: 'Cat created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Cat not created!',
            })
       })
}
updateCat = async (req, res) => {
    const body = req.body
    if (!body) {
        return res.status(400).json({
            error: 'You must provide data to update',
        })
    }
    Cat.findOne({ _id: req.params.id }, (err, cat) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Cat not found!',
            })
        }
        cat.name = body.name
        cat.sex = body.sex
        cat.detail = body.detail
        cat.age = body.age
        cat.url = body.url
        cat
            .save()
            .then(() => {
                return res.status(200).json({
                    id: cat._id,
                    message: 'Cat updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Cat not updated!',
                })
            })
    })
}

deleteCat = async (req, res) => {
    await Cat.findOneAndDelete({ _id: req.params.id }, (err, cat) => {
        if (err) {
            return res.status(400).json({ error: err })
        }

        if (!cat) {
            return res
                .status(404)
                .json({ error: `Cat not found` })
        }

        return res.status(200).json({ data: cat })
    }).catch(err => console.log(err))
}

getCatById = async (req, res) => {
    await Cat.findOne({ _id: req.params.id }, (err, cat) => {
        if (err) {
            return res.status(400).json({ error: err })
        }
        if (!cat) {
            return res
                .status(404)
                .json({ error: `Cat not found` })
        }
        return res.status(200).json({ data: cat })
    }).catch(err => console.log(err))
}

getCats = async (req, res) => {
    await Cat.find({}, (err, cats) => {
        if (err) {
            return res.status(400).json({ error: err })
        }
        if (!cats.length) {
            return res
                .status(404)
                .json({ error: `Cat not found` })
        }
        return res.status(200).json({ data: cats })
    }).catch(err => console.log(err))
}

module.exports = {
    createCat,
    updateCat,
    deleteCat,
    getCatById,
    getCats,
} 
