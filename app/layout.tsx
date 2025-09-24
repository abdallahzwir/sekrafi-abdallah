import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "Sekrafi Abdallah - Full Stack Developer & IT Business Analyst",
  description:
    "Experienced Full Stack JavaScript Developer and IT Business Analyst with 15+ years of international experience. Specializing in React, Node.js, and business solutions.",
  generator: "v0.app",
  keywords: ["Full Stack Developer", "JavaScript", "React", "Node.js", "IT Business Analyst", "Tunisia"],
  authors: [{ name: "Sekrafi Abdallah" }],
  openGraph: {
    title: "Sekrafi Abdallah - Full Stack Developer & IT Business Analyst",
    description:
      "Experienced Full Stack JavaScript Developer and IT Business Analyst with 15+ years of international experience.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
