import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-belakang flex flex-col items-center">
      {/* Hero Section */}
      <div className="container mx-auto p-8 bg-element shadow-lg rounded-2xl mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Text Content */}
          <div className="flex flex-col items-center justify-center p-6 bg-element2 text-element rounded-lg shadow-md hover:shadow-2xl hover:-translate-y-1 transform transition duration-300">
            <h2 className="text-6xl font-bold mb-4 font-serif">CRYPTOZONE</h2>
            <p className="text-lg text-center max-w-md">
              "Lets See The Crypto for Yout Assets"
            </p>
          </div>

          {/* Image */}
          <div className="flex items-center justify-center  hover:-translate-y-1 transform transition duration-300">
            <Image
              src="/images/gambar-koin.jpeg"
              width={400}
              height={300}
              alt="Hero Image"
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>

      {/* Additional Information */}
      <div className="container mx-auto mt-10 p-6 bg-element2 rounded-lg shadow-md text-center max-w-4xl hover:shadow-2xl hover:-translate-y-1 transform transition duration-300">
        <p className="text-lg text-element leading-relaxed">
          Cryptozone merupakan salah satu platform yang dapat membantu anda
          memantau mata uang kripto yang ingin anda beli. Selain itu Cryptozone
          juga memberikan edukasi untuk anda yang baru memulai pada dunia
          kriptografi.
        </p>
      </div>

      <Link href="/servis" passHref>
        <button className="mt-6 px-8 py-4 bg-green-700 text-white text-xl rounded-xl shadow hover:bg-green-800 transition">
          Mulai Sekarang
        </button>
      </Link>
    </div>
  );
}
