export default async function POST(req, res) {
	if (req.method === "POST") {
		const { subject, message, to, html } = req.body;
		const sgMail = require("@sendgrid/mail");
		sgMail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY);
		const msg = {
			to: to,
			from: "hookerhillstudios@gmail.com",
			subject: subject,
			text: message,
			html: html,
		};

		try {
			await sgMail.send(msg);
			res.status(200).json({ success: true });
		} catch (error) {
			console.error(error);

			if (error.response) {
				console.error(error.response.body);
			}

			res.status(500).json({ success: false });
		}
	} else {
		res.setHeader("Allow", ["POST"]); // Set the allowed methods
		res.status(405).json({ message: `Method ${req.method} Not Allowed` });
	}
}
