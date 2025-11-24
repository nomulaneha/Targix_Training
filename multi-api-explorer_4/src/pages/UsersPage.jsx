import { useEffect, useState } from "react";
import LoaderSkeleton from "../components/LoaderSkeleton";
import ErrorMessage from "../components/ErrorMessage";
import { fetchWithTimeout } from "../utils/fetchHelper";

export default function UsersPage() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function loadUser() {
    setLoading(true);
    setError(null);

    try {
      const data = await fetchWithTimeout("https://randomuser.me/api/");
      setUser(data.results[0]);
    } catch (err) {
      setError(err.message || "Unknown error");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadUser();
  }, []);

  if (loading) return <LoaderSkeleton />;
  if (error) return <ErrorMessage message={error} onRetry={loadUser} />;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gray-50">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Random User Profile
      </h1>

      <div className="flex justify-center items-center w-full">
        <div className="user-card bg-white shadow-lg rounded-2xl p-8 text-center max-w-sm">
          <img
            src={user.picture.large}
            alt="User"
            className="w-32 h-32 rounded-full mx-auto mb-4 object-cover shadow-md"
          />

          <div className="text-xl font-semibold mb-2">
            {user.name.title} {user.name.first} {user.name.last}
          </div>

          <div className="text-gray-700 mb-1">Age: {user.dob.age}</div>
          <div className="text-gray-700 mb-1">
            Country: {user.location.country}
          </div>
          <div className="text-gray-500 text-sm mb-4">{user.email}</div>

          <button
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            onClick={loadUser}
          >
            Get Another
          </button>
        </div>
      </div>
    </div>
  );
}
