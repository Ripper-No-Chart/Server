const express = require("express");
const router = express.Router();

const { getAll, findById, addNewProduct, editById, deleteById } = require("../utils");

//***************************//
//HTTP STATE CODES//
//***************************//
const STATUS_OK = 200;

//***************************//
//API STRUCTURE//
//***************************//
router.get("/api/", (req, res) => {
  //Get All: Get all products
  getAll()
    .then((value) => res.status(STATUS_OK).json(value))
    .catch((e) => res.sendStatus(e));
});

router.get("/api/:id", (req, res) => {
  //Get By ID: Find product by ID
  const { id } = req.params;
  findById(id)
    .then((value) => res.status(STATUS_OK).json(value))
    .catch((e) => res.sendStatus(e));
});

router.post("/api/", (req, res) => {
  //Add Product: Add a new product
  const { product, price } = req.body;
  addNewProduct(product, price)
    .then((value) => res.status(STATUS_OK).json(value))
    .catch((e) => res.sendStatus(e));
});

router.put("/api/", (req, res) => {
  //Edit: Edit by ID
  const { id, product, price } = req.body;
  editById(id, product, price)
    .then((value) => res.status(STATUS_OK).send(value))
    .catch((e) => res.sendStatus(e));
});

router.delete("/api/", (req, res) => {
  //Delete: delete by ID
  const { id } = req.body;
  deleteById(id)
    .then((value) => res.status(STATUS_OK).json(value))
    .catch((e) => res.sendStatus(e));
});

//***************************//
//VIEWS STRUCTURE//
//***************************//
router.get("/views/", (req, res) => {
  //Get All: Get all products
  getAll()
    .then((value) => res.status(STATUS_OK).render("../views/products", { value: value }))
    .catch((e) => res.sendStatus(e));
});

module.exports = router;
