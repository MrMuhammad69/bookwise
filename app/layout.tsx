import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
const ibmPlexSans = localFont({
  src: [
    {path: '/fonts/IBMPlexSans-Regular.ttf', weight: "400", style: 'normal'},
    {path: '/fonts/IBMPlexSans-Medium.ttf', weight: "500", style: 'normal'},
    {path: '/fonts/IBMPlexSans-SemiBold.ttf', weight: "600", style: 'normal'},
    {path: '/fonts/IBMPlexSans-Bold.ttf', weight: "700", style: 'normal'},

  ]
});

const babesNeue = localFont({
  src: [
    {path: '/fonts/BebasNeue-Regular.ttf', weight: "400", style: 'normal'},
  ],
  variable: '--font-bebas-neue',
});

export const metadata: Metadata = {
  title: "BookWise",
  description: "BookWise is a platform for book borrowing offered by universities.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${ibmPlexSans.className} ${babesNeue.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
