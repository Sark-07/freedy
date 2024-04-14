import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { ClerkProvider } from '@clerk/nextjs'
import "./globals.css";

export const metadata: Metadata = {
  title: "Freedy",
  description: "A SaaS app for image generation, scale and many more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={{
      variables: {colorPrimary: '#000000', },
      signIn: {variables: {borderRadius: '0.25em'}},
      signUp: {variables: {borderRadius: '0.25em'}}
    }}>
      <html lang="en">
        <body className={`${GeistSans.className} antialiased`}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
