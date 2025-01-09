import React from "react";
import { Button } from "./ui/button";
import { Heart, CarFront, Layout, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { checkUser } from "@/lib/checkUser";
import Image from "next/image";

const Header = async ({ isAdminPage = false }) => {
  const user = await checkUser();
  const isAdmin = user?.role === "ADMIN";

  return (
    <header className="fixed top-0 w-full luxury-glass z-50 premium-shadow backdrop-blur-xl border-b border-border/30">
      <nav className="mx-auto px-6 py-4 flex items-center justify-between max-w-7xl">
        <Link href={isAdminPage ? "/admin" : "/"} className="flex items-center group">
          <div className="relative">
            <div className="text-3xl font-bold tracking-tight luxury-shimmer">
              <span className="premium-text">DRIVE</span><span className="text-xl font-bold text-primary/90">PRO</span>
            </div>
          </div>
          {isAdminPage && (
            <span className="text-xs font-bold text-white ml-4 tracking-widest bg-premium px-3 py-1.5 rounded-full shadow-lg">ADMIN</span>
          )}
        </Link>

        {/* Action Buttons */}
        <div className="flex items-center space-x-4">
          {isAdminPage ? (
            <>
              <Link href="/">
                <Button variant="outline" className="flex items-center gap-2 luxury-glass premium-shadow hover:luxury-shadow transition-all duration-300 border-primary/20">
                  <ArrowLeft size={18} className="text-primary" />
                  <span className="text-primary font-medium">Exit Admin</span>
                </Button>
              </Link>
            </>
          ) : (
            <SignedIn>
              {!isAdmin && (
                <Link
                  href="/reservations"
                  className="flex items-center gap-2"
                >
                  <Button variant="outline" className="luxury-glass premium-shadow hover:luxury-shadow transition-all duration-300 border-primary/20">
                    <CarFront size={18} className="text-primary" />
                    <span className="hidden md:inline text-primary font-medium">My Bookings</span>
                  </Button>
                </Link>
              )}
              <a href="/saved-cars">
                <Button className="flex items-center gap-2 premium-gradient text-white font-medium transition-all duration-300 hover:scale-105 luxury-shadow">
                  <Heart size={18} />
                  <span className="hidden md:inline">Saved Cars</span>
                </Button>
              </a>
              {isAdmin && (
                <Link href="/admin">
                  <Button variant="outline" className="flex items-center gap-2 luxury-glass premium-shadow hover:luxury-shadow transition-all duration-300 border-primary/20">
                    <Layout size={18} className="text-primary" />
                    <span className="hidden md:inline text-primary font-medium">Admin Panel</span>
                  </Button>
                </Link>
              )}
            </SignedIn>
          )}

          <SignedOut>
            {!isAdminPage && (
              <SignInButton forceRedirectUrl="/">
                <Button variant="outline" className="luxury-glass premium-shadow hover:luxury-shadow transition-all duration-300 border-primary/20">
                  <span className="text-primary font-medium">Sign In</span>
                </Button>
              </SignInButton>
            )}
          </SignedOut>

          <SignedIn>
            <div className="relative">
              <UserButton
                appearance={{
                  elements: {
                    avatarBox: "w-10 h-10 ring-2 ring-primary/30 luxury-shadow rounded-full",
                  },
                }}
              />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full premium-pulse shadow-lg"></div>
            </div>
          </SignedIn>
        </div>
      </nav>
    </header>
  );
};

export default Header;
