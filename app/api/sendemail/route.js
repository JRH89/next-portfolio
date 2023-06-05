import mail from '@sendgrid/mail';
import { NextResponse, NextRequest } from 'next/server';

export async function POST(request) {
	if (request.method === 'POST') {
		const { subject, message } = await request.body.json();

		try {
			mail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY);

			const msg = {
				to: 'gamedevjared@gmail.com',
				from: 'hookerhillstudios@gmail.com',
				subject: subject,
				text: message,
			};

			await mail.send(msg);

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
		message: `Method ${request.method} Not Allowed`,
	});
}
