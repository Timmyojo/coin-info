import { Poppins } from 'next/font/google'
import Navbar from './components/navbar/Navbar'
import './globals.css'

export const metadata = {
  title: 'Keeptracka',
  description: '...never forget your applications again.',
}

const font = Poppins({
  subsets: ['latin'],
  weight: '400'
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>
        {children}
      </body>
    </html>
  )
}
