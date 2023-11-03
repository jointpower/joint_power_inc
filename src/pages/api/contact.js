import SibApiV3Sdk from "sib-api-v3-sdk";

let defaultClient = SibApiV3Sdk.ApiClient.instance;
let apiKey = defaultClient.authentications["api-key"];
apiKey.apiKey = process.env.BREVO_API_KEY;

let apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

export default function handler(req, res) {
  let sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();

  const { email, name, phoneNumber, comment } = req.body;
  console.log(req.body);

  sendSmtpEmail = {
    to: [{ email, name }],
    templateId: 2,
    params: { name, email },
  };

  apiInstance.sendTransacEmail(sendSmtpEmail).then(
    function (data) {
      res.status(200).json(data);
      console.log("API called successfully. Returned data: " + data);
    },
    function (error) {
      console.error(error);
      res.status(400).json(error);
    }
  );
}
