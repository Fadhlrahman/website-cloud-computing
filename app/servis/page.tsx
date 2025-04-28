"use client";

import { useEffect, useState } from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import dynamic from "next/dynamic";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend,
} from "chart.js";

const Line = dynamic(() => import("react-chartjs-2").then((mod) => mod.Line), {
  ssr: false,
});

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend
);

export default function ServisPage() {
  const [articles, setArticles] = useState<any[]>([]);
  const [coins, setCoins] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCoin, setSelectedCoin] = useState<string | null>(null);
  const [coinChartData, setCoinChartData] = useState<number[][]>([]);
  const [page, setPage] = useState(1);
  const [sortBy24h, setSortBy24h] = useState<"asc" | "desc" | null>(null);

  const itemsPerPage = 10;

  useEffect(() => {
    fetch("/api/news")
      .then((res) => res.json())
      .then((data) => setArticles(data.articles || []))
      .catch((err) => console.error("Gagal fetch berita:", err));
  }, []);

  useEffect(() => {
    Promise.all(
      Array.from({ length: 5 }, (_, i) =>
        fetch(
          `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=${
            i + 1
          }&sparkline=false&price_change_percentage=1h,24h,7d`
        ).then((res) => res.json())
      )
    )
      .then((results) => setCoins(results.flat()))
      .catch((err) => console.error("Gagal fetch ranking kripto:", err));
  }, []);

  useEffect(() => {
    if (!selectedCoin) return;

    fetch(`/api/chart?coin=${selectedCoin}`)
      .then((res) => res.json())
      .then((data) => {
        setCoinChartData(data.prices || []);
        console.log("GRAFIK DATA:", data.prices);
      })
      .catch((err) => console.error("Gagal fetch grafik harga:", err));
  }, [selectedCoin]);

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(searchTerm)
  );

  const sortedCoins = sortBy24h
    ? [...filteredCoins].sort((a, b) => {
        const valA = a.price_change_percentage_24h || 0;
        const valB = b.price_change_percentage_24h || 0;
        return sortBy24h === "asc" ? valA - valB : valB - valA;
      })
    : filteredCoins;

  const paginatedCoins = sortedCoins.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  const totalPages = Math.ceil(sortedCoins.length / itemsPerPage);

  return (
    <div className="bg-belakang min-h-screen text-element py-10 px-4 sm:px-6 md:px-8">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-10">
        Layanan Kami
      </h1>

      <section className="max-w-7xl mx-auto mb-16">
        <h2 className="text-2xl font-semibold mb-4 text-element">
          Ranking Harga Kripto
        </h2>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
          <input
            type="text"
            placeholder="Cari koin..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value.toLowerCase());
              setPage(1);
            }}
            className="px-4 py-2 w-full md:w-1/2 border rounded-md text-element"
          />

          <button
            onClick={() =>
              setSortBy24h((prev) =>
                prev === "asc" ? "desc" : prev === "desc" ? null : "asc"
              )
            }
            className="px-4 py-2 bg-element2 rounded-md border hover:bg-gray-300"
          >
            {sortBy24h === null
              ? "Urutkan Default"
              : `Urutkan 24h: ${sortBy24h === "asc" ? "Naik" : "Turun"}`}
          </button>
        </div>

        <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent">
          <table className="min-w-full table-auto text-left bg-element2 rounded-lg overflow-hidden">
            <thead>
              <tr className="text-gray-600 border-b border-gray-600">
                <th className="py-3 px-4">#</th>
                <th className="py-3 px-4">Koin</th>
                <th className="py-3 px-4">Harga (USD)</th>
                <th className="py-3 px-4">1h %</th>
                <th className="py-3 px-4">24h %</th>
                <th className="py-3 px-4">7d %</th>
              </tr>
            </thead>
            <tbody>
              {paginatedCoins.map((coin, index) => (
                <tr
                  key={coin.id}
                  onClick={() => setSelectedCoin(coin.id)}
                  className="cursor-pointer text-element border-b border-gray-700 hover:bg-gray-300 hover:scale-[1.01] transform transition duration-200"
                >
                  <td className="py-2 px-4">
                    {(page - 1) * itemsPerPage + index + 1}
                  </td>
                  <td className="py-2 px-4 flex items-center space-x-2">
                    <img src={coin.image} alt={coin.name} className="w-6 h-6" />
                    <span>{coin.name}</span>
                  </td>
                  <td className="py-2 px-4">
                    ${coin.current_price.toLocaleString()}
                  </td>
                  <td
                    className={`py-2 px-4 ${
                      coin.price_change_percentage_1h_in_currency > 0
                        ? "text-green-400"
                        : "text-red-400"
                    }`}
                  >
                    {coin.price_change_percentage_1h_in_currency != null
                      ? `${coin.price_change_percentage_1h_in_currency.toFixed(
                          2
                        )}%`
                      : "-"}
                  </td>
                  <td
                    className={`py-2 px-4 flex items-center gap-1 ${
                      coin.price_change_percentage_24h > 0
                        ? "text-green-400"
                        : "text-red-400"
                    }`}
                  >
                    {coin.price_change_percentage_24h > 0 ? (
                      <FaArrowUp />
                    ) : (
                      <FaArrowDown />
                    )}
                    {coin.price_change_percentage_24h?.toFixed(2)}%
                  </td>
                  <td
                    className={`py-2 px-4 ${
                      coin.price_change_percentage_7d_in_currency > 0
                        ? "text-green-400"
                        : "text-red-400"
                    }`}
                  >
                    {coin.price_change_percentage_7d_in_currency != null
                      ? `${coin.price_change_percentage_7d_in_currency.toFixed(
                          2
                        )}%`
                      : "-"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="text-center mt-6 flex flex-wrap justify-center items-center gap-2">
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            className="px-4 py-2 bg-gray-700 text-white rounded-md disabled:opacity-50"
            disabled={page === 1}
          >
            Sebelumnya
          </button>

          <select
            value={page}
            onChange={(e) => setPage(parseInt(e.target.value))}
            
            className="px-4 py-2 rounded-md border bg-white text-element"
          >
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>

          <button
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            className="px-4 py-2 bg-gray-700 text-white rounded-md disabled:opacity-50"
            disabled={page === totalPages}
          >
            Selanjutnya
          </button>
        </div>

        {selectedCoin && coinChartData.length > 0 && (
          <div className="mt-10 bg-element2 p-4 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">
              Grafik Harga 7 Hari Terakhir: {selectedCoin.toUpperCase()}
            </h3>
            <Line
              data={{
                labels: coinChartData.map((item) =>
                  new Date(item[0]).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                  })
                ),
                datasets: [
                  {
                    label: "Harga (USD)",
                    data: coinChartData.map((item) => item[1]),
                    borderColor: "#4ade80",
                    backgroundColor: "rgba(74, 222, 128, 0.2)",
                    fill: true,
                    tension: 0.3,
                  },
                ],
              }}
              options={{
                responsive: true,
                plugins: {
                  legend: {
                    display: false,
                  },
                },
              }}
            />
          </div>
        )}
      </section>

      <section className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Berita Terkini Crypto</h2>
        <ul className="space-y-4">
          {articles
            .filter((a) => a.url && a.title)
            .map((article, index) => (
              <li
                key={index}
                className="bg-element2 p-4 rounded-lg shadow-md hover:-translate-y-1 transform transition duration-300"
              >
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-element font-semibold hover:underline"
                >
                  {article.title}
                </a>
                <p className="text-element text-sm mt-2">
                  {article.description || "Tidak ada deskripsi."}
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  Sumber: {article.source?.name || "Tidak diketahui"}
                </p>
              </li>
            ))}
        </ul>
      </section>
    </div>
  );
}
