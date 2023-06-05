import { NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";

export async function POST(req, res) {
	if (req.method === "POST") {
		const { subject, message } = req.body;
		const sanitizedSubject = subject;
		const sanitizedMessage = message;

		try {
			sgMail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY);

			const msg = {
				to: "gamedevjared@gmail.com",
				from: "hookerhillstudios@gmail.com",
				subject: sanitizedSubject,
				text: sanitizedMessage,
			};

			await sgMail.send(msg);

			// Send the success response
			return NextResponse.json({ success: true });
		} catch (error) {
			console.error(error);

			// Send the error response
			return NextResponse.json({ success: false, error: error.message });
		}
	}

	// Handle other HTTP methods
	return NextResponse.error({
		statusCode: 405,
		message: `Method ${req.method} Not Allowed`,
	});
}
