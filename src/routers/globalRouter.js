import express from "express";

const globalRouter = express.Router();

const handleHomde = (req, res) => res.send("Home");

globalRouter.get("/", handleHomde);

export default globalRouter;
