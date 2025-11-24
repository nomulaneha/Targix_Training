import { useEffect, useState } from "react";
import LoaderSkeleton from "../components/LoaderSkeleton";
import ErrorMessage from "../components/ErrorMessage";

export default function NasaPage() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 🔥 Your NASA API Key
  const apiKey = "B0oevUwsL4j82nrdX3eXTTxapA7j0tRTLdkFkBt1";

  // Basic fetch-with-timeout
  async function fetchWithTimeout(url, timeout = 12000) {
    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), timeout);

    try {
      const response = await fetch(url, { signal: controller.signal });
      clearTimeout(id);

      const json = await response.json();

      if (json?.error?.code === "OVER_RATE_LIMIT") {
        throw new Error("NASA API rate limit exceeded. Wait a few minutes and refresh.");
      }

      return json;
    } catch (err) {
      clearTimeout(id);
      throw err;
    }
  }

  async function loadApod() {
    setLoading(true);
    setError(null);

    try {
      const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

      const json = await fetchWithTimeout(url);
      setData(json);

    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadApod();
  }, []);

  if (loading) return <LoaderSkeleton />;
  if (error) return <ErrorMessage message={error} onRetry={loadApod} />;

  return (
    <div className="page-container">
      <h1 className="page-title">{data.title}</h1>

      <div className="card">
        {data.media_type === "image" ? (
          <img src={data.url} alt={data.title} className="media-image" />
        ) : (
          <div className="video-wrapper">
            <iframe
              src={data.url}
              title="NASA Video"
              className="video-frame"
              frameBorder="0"
              allowFullScreen
            />
          </div>
        )}

        <div className="card-content">
          <p className="date-text">Date: {data.date}</p>
          <p className="explanation-text">{data.explanation}</p>

          <button onClick={loadApod} className="refresh-btn">
            Refresh
          </button>
        </div>
      </div>
    </div>
  );
}
