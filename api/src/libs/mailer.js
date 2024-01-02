import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const email = process.env.EMAIL_SERVER_EMAIL || "maddison53@ethereal.email";
const password = process.env.EMAIL_PASSWORD || "jn7jnAPss4f63QBp6D";

export const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // `true` for port 465, `false` for all other ports
  auth: {
    user: email,
    pass: password,
  },
  tls: {
    rejectUnauthorized: false
  }
});