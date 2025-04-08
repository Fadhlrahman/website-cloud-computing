import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-element shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center px-6">
        <h1 className="text-2xl font-bold text-white">CryptoZone</h1>
        <ul className="flex space-x-6">
          <li>
            <Link href="/" className="text-white hover:text-blue-500">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-white hover:text-blue-500">
              About
            </Link>
          </li>
          <li>
            <Link
              href="/servis"
              className="text-white hover:text-blue-500"
            >
              Services
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-white hover:text-blue-500">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
