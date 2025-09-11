import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "DrivePro - Premium Car Test Drives",
  description: "Professional car test drive booking platform with premium service and extensive vehicle selection",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en" className="dark">
        <head>
          <link rel="icon" href="/favicon.ico" sizes="any" />
        </head>
        <body className={`${inter.className} min-h-screen`}>
          <ThemeProvider>
            <Header />
            <main className="min-h-screen">{children}</main>
            <Toaster richColors />

            <footer className="py-16 relative overflow-hidden premium-pattern">
              <div className="absolute inset-0 automotive-grid"></div>
              <div className="container mx-auto px-4 text-center relative z-10">
                <div className="text-2xl font-bold mb-3">
                  <span className="premium-text">DRIVE</span><span className="text-lg font-bold text-primary/90">PRO</span>
                </div>
                <p className="text-muted-foreground text-sm">
                  Premium Car Test Drive Experience
                </p>
                <div className="mt-6 w-32 h-px premium-gradient mx-auto"></div>
                <div className="mt-8 text-xs text-muted-foreground opacity-70">
                  © 2025 DrivePro. All rights reserved.
                </div>
              </div>
            </footer>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
