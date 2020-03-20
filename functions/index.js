//Poss[íveis problemas https://stackoverflow.com/questions/19877246/nodemailer-with-gmail-and-nodejs

const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');
const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();
const cors = require("cors")({
    origin: true
});

exports.emailViaForm = functions.https.onRequest((req, res) => {
    console.log("[Site Agroecologia em Rede] Inicio da Função");
    const { nome, email, cidade, estado, mensagem } = req.body;
    return cors(req, res, () => {
        console.log('[Site Agroecologia em Rede]', nome, email, cidade, estado, mensagem);
         const html = `<div>
                        <h4>Dados da mensagem</h4>
                        <ul>
                        <li>
                        Nome - ${nome || ""}
                        </li>
                        <li>
                        Email - ${email || ""}
                        </li>
                        <li>
                        Estado - ${cidade || ""}
                        </li>
                        <li>
                        Estado - ${estado || ""}
                        </li>
                        </ul>
                        <h4>Message</h4>
                        <p>${mensagem || ""}</p>
                </div>`;
        
        var sesAccessKey = 'agroecologianeaes@gmail.com';
        var sesSecretKey = 'Bordi1973';
        
        // console.log("[Site Agroecologia em Rede] email:", sesAccessKey);
        
        var transporter = nodemailer.createTransport(smtpTransport({
            service: 'gmail',
            auth: {
                user: sesAccessKey,
                pass: sesSecretKey
            }
        }));
        const mailOptions = {
            to: "andre.bordignon@ifsp.edu.br, neaes.ifsp@gmail.com",
            from: "agroecologianeaes@gmail.com",
            subject: `${nome} enviou uma mensagem para você`,
            text: html,
            html: html
        };
        console.log(" [Site Agroecologia em Rede] [Function] Antes de chamar sendMail");
        transporter.sendMail(mailOptions, function (error, info) {
            console.log("[Site Agroecologia em Rede] Fim da função");
            if (error) {
                console.log("[Site Agroecologia em Rede] Erro:", error.message);
            }
            console.log("[Site Agroecologia em Rede] Fim da função");
            let mensagem = "<h3 style='font-family:arial'>Mensagem enviada com sucesso</h3><h4>Obrigado por entrar em contato.</h4>";
            mensagem = mensagem + "<a href='https://site-de-agroecologia-new.web.app/'>Voltar para a página principal</a>";
            // res.status(200).send({
            //     // message: "[Site Agroecologia em Rede] success"
            //     mensagem
            // })
            res.status(200).send(mensagem)
        });
    });
});