const nodemailer = require("nodemailer");

const transport = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "jdiazcolque4@gmail.com",
    pass: "xcyw qycc dbuc fejl",
  },
});

const enviarEmail = async (email, subject, text, name, id) => {
  try {
    const info = await transport.sendMail({
      from: "no-reply@example.com",
      to: `${email}`, // list of receivers
      subject: `${subject}`, // Subject line
      text: `${text}`, // plain text body
      html: `
        <div>
          <h1>Confirma tu correo Electrónico</h1>
          <h2>Bienvenido a ###### ${name} </h2>

          <p>Gracias por elegir nuestros servicios</p>
          <p>Para confirmar tu cuenta por favor haz click en el siguiente botón</p>

          <a href="http://localhost:3001/confirmar/${id}">Confirmar mi cuenta</a>
        </div>
      `,
    });
    console.log("Message sent: %s", info.messageId);
  } catch (error) {
    console.error(error);
  }
};

module.exports = { enviarEmail };
