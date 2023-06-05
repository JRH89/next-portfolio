"use client"
import React, { useState } from "react";
import Loading from "@/utils/Loading";

export default function POST() {
	const [showMessage, setShowMessage] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");

	async function handleSubmit(event) {
		event.preventDefault();
		setIsLoading(true);

		const subject = event.target.elements.subject.value;
		const message = event.target.elements.message.value;

		try {
			const response = await fetch("/api/sendemail", {
				method: "POST",
				body: JSON.stringify({
					to: "mycarddigitalbusinesscards@gmail.com",
					subject: `${subject}`,
					from: "hookerhillstudios@gmail.com",
					message: `${message}`,
				}),
				headers: {
					"Content-Type": "application/json",
				},
			});

			if (response.ok) {
				setShowMessage(true);
				event.target.reset();
			} else {
				const data = await response.json();
				setErrorMessage(data.errors[0].message);
				setShowMessage(false);
			}

			setIsLoading(false);

			setTimeout(() => {
				setShowMessage(false);
				setErrorMessage("");
			}, 5000);
		} catch (error) {
			console.error(error);
			setIsLoading(false);
		}
	}

	return (
		<>
			<div className="flex text-center justify-center">
				{isLoading && <Loading />}
			</div>

			{!isLoading && showMessage ? (
				<div className="p-2 rounded-md flex flex-col border-red-400 border border-solid justify-center ml-10 mr-10 mx-auto my-auto text-green-400 text-center">
					Thank you for reaching out,
					<br /> we will review your email and <br />
					be in touch as soon as possible.
					<br />
					<br />
					<p className="text-blue-400">-My Card Support</p>
				</div>
			) : (
				<>
					{errorMessage && (
						<div className="p-2 rounded-md flex flex-col border-red-400 border border-solid justify-center ml-10 mr-10 mx-auto my-auto text-red-400 text-center">
							Error occurred while sending email: {errorMessage}
						</div>
					)}
					<form
						className="flex flex-col text-center text-white"
						onSubmit={handleSubmit}
					>
						<p className="text-blue-400 font-extrabold text-2xl">Subject:</p>
						<input
							className="p-2 rounded-md text-black mb-4"
							type="text"
							name="subject"
							placeholder="Subject"
						/>

						<p className="text-green-400 font-extrabold text-2xl">Message:</p>
						<textarea
							className="p-2 rounded-md text-black"
							name="message"
							rows="5"
							cols="30"
							placeholder="Your Message"
						></textarea>
						<input
							className="cursor-pointer font-extrabold hover:opacity-50 hover:scale-95 text-2xl text-red-400 mt-4 border-2 border-solid border-red-400 rounded-md"
							type="submit"
							value="Send"
						/>
					</form>
				</>
			)}
		</>
	);
}
