//SENDGRID_API_KEY
import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);
async function sendEmail(req, res) {
  try {
    const msg = {
      to: "marcoluchi11@proton.me",
      from: "marcoaluchi@hotmail.com",
      subject: `${req.body.subject}`,
      html: `<strong> Holis ${req.body.message} de ${req.body.email} </strong>`,
    };

    await sendgrid.send(msg);

    return res.json({ success: "tuvieja" });
  } catch (error) {
    console.log(error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }
}

export default sendEmail;
