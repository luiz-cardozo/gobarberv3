import { Router } from "express";

const routes = Router();

routes.get("/", (req, res) => res.json({ ok: "Hello world" }));

export default routes;
