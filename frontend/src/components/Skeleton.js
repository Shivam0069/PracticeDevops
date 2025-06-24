export default function UserTableSkeleton() {
  const skeletonRows = Array.from({ length: 5 }, (_, index) => index + 1);

  return (
    <div className="w-full max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-4 px-2 text-sm font-medium text-gray-600 w-8">
                #
              </th>
              <th className="text-left py-4 px-4 text-sm font-medium text-gray-600">
                Name
              </th>
              <th className="text-left py-4 px-4 text-sm font-medium text-gray-600">
                Date Created
              </th>
              <th className="text-left py-4 px-4 text-sm font-medium text-gray-600">
                Role
              </th>
              <th className="text-left py-4 px-4 text-sm font-medium text-gray-600">
                Status
              </th>
              <th className="text-left py-4 px-4 text-sm font-medium text-gray-600">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {skeletonRows.map((row) => (
              <tr key={row} className="border-b border-gray-100">
                {/* Row number skeleton */}
                <td className="py-4 px-2">
                  <div className="w-3 h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-[shimmer_1.5s_ease-in-out_infinite] rounded"></div>
                </td>

                {/* Name column with avatar and text skeleton */}
                <td className="py-4 px-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-[shimmer_1.5s_ease-in-out_infinite] rounded-full"></div>
                    <div className="space-y-2">
                      <div className="w-24 h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-[shimmer_1.5s_ease-in-out_infinite] rounded"></div>
                    </div>
                  </div>
                </td>

                {/* Date Created skeleton */}
                <td className="py-4 px-4">
                  <div className="w-20 h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-[shimmer_1.5s_ease-in-out_infinite] rounded"></div>
                </td>

                {/* Role skeleton */}
                <td className="py-4 px-4">
                  <div className="w-16 h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-[shimmer_1.5s_ease-in-out_infinite] rounded"></div>
                </td>

                {/* Status skeleton */}
                <td className="py-4 px-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-[shimmer_1.5s_ease-in-out_infinite] rounded-full"></div>
                    <div className="w-12 h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-[shimmer_1.5s_ease-in-out_infinite] rounded"></div>
                  </div>
                </td>

                {/* Action buttons skeleton */}
                <td className="py-4 px-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-[shimmer_1.5s_ease-in-out_infinite] rounded-full"></div>
                    <div className="w-8 h-8 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-[shimmer_1.5s_ease-in-out_infinite] rounded-full"></div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
