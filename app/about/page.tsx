import Image from "next/image";

export default function About() {
  return (
    <div className="bg-belakang px-6 py-12">
      <div className="text-justify max-w-7xl mx-auto space-y-10">
        {/* Pengertian */}
        <div className="hover:-translate-y-1 transform transition duration-300">
          <h2 className="text-2xl font-bold text-element mb-4 max-w-7xl mx-auto">
            Pengertian Cryptocurrency
          </h2>
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

        {/* Teknologi Blockchain */}
        <div className="hover:-translate-y-1 transform transition duration-300">
          <h3 className="text-2xl font-bold text-element mb-4 max-w-7xl mx-auto">
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
        <div className="hover:-translate-y-1 transform transition duration-300">
          <h4 className="text-2xl font-bold text-element mb-4 max-w-7xl mx-auto">
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

        {/* kelebihan cryptocurrency */}
        <div className="hover:-translate-y-1 transform transition duration-300">
          <h4 className="text-2xl font-bold text-element mb-4 max-w-7xl mx-auto">
            Kelebihan Cryptocurrency
          </h4>
          <ul className="list-disc list-inside space-y-2 text-lg text-element leading-relaxed">
            <li>Desentralisasi: Tidak dikendalikan oleh pihak ketiga.</li>
            <li>
              Keamanan tinggi: Berkat teknologi kriptografi dan blockchain.
            </li>
            <li>
              Transparansi: Semua transaksi tercatat dan dapat dilihat publik.
            </li>
            <li>
              Efisiensi waktu dan biaya: Transaksi dapat dilakukan dengan cepat
              dan biaya rendah.
            </li>
            <li>
              Akses global: Siapa saja dapat menggunakannya tanpa batasan
              geografis.
            </li>
          </ul>
        </div>

        {/* status cryptocurrency */}
        <div className="hover:-translate-y-1 transform transition duration-300">
          <h3 className="text-2xl font-bold text-element mb-4 max-w-7xl mx-auto">
            Status Cryptocurrency di Indonesia
          </h3>
          <p className="text-lg text-element leading-relaxed">
            Di Indonesia, cryptocurrency diakui sebagai aset komoditas digital
            dan diatur oleh BAPPEBTI (Badan Pengawas Perdagangan Berjangka
            Komoditi). Artinya, masyarakat dapat membeli dan menjual
            cryptocurrency sebagai investasi. Namun, cryptocurrency tidak diakui
            sebagai alat pembayaran yang sah.
          </p>
        </div>

        {/* langkah awal */}
        <div className="hover:-translate-y-1 transform transition duration-300">
          <h4 className="text-2xl font-bold text-element mb-4 max-w-7xl mx-auto">
            Langkah Awal Memulai Investasi Cryptocurrency
          </h4>
          <ul className="list-disc list-inside space-y-2 text-lg text-element leading-relaxed">
            <li>
              Pilih platform exchange terpercaya seperti Indodax atau
              Tokocrypto.
            </li>
            <li>Lakukan verifikasi identitas (KYC).</li>
            <li>Deposit dana dalam bentuk Rupiah.</li>
            <li>Pilih mata uang kripto yang ingin dibeli.</li>
            <li>
              Simpan aset kripto di dompet digital yang aman (hot wallet atau
              cold wallet).
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
