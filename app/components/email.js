import React from "react";

export default function Settings({ handleSubmit }) {
	return (
		<>
			<form className="flex flex-col text-center text-white" onSubmit={handleSubmit}>
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
	);
}
