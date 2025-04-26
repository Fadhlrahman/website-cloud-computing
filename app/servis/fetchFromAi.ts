export async function fetchPredictionAI(hari_ke: number) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/predict`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ hari_ke }),
  });

  if (!res.ok) throw new Error("Gagal ambil prediksi AI");

  const data = await res.json();
  return data.predicted_price;
}
