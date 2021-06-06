const admin = require("firebase-admin");
const { async } = require("rxjs");

const createuser = async (req, res) => {
    try {
        const { displayName, password, email, role } = req.body
 
        if (!displayName || !password || !email || !role) {
            return res.status(400).send({ message: 'Missing fields' })
        }
 
        const { uid } = await admin.auth().createUser({
            displayName,
            password,
            email
        })

        return res.status(201).send({ uid })
    } catch (err) {
        return handleError(res, err)
    }
};

const getuserbyuid = async (req, res) => {
    admin.auth().getUser(req.params.uid)
    .then((userRecord) => {
    return res.status(201).send({ userRecord })
    })
    .catch((error) => {
      console.log('Error fetching user data:', error);
    });
}

const test = async (req , res) => {
   admin
  .auth()
  .getUsers([
    { email: req.body.email },
    { password: req.body.password },

  ])
  .then((getUsersResult) => {
    console.log('Successfully fetched user data:');
    getUsersResult.users.forEach((userRecord) => {
      console.log(userRecord);
    });

    console.log('Unable to find users corresponding to these identifiers:');
    getUsersResult.notFound.forEach((userIdentifier) => {
      console.log(userIdentifier);
    });
  })
  .catch((error) => {
    console.log('Error fetching user data:', error);
  });
}


function handleError(res, err) {
    return res.status(500).send({ message: `${err.code} - ${err.message}` });
}

const verifyToken = async (req, res) =>{
     const token = req.headers.authorization.replace(/^Bearer\s/, '');

     admin
     .auth()
     .verifyIdToken(token)
     .then((claims) => {
         console.log(claims);
       //if (claims.admin === true) {
         
       //}
     });
}

 /* await admin.auth().setCustomUserClaims(uid, { role })

       /* await admin.auth().createCustomToken(uid)
        .then((customToken) => {
            customTok = customToken;
            console.log(customToken);
        }).catch((error) => {
            console.log(error);
        });*/


module.exports = {
    createuser,
    getuserbyuid,
    test,
    verifyToken
};