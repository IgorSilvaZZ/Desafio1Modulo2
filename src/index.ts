import express from "express";
import swagger from "swagger-ui-express";

import swaggerOptions from "./swagger.json";

import { usersRoutes } from "./routes/users.routes";

const app = express();

app.use(express.json());

app.use("/users", usersRoutes);

app.use("/api-doc", swagger.serve, swagger.setup(swaggerOptions));

export { app };
