"use client";
import React, { useState } from "react";
import Logo from "@/components/ui/logo";
import { MapPin, Menu, User, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ui/theme-toggle";
import Link from "next/link";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white dark:bg-black-alpha-700 shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <li className="pr-4 py-2 relative cursor-pointer transition-all duration-300 ease-in-out inline-block hover:text-blue-500 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[3px] after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-3/4">
              Find doctors
            </li>
            <li className="pr-4 py-2 relative cursor-pointer transition-all duration-300 ease-in-out inline-block hover:text-blue-500 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[3px] after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-3/4">
              Surgeries
            </li>
            <li className="pr-4 py-2 relative cursor-pointer transition-all duration-300 ease-in-out inline-block hover:text-blue-500 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[3px] after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-3/4">
              About us
            </li>
          </nav>

          {/* Location, Theme Toggle and Login */}
          <div className="hidden md:flex items-center gap-x-2">
            <div className="flex items-center text-muted-foreground">
              <MapPin className="h-4 w-4 mr-1" />
              <span className="text-sm">Pune</span>
            </div>
            <ThemeToggle />
            <Link href={"/auth"}>
              <Button variant="outline" size="sm">
                <User className="h-4 w-4 mr-2" />
                Login / Signup
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <div className="flex items-center gap-y-2">
                  <Menu className="h-6 w-6" />
                </div>
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col items-end gap-y-4">
              <a
                href="#"
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                Find Doctors
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                Video Consult
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                Medicines
              </a>
              <Button
                variant="ghost"
                size="sm"
                className="w-fit outline-none bg-transparent"
              >
                <User className="h-4 w-4 mr-2" />
                Login / Signup
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default NavBar;
