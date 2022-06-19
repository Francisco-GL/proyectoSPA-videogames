const { request, response } = require('express');
const nodemailer = require('nodemailer');

const enviarCorreo = (req=request, resp=response) => {
    let body = req.body;

    let config = nodemailer.createTransport({
        host:'smtp.gmail.com',
        post:587,
        auth: {
            user: 'infogamesoficial1@gmail.com',
            pass:'nhbsueyhlitrxlwk'
        }
    });

    const options = {
        from: 'InfoGames',
        subject: body.asunto,
        to: body.email,
        text: body.mensaje
    };

    config.sendMail(options, function(error, res){
        
        if(error) return resp.json({ok: false, msg: error});
        return resp.json({
            ok:true,
            msg:res
        })
    })
}

module.exports = {
    enviarCorreo
}