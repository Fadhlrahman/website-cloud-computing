import Image from "next/image";

export default function About() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-belakang flex flex-col items-center px-6 py-12 ">
      <h2 className="text-3xl font-bold text-element mb-10 text-center">
        Pengertian Cryptocurrency
      </h2>

      <div className="text-justify max-w-7xl mx-auto space-y-10 ">
        {/* Pengertian */}
        <p className="text-lg text-element leading-relaxed">
          Cryptocurrency, atau mata uang kripto, adalah bentuk mata uang digital
          yang menggunakan teknologi kriptografi untuk mengamankan transaksi,
          mengontrol penciptaan unit-unit baru, dan memverifikasi transfer aset.
          Cryptocurrency bersifat desentralisasi, yang berarti tidak
          dikendalikan oleh otoritas pusat seperti bank atau pemerintah,
          melainkan dijalankan oleh jaringan komputer secara global melalui
          teknologi yang disebut blockchain.
        </p>

        {/* Teknologi Blockchain */}
        <div>
          <h3 className="text-2xl font-bold text-element mb-4 text-center">
            Teknologi Blockchain
          </h3>
          <p className="text-lg text-element leading-relaxed">
            Blockchain adalah buku besar digital terdesentralisasi yang mencatat
            seluruh transaksi cryptocurrency secara permanen dan transparan.
            Setiap blok dalam blockchain berisi sekelompok transaksi, dan
            blok-blok tersebut saling terhubung satu sama lain dalam urutan
            kronologis, membentuk rantai (chain). Teknologi ini memastikan bahwa
            data tidak dapat diubah secara sepihak, sehingga aman dan dapat
            dipercaya oleh seluruh pengguna jaringan.
          </p>
        </div>

        {/* Fungsi dan Manfaat */}
        <div>
          <h4 className="text-2xl font-bold text-element mb-4 text-center">
            Fungsi dan Manfaat Cryptocurrency
          </h4>
          <ul className="list-disc list-inside space-y-2 text-lg text-element leading-relaxed">
            <li>
              Sebagai alat tukar untuk pembelian barang dan jasa (meskipun
              terbatas).
            </li>
            <li>
              Sebagai instrumen investasi karena nilainya dapat meningkat
              seiring waktu.
            </li>
            <li>
              Untuk pengiriman uang lintas negara secara cepat dan dengan biaya
              rendah.
            </li>
            <li>
              Mendukung teknologi aplikasi terdesentralisasi seperti smart
              contract, DeFi (Decentralized Finance), dan NFT (Non-Fungible
              Token).
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
