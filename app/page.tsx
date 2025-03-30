import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-gray-100">
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
    </div>
  );
}
