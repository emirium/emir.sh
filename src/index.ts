import { Elysia } from "elysia";
import { html } from "@elysiajs/html";
import { staticPlugin } from "@elysiajs/static";
import { swagger } from "@elysiajs/swagger";

import { HomePage } from "./views/pages/home";
import { NotFoundPage } from "./views/pages/not-found";

const swaggerOptions = {
  path: "/docs",
  exclude: ["/docs", "/docs/json"],
  documentation: {
    info: {
      title: "API Documentation",
      description: "This is a description",
      version: "1.0.0",
    },
  },
};

const app = new Elysia()
  .use(swagger(swaggerOptions))
  .use(staticPlugin())
  .use(html())
  .get("/", () => HomePage)
  .get("*", () => NotFoundPage)
  .listen(Bun.env.APP_PORT ?? 3000);

console.log(
  `🚀 Server is running at ${app.server?.hostname}:${app.server?.port}`,
);
