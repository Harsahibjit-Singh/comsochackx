
import "./globals.css";

import { getServerSession } from "next-auth";
import { authOptions } from "@/auth";

export const metadata = {
  title: "Admin - ComSoc HACKX",
  keywords: ["hackathon", "ComSoc", "HACKX"],
  description: "Generated by create next app",
};

export default async function RootLayout({ children }) {
  const session = await getServerSession(authOptions);
  
  // Redirect logic handled in middleware
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}