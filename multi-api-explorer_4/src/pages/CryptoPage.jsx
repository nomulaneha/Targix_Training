import { useEffect, useState } from "react";
import LoaderSkeleton from "../components/LoaderSkeleton";
import ErrorMessage from "../components/ErrorMessage";
import { fetchWithTimeout } from "../utils/fetchHelper";

export default function CryptoPage() {
  const [coins, setCoins] = useState([]);
  const [displayCoins, setDisplayCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  async function loadCoins() {
    setLoading(true);
    setError(null);
    try {
      const url =
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false";
      const data = await fetchWithTimeout(url);
      setCoins(data);
      setDisplayCoins(data);
    } catch (err) {
      setError(err.message || "Failed to load crypto");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => { loadCoins(); }, []);

  // filter
  useEffect(() => {
    const q = search.trim().toLowerCase();
    setDisplayCoins(
      coins.filter((c) => c.name.toLowerCase().includes(q) || c.symbol.toLowerCase().includes(q))
    );
  }, [search, coins]);

  if (loading) return <LoaderSkeleton />;
  if (error) return <ErrorMessage message={error} onRetry={loadCoins} />;

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-4 flex gap-2">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search coin by name or symbol..."
          className="flex-1 px-4 py-2 border rounded"
        />
        <button onClick={loadCoins} className="px-3 py-2 bg-blue-600 text-white rounded">
          Refresh
        </button>
      </div>

      <div className="grid gap-3">
        {displayCoins.slice(0, 50).map((c) => (
          <div key={c.id} className="bg-white p-3 rounded shadow flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src={c.image} alt={c.name} className="w-8 h-8" />
              <div>
                <div className="font-medium">{c.name}</div>
                <div className="text-sm text-gray-500">{c.symbol.toUpperCase()}</div>
              </div>
            </div>
            <div className="text-right">
              <div className="font-semibold">${Number(c.current_price).toLocaleString()}</div>
              <div className={`text-sm ${c.price_change_percentage_24h >= 0 ? "text-green-600" : "text-red-600"}`}>
                {c.price_change_percentage_24h?.toFixed(2)}%
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
