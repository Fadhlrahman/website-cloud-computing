"use client";

import { useEffect, useState } from "react";

type Result = {
  coin: string;
  predicted_price: string;
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
          const res = await fetch("http://localhost:5000/predict", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ coin }),
          });

          const data = await res.json();
          if (res.ok && data.predicted_price) {
            // Pastikan harga dalam bentuk string dan hilangkan simbol dolar sebelum parsing
            const cleanedPrice = parseFloat(
              data.predicted_price.replace(/[$,]/g, "")
            );

            temp.push({
              coin,
              predicted_price: cleanedPrice.toLocaleString("en-US", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              }),
            });
          }
        } catch (e) {
          console.error(`Error fetching ${coin}`, e);
        }
      }

      // Urutkan dari harga tertinggi ke terendah
      const sorted = temp.sort(
        (a, b) =>
          parseFloat(b.predicted_price.replace(/[$,]/g, "")) -
          parseFloat(a.predicted_price.replace(/[$,]/g, ""))
      );
      setResults(sorted);
      setLoading(false);
    };

    fetchAll();
  }, []);

  return (
    <div className="min-h-screen bg-belakang text-element p-6">
      <h1 className="text-2xl font-bold mb-4">Prediksi Harga Hari Ini</h1>

      {loading ? (
        <p>Memuat data...</p>
      ) : (
        <table className="min-w-full table-auto bg-element2 rounded-lg overflow-hidden">
          <thead>
            <tr className="text-left text-gray-600 border-b border-gray-600">
              <th className="py-2 px-4">#</th>
              <th className="py-2 px-4">Koin</th>
              <th className="py-2 px-4">Harga Prediksi (USD)</th>
            </tr>
          </thead>
          <tbody>
            {results.map((item, index) => (
              <tr
                key={item.coin}
                className="border-b border-gray-700 text-element"
              >
                <td className="py-2 px-4">{index + 1}</td>
                <td className="py-2 px-4 uppercase">{item.coin}</td>
                <td className="py-2 px-4">${item.predicted_price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
