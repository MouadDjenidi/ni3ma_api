const admin = require("firebase-admin");
const db = admin.firestore();

const promoShopByShopIdServ = async (id) => {
  const response = [];  
  const promotionDoc = db.collection("promotion").where("shop" , "==" , db.doc("shop/" + id));
  await promotionDoc.get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      if (doc.exists) {
        const promotion = doc.data();
        const selectedItem = {
          ID: doc.id,
          amount: promotion.amount,
          created: promotion.created,
          description : promotion.description,
          endDate : promotion.endDate,
          priceAfter : promotion.priceAfter,
          priceBefor : promotion.priceBefor,
          productID :  promotion.product.id,
          rank : promotion.rank,
          rankCounter : promotion.rankCounter,
          startDate : promotion.startDate,
          status : promotion.status,
          taux : promotion.taux,
          updated : promotion.updated,
          shopID : promotion.shop.id
        };
        response.push(selectedItem);
      }
    });
  });
  return response;
};

module.exports = {
    promoShopByShopIdServ
};
