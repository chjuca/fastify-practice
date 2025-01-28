require('dotenv').config();
const productsRoutes = require('./routes/products.routes')
const fastify = require('fastify')({
    logger: true
})

const fastifySwagger = require('@fastify/swagger');
const fastifySwaggerUi = require('@fastify/swagger-ui');

const host = process.env.HOST || 'localhost';

fastify.register(fastifySwagger, {
    openapi: {
      openapi: '3.0.0',
      info: {
        title: 'Product API',
        description: 'API documentation for managing products',
        version: '0.1.0'
      },
      servers: [
        {
          url: `${host}`,
          description: 'Development server'
        }
      ],
      externalDocs: {
        url: 'https://swagger.io',
        description: 'Find more info about Swagger here'
      }
    }
  });

  fastify.register(fastifySwaggerUi, {
    routePrefix: '/docs',
    uiConfig: {
      docExpansion: 'full',
      deepLinking: false
    },
    uiHooks: {
      onRequest: function (_request, _reply, next) {
        next();
      },
      preHandler: function (_request, _reply, next) {
        next();
      }
    },
    staticCSP: true,
    transformStaticCSP: (header) => header,
    transformSpecification: (swaggerObject) => {
      return swaggerObject;
    },
    transformSpecificationClone: true
  });

require("./utils/mongoose")

productsRoutes.forEach(productRoute => {
    fastify.register((fastify, options, done) => {
        fastify.route(productRoute)
        done();
    })
})

const start = async () => {
    await fastify.listen({ port: 3000 , host: "0.0.0.0"})
}


start()

