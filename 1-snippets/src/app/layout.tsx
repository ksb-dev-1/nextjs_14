import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Snippets",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <div className="w-full flex items-center justify-center p-8">
          <div className="max-w-[750px] w-full ">
            <div className="bg-blue-400 rounded p-4 mb-8">
              <Link
                href="/"
                className="font-semibold flex items-center bg-white text-blue-400 rounded px-4 py-2 w-fit"
              >
                {`{Snippets}`}
              </Link>
            </div>
            <div className="p-4 border rounded">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
