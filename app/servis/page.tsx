import Image from "next/image";

export default function Services() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-belakang flex flex-col items-center p-12">
      <h2 className="text-3xl font-bold text-element mb-6">Our Team</h2>

      {/* Grid Profil */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
        {/* Profil 1: Fadhlrahman */}
        <div className="bg-element2 rounded-lg shadow-lg p-6 flex flex-col items-center">
          <Image
            src="/images/fadhlrahman.png"
            width={200}
            height={200}
            className="rounded-lg object-cover w-full h-60"
            alt="Fadhlrahman Fitra Arsil"
          />
          <h3 className="text-xl font-bold text-element mt-4">
            Fadhlrahman Fitra Arsil
          </h3>
          <p className="text-element">1101223151</p>
          <p className="text-element text-center mt-2">
            Specializes in UI/UX design and building interactive user
            experiences.
          </p>
        </div>

        {/* Profil 2: Rama */}
        <div className="bg-element2 rounded-lg shadow-lg p-6 flex flex-col items-center">
          <Image
            src="/images/rama.png"
            width={200}
            height={200}
            className="rounded-lg object-cover w-full h-60"
            alt="Rama Pradana Wijaya"
          />
          <h3 className="text-xl font-bold text-element mt-4">
            Rama Pradana Wijaya
          </h3>
          <p className="text-element">1101223168</p>
          <p className="text-element text-center mt-2">
            Expert in building scalable server-side applications and APIs.
          </p>
        </div>
      </div>
    </div>
  );
}
