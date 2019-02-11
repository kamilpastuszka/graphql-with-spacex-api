import express from "express";
import bodyParser from "body-parser";
import expressGraphQL from "express-graphql";

import schema from "./schema";
import resolvers from "./resolvers";

const app = express();

app.use(
  "/graphql",
  bodyParser.json(),
  expressGraphQL({
    schema,
    rootValue: resolvers,
    graphiql: true
  })
);

app.listen(8800, () => console.log("server is running on port 8800"));
