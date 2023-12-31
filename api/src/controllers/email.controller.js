import { Resend } from "resend";
import dotenv from "dotenv";
dotenv.config();

const resend = new Resend(process.env.EMAIL_API_KEY);
const email_to = process.env.EMAIL_DESTINATION;

export const sendEmail = async (req, res) => {
  const { email, fullname, subject, message } = req.body;
  console.log(email, fullname, subject, message)
  try {
    const {data, error } = await resend.emails.send({
      from: `"${fullname}" <${email}>`,
      to: [`${email_to}`],
      subject: subject,
      html: `<strong>${message}</strong>`,
    });

    console.log("data->", data);
    console.log("error->", error);

    if(error) return res.status(error.statusCode).json(error)

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
