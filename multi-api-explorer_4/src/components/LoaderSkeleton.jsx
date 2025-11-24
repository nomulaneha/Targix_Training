export default function LoaderSkeleton() {
  return (
    <div className="max-w-4xl mx-auto space-y-4 animate-pulse">
      <div className="h-6 bg-gray-300 rounded w-1/3" />
      <div className="h-48 bg-gray-300 rounded" />
      <div className="h-4 bg-gray-300 rounded w-full" />
      <div className="h-4 bg-gray-300 rounded w-5/6" />
    </div>
  );
}
