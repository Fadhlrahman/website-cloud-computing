import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-gray-50 flex flex-col items-center">
      {/* Hero Section */}
      <div className="container mx-auto p-8 bg-white shadow-lg rounded-2xl mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Text Content */}
          <div className="flex flex-col items-center justify-center p-6 bg-blue-500 text-white rounded-lg shadow-md">
            <h2 className="text-3xl font-bold mb-4">Welcome to Our Site</h2>
            <p className="text-lg text-center max-w-md">
              Experience the best services with us.
            </p>
          </div>

          {/* Image */}
          <div className="flex items-center justify-center">
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

      {/* Additional Information */}
      <div className="container mx-auto mt-10 p-6 bg-white rounded-lg shadow-md text-center max-w-2xl">
        <p className="text-lg text-gray-700 leading-relaxed">
          Our website is dedicated to providing top-notch services and innovative solutions.
          We believe in quality, excellence, and customer satisfaction. Join us on this
          journey to explore new opportunities and grow together!
        </p>
      </div>
    </div>
  );
}
