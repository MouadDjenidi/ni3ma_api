const admin = require("firebase-admin");
const { async } = require("rxjs");
const db = admin.firestore();
const geo = require("geofirex").init(admin);
//const geolocationServ = require("../services/geolocationServ");

const allShopsAround = async (req, res) => {
  try {
    const shop = db.collection("shop");
    const center = geo.point(req.body.Latitude, req.body.Longitude);
    const radius = req.body.radius;
    const field = "position";
    geo
      .query(shop)
      .within(center, radius, field)
      .subscribe((snap) => {
        if (snap.length > 0) return res.status(200).send(snap);
        else return res.status(200).send(null);
      });
  } catch (error) {
    return res.status(500).send(error);
  }
};

module.exports = {
  allShopsAround,
};
