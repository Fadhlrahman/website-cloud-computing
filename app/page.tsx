import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-belakang flex flex-col items-center px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="w-full max-w-7xl mt-14 p-10 rounded-2xl shadow-lg bg-element ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          {/* Text Content */}
          <div className="flex flex-col items-center justify-center bg-element2 text-element p-16 w-full max-w-full rounded-lg shadow-md hover:shadow-2xl hover:-translate-y-1 transform transition duration-300">
            <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold mb-2 font-serif text-center break-words px-2">
              CRYPTOZONE
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-center px-2">
              "Lets See The Crypto for Your Assets"
            </p>
          </div>

          {/* Image */}
          <div className="flex items-center justify-center hover:-translate-y-1 transform transition duration-300">
            <Image
              src="/images/gambar-koin.jpeg"
              alt="Hero Image"
              width={400}
              height={300}
              className="w-full max-w-xs sm:max-w-sm md:max-w-md rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>

      {/* Additional Info Box */}
      <div className="w-full max-w-4xl mt-10 p-6 bg-element2 rounded-lg shadow-md text-center hover:shadow-2xl hover:-translate-y-1 transform transition duration-300">
        <p className="text-base sm:text-lg text-element leading-relaxed">
          Cryptozone merupakan salah satu platform yang dapat membantu anda
          memantau mata uang kripto yang ingin anda beli. Selain itu Cryptozone
          juga memberikan edukasi untuk anda yang baru memulai pada dunia
          kriptografi.
        </p>
      </div>

      {/* CTA Button */}
      <div className="mt-6 mb-10">
        <Link href="/servis" passHref>
          <button className="px-8 py-4 bg-green-700 text-white text-lg rounded-xl shadow hover:bg-green-800 hover:scale-105 transform transition duration-300">
            Mulai Sekarang
          </button>
        </Link>
      </div>
    </div>
  );
}
