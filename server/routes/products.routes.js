const ProductController = require('../controllers/products.controller')

module.exports = app =>{
    app.get("/api/products", ProductController.allProducts)
    app.post("/api/products/new", ProductController.createProduct)
    app.get("/api/products/:id", ProductController.oneProduct)
}