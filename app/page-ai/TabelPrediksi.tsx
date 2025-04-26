"use client";

interface Coin {
  id: number;
  name: string;
  symbol: string;
  image: string;
  predicted_price: number;
  change_24h: number;
  rank: number;
}

interface TabelPrediksiProps {
  coins: Coin[];
}

export default function TabelPrediksi({ coins }: TabelPrediksiProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse bg-white rounded-lg shadow-md overflow-hidden">
        <thead className="bg-orange-100">
          <tr>
            <th className="p-3 text-left">#</th>
            <th className="p-3 text-left">Koin</th>
            <th className="p-3 text-left">Harga Prediksi (USD)</th>
            <th className="p-3 text-left">24h %</th>
          </tr>
        </thead>
        <tbody>
          {coins.map((coin, idx) => (
            <tr
              key={coin.id}
              className={idx % 2 === 0 ? "bg-white" : "bg-gray-100"}
            >
              <td className="p-3">{coin.rank}</td>
              <td className="p-3 flex items-center gap-2">
                <img
                  src={coin.image}
                  alt={coin.name}
                  className="w-6 h-6 rounded-full"
                />
                <span>{coin.name}</span>
              </td>
              <td className="p-3 font-medium">
                ${coin.predicted_price.toFixed(2)}
              </td>
              <td
                className={`p-3 font-medium ${
                  coin.change_24h >= 0 ? "text-green-600" : "text-red-600"
                }`}
              >
                {coin.change_24h >= 0 ? "↑" : "↓"} {Math.abs(coin.change_24h)}%
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
