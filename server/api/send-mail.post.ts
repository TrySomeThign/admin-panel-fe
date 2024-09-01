import nodemailer from "nodemailer";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: useRuntimeConfig().public.userEmail,
      pass: useRuntimeConfig().public.emailPassword,
    },
  });

  const mailOptions = {
    from: useRuntimeConfig().public.userEmail,
    to: body.to,
    subject: body.subject,
    text: body.text,
    html: body.html,
  };

  try {
    // Send mail with defined transport object
    await transporter.sendMail(mailOptions);
    return { success: true, message: "Email sent successfully!" };
  } catch (error) {
    console.error("Error sending email:", error);
    return { success: false, message: "Failed to send email." };
  }
});
