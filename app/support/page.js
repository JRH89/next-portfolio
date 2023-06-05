"use client"
import React, { useState } from "react";
import DOMPurify from "dompurify";
import Loading from "@/utils/Loading";

export default function Settings() {
	const [showMessage, setShowMessage] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	async function handleSubmit(event) {
		event.preventDefault();
		setIsLoading(true);

		const subject = DOMPurify.sanitize(event.target.elements.subject.value);
		const message = DOMPurify.sanitize(event.target.elements.message.value);

		try {
			const response = await fetch("/api/sendemail", {
				method: "POST",
				body: JSON.stringify({
					to: "gamedevjared@gmail.com",
					subject: `${subject}`,
					from: "hookerhillstudios@gmail.com",
					message: `${message}`,
				}),
				headers: {
					"Content-Type": "application/json",
				},
			});

			const data = await response.json();

			setIsLoading(false);

			if (response.ok) {
				setShowMessage(true);
				event.target.reset();
			} else {
				setShowMessage(false);
				console.log(data);
			}

			setTimeout(() => {
				setShowMessage(false);
			}, 5000);
		} catch (error) {
			console.error(error);
		}
	}

	return (
		<div className="flex items-center justify-center h-screen">
			<div className="flex text-center justify-center">
				{isLoading && <Loading />}
			</div>

			{!isLoading && showMessage ? (
				<div className="max-w-[800px] p-2 rounded-md flex flex-col pt-5 border-red-400 border border-solid align-middle items-center justify-center ml-10 mr-10 mx-auto my-auto text-green-400 text-center">
					Thank you for reaching out,
					<br /> I will review your email and <br />
					be in touch as soon as possible.
					<br />
					<br />
					<p className="text-blue-400">-Jared</p>
				</div>
			) : (
				<form
					className="flex justify-center  max-w-[400px] flex-col text-center text-white"
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
			)}
		</div>
	);
}
