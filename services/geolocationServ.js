const { query } = require("express");
const admin = require("firebase-admin");
const db = admin.firestore();

const geo = require('geofirex').init(admin);

/*geo.query(shop).within(center, radius, field).subscribe(snap => {
    snap.forEach((doc) => {
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
    });*/
    
module.exports = {
    
};
