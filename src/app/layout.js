import { ThemeProvider } from "@/context/ThemeContext";
import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Mobassir Rehman | MERN Stack Developer",
  description:
    "Portfolio of Mobassir Rehman - A MERN Stack Developer from Bangladesh specializing in React, Next.js, Node.js, and MongoDB.",
  keywords: [
    "MERN Stack",
    "React",
    "Next.js",
    "Node.js",
    "MongoDB",
    "Web Developer",
    "Frontend Developer",
    "Bangladesh",
  ],
  authors: [{ name: "Mobassir Rehman" }],
  openGraph: {
    title: "Mobassir Rehman | MERN Stack Developer",
    description:
      "Portfolio of Mobassir Rehman - A MERN Stack Developer from Bangladesh",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
