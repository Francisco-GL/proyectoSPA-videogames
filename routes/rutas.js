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

router.post('/contacto', envio.enviarCorreo)

router.post('/new-contact', (req, res) => {
    console.log(req.body);
    const newContact = {
        contra: req.body.contra,
        contra2: req.body.contra2,
        cuenta: req.body.cuenta,
        mail: req.body.mail,
        nombre: req.body.nombre
    };
    db.ref('contacts/'+req.body.cuenta).push(newContact);
    res.send('recibido');
});

router.get('/configuracion/:cuenta', (req, res) =>{
    const {cuenta} = req.params;
    console.log(cuenta);
    db.ref('contacts/'+cuenta).onValue(starCountRef, (snapshot) => {
        const data = snapshot.val();
        alert(data.cuenta);
        res.send({
            data: data
        })
    })
});

module.exports = router;