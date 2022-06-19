const express = require("express"); // Importar express
const router = express.Router();
const envio = require('../correo')
const admin = require('firebase-admin');

const serviceAccount = require('../users-data-f73bd-firebase-adminsdk-m4ouw-27cd18cae5.json')

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://users-data-f73bd-default-rtdb.firebaseio.com' //CAMBIAR!!!!
});

const db = admin.database();

router.post('/contacto', envio.enviarCorreo);

router.get('/configuracion/:cuenta', (req, res) =>{
    const { cuenta } = req.params;
    console.log(cuenta);
    db.ref('contacts/'+cuenta).once('value', (snapshot) => {
        const data = snapshot.val();
        console.log(data);
        res.send(data)
    })
});

module.exports = router;