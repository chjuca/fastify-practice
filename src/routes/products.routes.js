const productController = require("../controllers/product.controller")

const productSchema = {
  type: 'object',
  properties: {
      id: { type: 'string' },
      title: { type: 'string' },
      price: { type: 'number' },
      image: { type: 'string' },
      description: { type: 'string' },
      quantity: { type: 'number' },
  },
};

const routes = [
  {
      url: "/products",
      method: "GET",
      handler: productController.getProducts,
      schema: {
          summary: 'Get all products',
          description: 'Fetch a list of all available products.',
          tags: ["Products"],
          response: {
              200: {
                  description: 'List of products',
                  type: 'array',
                  items: productSchema,
              },
          },
      },
  },
  {
      url: "/products/:id",
      method: "GET",
      handler: productController.getProductByID,
      schema: {
          summary: 'Get product by ID',
          description: 'Fetch details of a specific product by its ID.',
          tags: ["Products"],
          params: {
              type: 'object',
              properties: {
                  id: { type: 'string', description: 'Product ID' },
              },
          },
          response: {
              200: {
                  description: 'Product details',
                  ...productSchema,
              },
              404: {
                  description: 'Product not found',
                  type: 'object',
                  properties: {
                      message: { type: 'string' },
                  },
              },
          },
      },
  },
  {
      url: "/products",
      method: "POST",
      handler: productController.createProduct,
      schema: {
          summary: 'Create a new product',
          description: 'Add a new product to the system.',
          tags: ["Products"],
          body: {
            type: 'object',
            properties: {
                title: { type: 'string' },
                price: { type: 'number' },
                image: { type: 'string' },
                description: { type: 'string' },
                quantity: { type: 'number' },
            },
          },
          response: {
              201: {
                  description: 'Product created',
                  ...productSchema,
              },
          },
      },
  },
  {
      url: "/products/:id",
      method: "PUT",
      handler: productController.updateProduct,
      schema: {
          summary: 'Update a product',
          description: 'Update an existing product\'s details by ID.',
          tags: ["Products"],
          params: {
              type: 'object',
              properties: {
                  id: { type: 'string', description: 'Product ID' },
              },
          },
          body: {
            type: 'object',
            properties: {
                title: { type: 'string' },
                price: { type: 'number' },
                image: { type: 'string' },
                description: { type: 'string' },
                quantity: { type: 'number' },
            },
          },
          response: {
              200: {
                  description: 'Product updated',
                  ...productSchema,
              },
              404: {
                  description: 'Product not found',
                  type: 'object',
                  properties: {
                      message: { type: 'string' },
                  },
              },
          },
      },
  },
  {
      url: "/products/:id",
      method: "DELETE",
      handler: productController.deleteProduct,
      schema: {
          summary: 'Delete a product',
          description: 'Remove a product by its ID.',
          tags: ["Products"],
          params: {
              type: 'object',
              properties: {
                  id: { type: 'string', description: 'Product ID' },
              },
          },
          response: {
              200: {
                  description: 'Product deleted',
                  type: 'object',
                  properties: {
                      message: { type: 'string' },
                  },
              },
              404: {
                  description: 'Product not found',
                  type: 'object',
                  properties: {
                      message: { type: 'string' },
                  },
              },
          },
      },
  }
];


module.exports = routes