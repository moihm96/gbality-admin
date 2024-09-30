import { Router } from "express";

const productRouter = Router();

productRouter.get("/products", (req, res) => {
  res.json("DESDE GET");
});

productRouter.post("/products", (req, res) => {
  res.json("DESDE POST");
});

productRouter.put("/products", (req, res) => {
  res.json("DESDE PUT");
});

productRouter.patch("/products", (req, res) => {
  res.json("DESDE PATCH");
});

productRouter.delete("/products", (req, res) => {
  res.json("DESDE DELTE");
});
export default productRouter;
