exports.options = {
    routePrefix: '/documentation',
    exposeRoute: true,
    swagger: {
        info: {
            title: "Node.js Fastify Mongodb API",
            description: "",
            version: "0.0.1"
        },
        externalDocs: {
            url: "https://swagger.io",
            description: "Find more info here"
        }
    },
    host: "localhost:3000",
    schemas: ["http"],
    consumes: ["application/json"],
    produces: ["application/json"],
  }