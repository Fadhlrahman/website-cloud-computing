import Image from "next/image";
import { FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  const teamMembers = [
    {
      name: "Fadhlrahman Fitra Arsil",
      nim: "1101223151",
      image: "/images/fadhlrahman.png",
      desc: "Specializes in UI/UX design and building interactive user experiences.",
      socials: {
        github: "https://github.com/fadhlrahman",
        instagram: "https://instagram.com/arseelll",
        whatsapp: "https://wa.me/62811209871",
      },
    },
    {
      name: "Rama Pradana Wijaya",
      nim: "1101223168",
      image: "/images/rama.png",
      desc: "Expert in building scalable server-side applications and APIs.",
      socials: {
        github: "https://github.com/ramaaprdnaa",
        instagram: "https://instagram.com/ramaaprdnaa",
        whatsapp: "https://wa.me/6287822601377",
      },
    },
    // Tambahkan anggota lain di sini kalau ada
  ];

  return (
    <div className="min-h-screen overflow-x-hidden bg-belakang flex flex-col items-center px-4 sm:px-6 md:px-8 py-12">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-element mb-10 text-center">
        Our Team
      </h2>

      {/* Grid Team */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-element2 rounded-lg shadow-lg p-6 flex flex-col items-center hover:shadow-2xl hover:-translate-y-1 transform transition duration-300"
          >
            <Image
              src={member.image}
              width={200}
              height={200}
              className="rounded-lg object-cover w-full h-60 max-w-xs"
              alt={member.name}
            />
            <h3 className="text-xl font-bold text-element mt-4 text-center">
              {member.name}
            </h3>
            <p className="text-element">{member.nim}</p>
            <p className="text-element text-center mt-2 mb-4 px-2">
              {member.desc}
            </p>

            {/* Sosial Media Icons */}
            <div className="flex space-x-4 text-3xl md:text-4xl">
              <a
                href={member.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-element hover:text-blue-400 transition duration-300"
                aria-label="Github"
              >
                <FaGithub />
              </a>
              <a
                href={member.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-element hover:text-pink-400 transition duration-300"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href={member.socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="text-element hover:text-green-400 transition duration-300"
                aria-label="Whatsapp"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
