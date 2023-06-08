import "./globals.css";
import { Nunito } from "next/font/google";
import Navbar from "@/app/components/navbar/Navbar";
import ClientOnly from "@/app/components/ClientOnly";
import RegisterModal from "@/app/components/modals/RegisterModal";
import ToasterProvider from "@/app/components/providers/ToasterProvider";

const font = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "AirBnb",
  description: "AirBnb clone by author: duynv",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />
          <RegisterModal />
          <Navbar />
        </ClientOnly>
        {children}
      </body>
    </html>
  );
}
