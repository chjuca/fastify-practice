const Product = require("../models/product.model")

const getProducts = async (_request, reply) => {
    try {
        const products = await Product.find()
        return products
    } catch (error) {
        reply.code(500).send(error) 
    }
}

const getProductByID = async (request, reply) => {

    try {
        const {id} = request.params
        const product = await Product.findById(id)
        if(product){
            reply.code(200).send(product)
        } else {
            reply.code(200).send({message: "Product doesn't exist"})
        }
    } catch (error) {
        reply.code(500).send(error) 
    }
}

const createProduct = async (request, reply) => {
    try {
        const {body} = request
        const newProduct = new Product(body)
        await newProduct.save()
        reply.code(201).send(newProduct)
    } catch (error) {
        reply.code(500).send(error) 
    }
}

const updateProduct = async (_request, reply) => {
    try {
        const {id} = request.params
        const {body} = request
        const product = await Product.findByIdAndUpdate(id, body, { new: true })
        reply.code(200).send(product)
    } catch (error) {
        reply.code(500).send(error) 
    }
}

const deleteProduct = async (_request, reply) => {
    try {
        const {id} = request.params
        await Product.findByIdAndDelete(id)
        reply.code(204).send()
    } catch (error) {
        reply.code(500).send(error) 
    }
}

module.exports = {
    getProducts,
    getProductByID,
    createProduct,
    updateProduct,
    deleteProduct
}