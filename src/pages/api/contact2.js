import {
  mailOptions,
  Options,
  transporter,
} from "../../components/config/nodemailer";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = req?.body;

    if (!data) {
      return res.status(400).json({ message: "Bad Request" });
    }

    try {
      await transporter.sendMail({
        ...mailOptions,
        // ...generateEmailContent(data),
        subject: `Message From ${data.name}`,
       
        html: `<h1>Sender: ${data.name}</h1> <h6>Sender Email ${
          data.email
        } </h6> <p>Mobile Number : ${
          data.phoneNumber ? data.phoneNumber : ""
        }</p> <p> Address : ${data.address ? data.address : ""}</p> <p>${
          data.comment ?? ""
        }</p> `,
      });

      console.log("Email sent successfully");
      return res.status(201).json({ success: true });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: error.message });
    }
  }
  return res.status(400).json({ message: "Bad Request" });
};

export default handler;
