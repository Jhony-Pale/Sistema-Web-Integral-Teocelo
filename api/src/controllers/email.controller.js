import { transporter } from "../libs/mailer.js";
import dotenv from "dotenv";

dotenv.config();

const email_from =
  process.env.EMAIL_SERVER_EMAIL || "maddison53@ethereal.email";
const email_to = process.env.EMAIL_DESTINATION || "maddison53@ethereal.email";

export const sendEmail = async (req, res) => {
  const { email, fullname, subject, message } = req.body;

  try {
    const info = await transporter.sendMail({
      from: `"Server" <${email_from}>`,
      to: [`${email_to}`],
      subject: subject,
      html: `
      <strong>
      Correo: ${email} <br /> 
      Nombre: ${fullname} <br />
      </strong> <br /> 
      <p>${message}</p>`,
    });

    res.status(200).json(info);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
