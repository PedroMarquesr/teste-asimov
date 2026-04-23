import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import Provider from "@/components/ui/provider"
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata = {
  title: "Positivus",
  description: "Navigating the digital landscape for success",
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        style={{ margin: 0, fontFamily: "'Space Grotesk', sans-serif" }}
        suppressHydrationWarning
      >
        <Provider>{children}</Provider>
      </body>
    </html>
  )
}
