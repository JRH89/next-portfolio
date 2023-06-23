import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Jareds Portfolio',
  description: 'Project portfolio created with React, Next, Tailwind, and Vercel.',
  icons: {
    url: "images/profilepic.png",
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
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://metatags.io/" />
        <meta property="twitter:title" content="Jared's Portfolio" />
        <meta property="twitter:description" content="Jared Hooker's project portfolio created with React JS, Next JS, Tailwind CSS, Firebase, and Vercel." />
        <meta property="twitter:image" content="https://jareds-portfolio.vercel.app/images/twitter_preview.png" />
      </head>
      <body className="bg-slate-700 min-h-screen flex items-center justify-center">{children}</body>
    </html>
  )
}
