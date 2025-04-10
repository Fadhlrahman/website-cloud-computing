export async function GET() {
  const apiKey = "f2b13f6e486d4f22be6cf9f31882ed15";

  const res = await fetch(
    `https://newsapi.org/v2/everything?q=cryptocurrency&language=en&pageSize=10&sortBy=publishedAt&apiKey=${apiKey}`
  );
  const data = await res.json();

  return new Response(JSON.stringify(data), {
    headers: { "Content-Type": "application/json" },
  });
}
