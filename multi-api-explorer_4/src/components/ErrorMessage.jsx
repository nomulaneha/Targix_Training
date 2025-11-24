export default function ErrorMessage({ message, retryLabel, onRetry }) {
  return (
    <div className="max-w-4xl mx-auto p-4 bg-red-100 text-red-900 rounded">
      <div className="mb-2 font-medium">Error</div>
      <div className="mb-4 text-sm">{String(message)}</div>
      {onRetry && (
        <button
          onClick={onRetry}
          className="px-3 py-1 bg-red-600 text-white rounded"
        >
          {retryLabel || "Retry"}
        </button>
      )}
    </div>
  );
}
