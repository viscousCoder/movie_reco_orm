// require("reflect-metadata");
// const express = require("express");
// const bodyParser = require("body-parser");
// const cors = require("cors");
// const { ApolloServer } = require("@apollo/server");
// const { expressMiddleware } = require("@apollo/server/express4");
// const { graphQLSchema } = require("./schema/graphqlSchema");
// const { graphQLResolver } = require("./resolver/graphQLResolver");
// const { dataSource } = require("./database/database");
// const typeorm = require("typeorm");
// const path = require("path");

// const PORT = 6999;
// async function startApolloServer() {
//   const app = express();
//   app.use(bodyParser.json());
//   //   app.use(cors());
//   app.use(cors({ origin: "*" }));

//   const server = new ApolloServer({
//     typeDefs: graphQLSchema,
//     resolvers: graphQLResolver,
//   });

//   await server.start();
//   app.use("/graphql", expressMiddleware(server));

//   // console.log(dataSource);
//   // dataSource
//   //   .initialize()
//   //   .then(() => {
//   //     console.log("database connect successfully");
//   //     app.listen(PORT, () => console.log(`Server is running at port ${PORT}`));
//   //   })
//   //   .catch((error) => console.log("Some errot", error));
//   const dataSource = new typeorm.DataSource({
//     type: "postgres",
//     host: "localhost",
//     port: 5432,
//     username: "postgres",
//     password: "Aman2001",
//     database: "movieorm",
//     synchronize: true,
//     entites: [path.join(__dirname, "..", "entity/**/*.js")],
//   });

//   dataSource
//     .then(() => console.log("Server is runnig"))
//     .catch((err) => console.log(err));

//   app.listen(PORT, () => console.log(`Server is running at port ${PORT}`));
// }

// startApolloServer();

// // SQLPORT=5432
// // SQLUSER=postgres
// // SQLHOST=localhost
// // SQLDATABASE=movieorm
// // SQLPASSWORD=Aman2001

require("reflect-metadata");
const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();
const cors = require("cors");
const { ApolloServer } = require("@apollo/server");
const { expressMiddleware } = require("@apollo/server/express4");
const { graphQLSchema } = require("./schema/graphQLSchema.js");
const { graphQLResolver } = require("./resolver/graphQLResolver.js");
const typeorm = require("typeorm");
const path = require("path");
const { dataSource } = require("./database/database.js");

const PORT = process.env.CUSTOMHOSTEDPORT || 6999;

async function startApolloServer() {
  const app = express();
  app.use(bodyParser.json());
  app.use(cors({ origin: "*" }));

  const server = new ApolloServer({
    typeDefs: graphQLSchema,
    resolvers: graphQLResolver,
  });

  await server.start();
  app.use("/graphql", expressMiddleware(server));

  // Create and initialize the dataSource

  // Initialize the dataSource and start the server only after successful initialization
  try {
    await dataSource.initialize();
    console.log("Database connected successfully");

    app.listen(PORT, () => console.log(`Server is running at port ${PORT}`));
  } catch (err) {
    console.error("Database connection error:", err);
  }
}

startApolloServer();
