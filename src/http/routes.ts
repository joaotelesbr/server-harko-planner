import { FastifyInstance } from "fastify";
import { invite } from "./controller/create-invitation";

export async function appRouter(app: FastifyInstance) {
  app.post("/create-invitation", invite);
}
