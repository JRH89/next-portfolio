import { NextResponse } from 'next/server';
import mail from '@sendgrid/mail';

export async function sendEmail(req) {
	if (req.method === 'POST') {
		const { subject, message } = await req.body;

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
	} else {
		return NextResponse.error({
			statusCode: 405,
			message: `Method ${req.method} Not Allowed`,
		});
	}
}

export async function POST(req) {
	sendEmail(req);
}

export async function GET(req) {
	return NextResponse.json({ message: 'GET method is not supported for this route' });
}
