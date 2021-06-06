const productServ = require("../services/productServ");

const allProducts = async (req, res) => {
  try {
    const products = await productServ.AllProductsServ();
    return res.status(200).send(products);
  } catch (error) {
    return res.status(500).send(error);
  }
};

const productByID = async (req, res) => {
  try {
    const product = await productServ.ProductByIdServ(req.params.id);
    return res.status(200).send(product);
  } catch (error) {
    return res.status(500).send(error);
  }
};

const AddProduct = async (req, res) => {
  try {
    const response = await productServ.AddProductServ(req);
    return res.status(200).send({ID : response});
  } catch (error) {
    return res.status(500).send(error);
  }
};


const DeleteProduct = async (req, res) => {
  try {
    const response = await productServ.DeleteProductServ(req.params.id);
    return res.status(200).send({ID : response});
  } catch (error) {
    return res.status(500).send(error);
  }
};

module.exports = {
  allProducts,
  productByID,
  AddProduct,
  DeleteProduct
};
