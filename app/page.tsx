import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-gray-100">
      {/* Navbar */}
      <nav className="bg-white shadow-md py-4">
        <div className="container mx-auto flex justify-between items-center px-6">
          <h1 className="text-2xl font-bold text-blue-600">CryptoZone</h1>
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="text-gray-700 hover:text-blue-500">
                Home
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-700 hover:text-blue-500">
                About
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-700 hover:text-blue-500">
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-gray-700 hover:text-blue-500"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <div className="container mx-auto p-8 bg-white shadow-lg rounded-2xl mt-6">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-6 flex flex-col items-center justify-center p-6 bg-blue-500 text-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-2">Welcome to Our Site</h2>
            <p className="text-lg">Experience the best services with us.</p>
          </div>
          <div className="col-span-6 flex items-center justify-center p-6">
            <Image
              src="/hero-image.jpg"
              width={400}
              height={300}
              alt="Hero Image"
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>

      {/* Additional Paragraph */}
      <div className="container mx-auto mt-8 p-6 bg-gray-50 rounded-lg shadow-md text-center">
        <p className="text-lg text-gray-700">
          Our website is dedicated to providing top-notch services and
          innovative solutions. We believe in quality, excellence, and customer
          satisfaction. Join us on this journey to explore new opportunities and
          grow together!
        </p>
      </div>

      {/* Contact Page */}
      <div className="container mx-auto p-8 bg-white shadow-lg rounded-2xl mt-12">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
          Our Team
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-2 gap-8">
          {/* Profile 1 */}
          <div className="bg-gray-8 p-6 rounded-lg shadow-md flex flex-col items-center">
            <Image
              src="/profile1.png"
              width={150}
              height={150}
              alt="Profile 1"
              className=" object-cover rounded-lg"
            />
            <h2 className="text-xl font-bold text-blue-600">
              Fadhlrahman Fitra Arsil
            </h2>
            <p className="text-gray-600">1101223151</p>
            <p className="text-center text-gray-700 mt-2">
              Specializes in UI/UX design and building interactive user
              experiences.
            </p>
          </div>

          {/* Profile 2 */}
          <div className="bg-gray-8 p-6 rounded-lg shadow-md flex flex-col items-center">
            <Image
              src="/profile2.png"
              width={150}
              height={150}
              alt="Profile 2"
              className="object-cover rounded-lg"
            />
            <h2 className="text-xl font-bold text-blue-600">Rama Pradana Wijaya</h2>
            <p className="text-gray-600">1101223168</p>
            <p className="text-center text-gray-700 mt-2">
              Expert in building scalable server-side applications and APIs.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-blue-600 text-white text-center py-4 mt-12">
        <p>&copy; 2025 CryptoZone. All rights reserved.</p>
      </footer>
    </div>
  );
}
