"use client"
import React, { useState } from "react"
import DOMPurify from "dompurify"

export default function Message() {
	const [showMessage, setShowMessage] = useState(false)

	async function handleSubmit(event) {
		event.preventDefault()

		const subject = DOMPurify.sanitize(event.target.elements.subject.value)
		const message = DOMPurify.sanitize(event.target.elements.message.value)

		try {
			const response = await fetch("/api/send-email", {
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
			})

			if (response.ok) {
				setShowMessage(true)
				event.target.reset()
			} else {
				console.log("Error occurred while sending email.")
			}
		} catch (error) {
			console.error(error)
		}

		setTimeout(() => {
			setShowMessage(false)
		}, 5000)
	}

	return (
		<>
			<div id="message" name="message" className=" xsmall:w-fit">
				{showMessage ? (
					<div className="p-10  xsmall:w-fit mt-4 mb-4  rounded-xl flex flex-col border-red-400 border-2 border-solid justify-center ml-10 mr-10 mx-auto my-auto text-green-400 text-center">
						Thank you for reaching out,
						<br /> I will review your message and <br />
						be in touch as soon as possible.
						<br />
						<br />
						<p className="text-blue-400">
							-Jared
						</p>
					</div>
				) : (
					<form
						className="flex xsmall:w-fit flex-col w-auto xsmall:mx-5 gap-3 text-center text-neutral-300"
						onSubmit={handleSubmit}
					>
						<p className="text-blue-400 font-extrabold underline xsmall:text-sm text-2xl">
							Subject:
						</p>
						<input
							className="p-2 rounded-md border-2 border-neutral-300 xsmall:text-sm text-neutral-300 bg-neutral-950 mb-4"
							type="text"
							name="subject"
							placeholder="Subject"
						/>

						<p className="text-green-400 font-extrabold underline xsmall:text-sm text-2xl">
							Message:
						</p>
						<textarea
							className="p-2 rounded-md border-2 border-neutral-300 text-neutral-300 bg-neutral-950"
							name="message"
							rows="5"
							cols="30"
							placeholder="Your Message"
						></textarea>
						<input
							className="xsmall:text-sm cursor-pointer py-1 self-center duration-300 shadow-lg w-1/3 shadow-red-400/50 font-extrabold hover:opacity-50 hover:scale-95 text-2xl text-red-400 mt-4 border-2 border-solid border-red-400 rounded-md"
							type="submit"
							value="SEND"
						/>
					</form>
				)}</div>
		</>
	)
}
