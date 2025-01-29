import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], // Puedes incluir los pesos que necesites
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio de Hector Lujan",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body suppressHydrationWarning className={`${poppins.variable} antialiased`}>{children}</body>
    </html>
  );
}
