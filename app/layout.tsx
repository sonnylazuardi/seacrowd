import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SEA Crowd Data Catalouge",
  description: "Dataset Catalogue & Indexing SEACrowd Datasets",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        ></meta>
      </Head>
      <body className={inter.className}>{children}</body>
      <script
        async
        src="https://eu.umami.is/script.js"
        data-website-id="d770d165-8584-47dd-a009-af28af370ed6"
      ></script>
    </html>
  );
}
