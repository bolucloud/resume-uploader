/* Amplify Params - DO NOT EDIT
	ENV
	REGION
	STORAGE_RESUMEUPLOADER_BUCKETNAME
	SES_EMAIL
Amplify Params - DO NOT EDIT */

const aws = require("aws-sdk");
const nodemailer = require("nodemailer");
const ses = new aws.SES();
const s3 = new aws.S3();
const transporter = nodemailer.createTransport({
  SES: { ses, aws },
});

exports.handler = async (event) => {
  //eslint-disable-line

  for (const streamedItem of event.Records) {
    if (streamedItem.eventName === "INSERT") {
      const filename = streamedItem.dynamodb.NewImage.resumeFile.S;
      const candidateEmail = streamedItem.dynamodb.NewImage.email.S;
      const candidateName = streamedItem.dynamodb.NewImage.name.S;
      const candidateIdentity = streamedItem.dynamodb.NewImage.userIdentity.S;

      const RESUME_BUCKET =
        process.env.resumeuploader4d5a67a8eb7c4ca797a5f78593a3610b;

      try {
        // get record from s3
        const resumeFile = await s3
          .getObject({
            Bucket: RESUME_BUCKET,
            Key: `protected/${candidateIdentity}/${filename}`,
          })
          .promise();

        // email with attachment
        const mailOptions = {
          from: process.env.SES_EMAIL,
          subject: "Candidate Resume Submission",
          html: `<p>You can reach ${candidateName} at the following email: <b>${candidateEmail}</b></p>`,
          to: process.env.SES_EMAIL,
          attachments: [
            {
              filename,
              content: resumeFile.Body,
            },
          ],
        };

        // send email with transporter
        await transporter.sendMail(mailOptions);
      } catch (e) {
        console.error("Error", e);
      }
    }
  }
  return { status: "done" };
};
