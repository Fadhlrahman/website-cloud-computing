// ✅ File: app/page-ai/page.tsx
"use client";

import { useState } from "react";
import TabelPrediksi from "./TabelPrediksi";

export default function PageAi() {
  const [hari, setHari] = useState(4);
  const [data, setData] = useState<Coin[] | null>(null);
  const [loading, setLoading] = useState(false);

  const handlePredict = async () => {
    setLoading(true);

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/predict`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ hari_ke: hari }),
      });

      const response = await res.json();

      const dummyCoins: Coin[] = [
        {
          id: 1,
          name: "Bitcoin",
          symbol: "BTC",
          image: "/bitcoin.png",
          predicted_price: response.predicted_price,
          change_24h: 1.21,
          rank: 1,
        },
        {
          id: 2,
          name: "Ethereum",
          symbol: "ETH",
          image: "/ethereum.png",
          predicted_price: response.predicted_price * 0.06,
          change_24h: 0.5,
          rank: 2,
        },
        {
          id: 3,
          name: "XRP",
          symbol: "XRP",
          image: "/xrp.png",
          predicted_price: response.predicted_price * 0.005,
          change_24h: -0.86,
          rank: 3,
        },
      ];

      setData(dummyCoins);
    } catch (err) {
      console.error("Error fetching prediction:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen px-6 py-12 bg-belakang text-element">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">
          Ranking Harga Kripto
        </h1>

        <div className="flex gap-2 justify-center items-center mb-6">
          <label className="text-lg">Hari ke:</label>
          <input
            type="number"
            value={hari}
            onChange={(e) => setHari(Number(e.target.value))}
            className="px-4 py-2 border rounded-md w-24"
          />
          <button
            onClick={handlePredict}
            className="bg-element text-white px-4 py-2 rounded hover:opacity-90"
            disabled={loading}
          >
            {loading ? "Memproses..." : "Prediksi"}
          </button>
        </div>

        {data && <TabelPrediksi coins={data} />}
      </div>
    </main>
  );
}

// ✅ Type
interface Coin {
  id: number;
  name: string;
  symbol: string;
  image: string;
  predicted_price: number;
  change_24h: number;
  rank: number;
}
