import Head from 'next/head'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Jareds Portfolio',
  description: 'Project portfolio created with React, Next, Tailwind, and Vercel.',
  icons: {
    url: "images/profile_pic.png",
    rel: 'icon',
    type: 'image/png',

  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossOrigin="anonymous" referrerPolicy="no-referrer" />

        <meta charSet="UTF-8" />
        <meta property="og:url" content="https://jareds-portfolio.vercel.app/" />
        <meta property="og:title" content="Jareds Portfolio" />
        <meta property="og:description" content="Project portfolio developed with React, Next, Tailwind, and Vercel" />
        <meta property="og:image" content="https://jareds-portfolio.vercel.app/images/preview.png" />
        <meta property="url" content="https://jareds-portfolio.vercel.app/" />
        <meta property="title" content="Jareds Portfolio" />
        <meta property="description" content="Project portfolio developed with React, Next, Tailwind, and Vercel" />
        <meta property="image" content="https://jareds-portfolio.vercel.app/images/preview.png" />
        <link type="image/png" rel="shortcut icon" href="/images/profilepic.png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
