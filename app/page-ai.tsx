"use client";

import { useState } from "react";

export default function PageAI() {
  const [hari, setHari] = useState(6); // default hari ke-6
  const [price, setPrice] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);

  const handlePredict = async () => {
    try {
      setLoading(true);
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/predict`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ hari_ke: hari }),
      });

      const data = await res.json();
      setPrice(data.predicted_price);
    } catch (err) {
      console.error("Gagal ambil prediksi", err);
      setPrice(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen px-6 py-12 bg-belakang text-element flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6">Prediksi Harga Kripto</h1>

      <div className="flex gap-2 mb-4">
        <label htmlFor="hari">Hari ke: </label>
        <input
          id="hari"
          type="number"
          value={hari}
          onChange={(e) => setHari(Number(e.target.value))}
          className="px-2 py-1 border rounded"
        />
        <button
          onClick={handlePredict}
          className="bg-element text-white px-4 py-1 rounded hover:opacity-90"
          disabled={loading}
        >
          {loading ? "Memproses..." : "Prediksi"}
        </button>
      </div>

      {price !== null && (
        <p className="text-xl mt-4">
          Perkiraan harga: <strong>${price.toFixed(2)}</strong>
        </p>
      )}
    </div>
  );
}
