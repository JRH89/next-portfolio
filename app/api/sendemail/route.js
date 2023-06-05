import mail from '@sendgrid/mail';
import { NextResponse, NextRequest } from 'next/server';

export async function POST(request) {
	if (NextRequest.method === "POST") {
		const { subject, message } = new NextRequest.body;
		const sanitizedSubject = subject;
		const sanitizedMessage = message;

		try {
			mail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY);

			const msg = {
				to: "gamedevjared@gmail.com",
				from: "hookerhillstudios@gmail.com",
				subject: sanitizedSubject,
				text: sanitizedMessage,
			};

			await mail.send(msg);

			// Send the success response
			return new NextResponse({ body: { success: true }, status: 200 });
		} catch (error) {
			console.error(error);

			// Send the error response
			return new NextResponse({ body: { success: false, error: error.message }, status: 500 });
		}
	}

	// Handle other HTTP methods
	return new NextResponse({ body: { message: `Method ${request.method} Not Allowed` }, status: 405 });
}
