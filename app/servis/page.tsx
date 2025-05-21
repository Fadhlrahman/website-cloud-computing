"use client";

import { useEffect, useState } from "react";

type Result = {
  coin: string;
  day1: number;
  day3: number;
  day7: number;
};

const coinList = ["btc", "eth", "doge", "sol", "xrp"];

export default function PrediksiKeseluruhan() {
  const [results, setResults] = useState<Result[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAll = async () => {
      const temp: Result[] = [];

      for (const coin of coinList) {
        try {
          const res = await fetch(
            `http://localhost:5000/predict?coin=${coin}&range=7`
          );
          const data = await res.json();

          if (res.ok && data.day_1 && data.day_3 && data.day_7) {
            temp.push({
              coin: coin.toUpperCase(),
              day1: parseFloat(data.day_1.replace(/[$,]/g, "")),
              day3: parseFloat(data.day_3.replace(/[$,]/g, "")),
              day7: parseFloat(data.day_7.replace(/[$,]/g, "")),
            });
          }
        } catch (e) {
          console.error(`❌ Gagal fetch ${coin}`, e);
        }
      }

      temp.sort((a, b) => b.day1 - a.day1);
      setResults(temp);
      setLoading(false);
    };

    fetchAll();
  }, []);

  return (
    <div className="min-h-screen bg-belakang text-element p-4 sm:p-6">
      <h1 className="text-xl sm:text-2xl font-bold mb-4 text-element">
        Ranking Harga Prediksi
      </h1>

      {loading ? (
        <p className="text-center text-gray-400">Memuat data prediksi...</p>
      ) : (
        <div className="overflow-x-auto rounded-lg bg-element2 shadow-md">
          <table className="min-w-full text-sm sm:text-base">
            <thead>
              <tr className="text-left text-gray-600 border-b border-gray-600">
                <th className="py-2 px-4">#</th>
                <th className="py-2 px-4">Koin</th>
                <th className="py-2 px-4">Hari 1</th>
                <th className="py-2 px-4">Hari 3</th>
                <th className="py-2 px-4">Hari 7</th>
              </tr>
            </thead>
            <tbody>
              {results.length === 0 ? (
                <tr>
                  <td colSpan={5} className="text-center py-4 text-gray-400">
                    Tidak ada data yang tersedia.
                  </td>
                </tr>
              ) : (
                results.map((item, index) => (
                  <tr
                    key={item.coin}
                    className="border-b border-gray-700 text-element"
                  >
                    <td className="py-2 px-4">{index + 1}</td>
                    <td className="py-2 px-4 font-semibold">{item.coin}</td>
                    <td className="py-2 px-4">
                      $
                      {item.day1.toLocaleString("en-US", {
                        minimumFractionDigits: 2,
                      })}
                    </td>
                    <td className="py-2 px-4">
                      $
                      {item.day3.toLocaleString("en-US", {
                        minimumFractionDigits: 2,
                      })}
                    </td>
                    <td className="py-2 px-4">
                      $
                      {item.day7.toLocaleString("en-US", {
                        minimumFractionDigits: 2,
                      })}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
