const admin = require("firebase-admin");
const db = admin.firestore();

const AllProductsServ = async () => {
  const response = [];
  await db
    .collection("product")
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        if (doc.exists) {
          const product = doc.data();
          const selectedItem = {
            ID: doc.id,
            Marque: product.marque,
            Name: product.name,
            CategoryID: product.category.id,
          };
          response.push(selectedItem);
        }
      });
    });
  return response;
};

const ProductByIdServ = async (id) => {
  const productDoc = db.collection("product").doc(id);
  let product = await productDoc.get();
  let response = product.data();
  const selectedItem = {
    ID: id,
    Marque: response.marque,
    Name: response.name,
    CategoryID: response.category.id,
  };
  return selectedItem;
};

const AddProductServ = async (req) => {
  /* const productDoc = db.collection("product").doc();
 await productDoc.create({
    marque: req.body.marque,
    name: req.body.name,
    category: db.doc('category/' + req.body.category),
  }).then((docRef) => {
    console.log("Document written with ID: ", docRef.id);
  })
.catch((error) => {
    console.error("Error adding document: ", error);
});*/
  if (req.body.ID === 0) {
    const res = await db.collection("product").add({
      marque: req.body.marque,
      name: req.body.name,
      category: db.doc("category/" + req.body.category),
    });
    return "inserted";
    //return res.id;
  } else {
    const productDoc = db.collection("product").doc(req.body.ID);
    await productDoc.update({
      marque: req.body.marque,
      name: req.body.name,
      category: db.doc("category/" + req.body.category),
    });
    return "updated";
  }
};

const DeleteProductServ = async (ID) => {
    try {
        const productDoc = db.collection("product").doc(ID);
        await productDoc.delete();
        return "deleted";
    } catch (error) {
        return "not deleted"+error;
    }
};

module.exports = {
  AllProductsServ,
  ProductByIdServ,
  AddProductServ,
  DeleteProductServ
};
