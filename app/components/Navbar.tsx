"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-element shadow-md py-4">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link href="/">
        <h1 className="text-2xl font-bold text-white">CryptoZone</h1>
        </Link>

        {/* Tombol Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Menu Utama */}
        <ul className={`md:flex space-x-6 text-white hidden`}>
          <li>
            <Link href="/" className="hover:text-blue-400">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-blue-400">
              About
            </Link>
          </li>
          <li>
            <Link href="/servis" className="hover:text-blue-400">
              Services
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-blue-400">
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Dropdown Mobile */}
      {isOpen && (
        <div className="md:hidden bg-element px-6 pb-4 pt-2">
          <ul className="flex flex-col space-y-4 text-white">
            <li>
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className="hover:text-blue-400"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                onClick={() => setIsOpen(false)}
                className="hover:text-blue-400"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/servis"
                onClick={() => setIsOpen(false)}
                className="hover:text-blue-400"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="hover:text-blue-400"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
