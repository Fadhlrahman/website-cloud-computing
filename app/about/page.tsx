import Image from "next/image";

export default function About() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-belakang flex flex-col items-center p-12">
      <h2 className="text-3xl font-bold text-element mb-6"> CryptoCurrency </h2>

      {/* Cryptogcurrency information */}
      <div className="text-justify max-w-6xl">
        <div className=" flex flex-col items-center p-2">
          <p className="text-lg text-element leading-relaxed">
            Cryptocurrency, atau mata uang kripto, adalah bentuk mata uang
            digital yang menggunakan teknologi kriptografi untuk mengamankan
            transaksi, mengontrol penciptaan unit-unit baru, dan memverifikasi
            transfer aset. Cryptocurrency bersifat desentralisasi, yang berarti
            tidak dikendalikan oleh otoritas pusat seperti bank atau pemerintah,
            melainkan dijalankan oleh jaringan komputer secara global melalui
            teknologi yang disebut blockchain.
          </p>
        </div>
      </div>
    </div>
  );
}
