const { product } = require("./../models/products.model");

module.exports.oneProduct = (req, res) => {
    const id = req.params.id
    product.findOne({_id: id})
        .then(response => res.json(response))
        .catch(err => res.json(err))
}


module.exports.allProducts = (req, res) => {
    product.find({})
        .then(response => res.json(response))
        .catch(err => res.json(err))
}

module.exports.createProduct = (req, res) => {
    product.create(req.body)
        .then(product => res.json(product))
        .catch(err => res.json(err))
}