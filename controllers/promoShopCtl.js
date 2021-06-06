const promoShopServ = require("../services/promoShopServ");


const promoShopByShopId = async (req, res) => {
  try {
    const product = await promoShopServ.promoShopByShopIdServ(req.params.id);
    return res.status(200).send(product);
  } catch (error) {
    return res.status(500).send(error);
  }
};

module.exports = {
    promoShopByShopId
};
