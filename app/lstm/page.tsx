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
import { div } from "three/tsl";

//const Line = dynamic(() => import("react-chartjs-2)").then((mod) => mod.Line), {
//  ssr: false,
//});

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend
);

export default function LSTM() {
  return (
    <div className="bg-belakang min-h-screen text-element py-10 px-4 sm:px-6 md:px-8">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-10">
        Layanan Kami
      </h1>

      <section className="max-w-7xl mx-auto mb-16">
        <h2 className="text-2xl font-semibold mb-4 text-element">
          Ranking Harga Kripto
        </h2>
      </section>

      <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent">
        <table className="min-w-full table-auto text-left bg-element2 rounded-lg overflow-hidden">
          <thead>
            <tr className="text-gray-600 border-b border-gray-600">
              <th className="py-3 px-4">#</th>
              <th className="py-3 px-4">Koin</th>
              <th className="py-3 px-4">Harga (USD)</th>
              <th className="py-3 px-4">24h %</th>
            </tr>
          </thead>
          
        </table>
      </div>
    </div>
  );
}
