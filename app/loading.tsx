import { LoadingSpinner } from "@/components/ui";


export default function Loading() {
  return (
    <div className="flex items-center justify-center h-screen">
      <LoadingSpinner />
    </div>
  );
}