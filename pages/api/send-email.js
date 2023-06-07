export default async function handler(req, res) {
	if (req.method === "POST") {
		const { subject, message, html } = req.body;
		const sgMail = require("@sendgrid/mail");
		sgMail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY);
		const msg = {
			to: "gamedevjared@gmail.com",
			from: "hookerhillstudios@gmail.com",
			subject: subject,
			text: message,
			html: html,
		};

		try {
			await sgMail.send(msg);
			res.status(200).json({ message: 'Email sent successfully' });
		} catch (error) {
			console.error(error);

			if (error.response) {
				console.error(error.response.body);
			}

			res.status(500).json({ success: false });
		}
	} else {
		res.status(404).json({ message: "Invalid request method" });
	}
}
