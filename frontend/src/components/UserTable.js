export default function UserTable() {
  const users = [
    {
      id: 1,
      name: "Michael Holt",
      avatar: "/placeholder.svg?height=40&width=40",
      dateCreated: "04/10/2013",
      role: "Admin",
      status: "Active",
      statusColor: "bg-green-500",
    },
    {
      id: 2,
      name: "Paula Wilson",
      avatar: "/placeholder.svg?height=40&width=40",
      dateCreated: "05/08/2014",
      role: "Publisher",
      status: "Active",
      statusColor: "bg-green-500",
    },
    {
      id: 3,
      name: "Antonio Moreno",
      avatar: "/placeholder.svg?height=40&width=40",
      dateCreated: "11/05/2015",
      role: "Publisher",
      status: "Suspended",
      statusColor: "bg-red-500",
    },
    {
      id: 4,
      name: "Mary Sweley",
      avatar: "/placeholder.svg?height=40&width=40",
      dateCreated: "06/09/2016",
      role: "Reviewer",
      status: "Active",
      statusColor: "bg-green-500",
    },
    {
      id: 5,
      name: "Martin Sommer",
      avatar: "/placeholder.svg?height=40&width=40",
      dateCreated: "12/08/2017",
      role: "Moderator",
      status: "Inactive",
      statusColor: "bg-orange-500",
    },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto p-6 bg-white">
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
            {users.map((user, index) => (
              <tr
                key={user.id}
                className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
              >
                <td className="py-4 px-2 text-sm text-gray-600">{index + 1}</td>
                <td className="py-4 px-4">
                  <div className="flex items-center space-x-3">
                    {/* <img
                      src={user.avatar || "/placeholder.svg"}
                      alt={user.name}
                      className="w-10 h-10 rounded-full object-cover"
                    /> */}
                    <svg
                      className="w-10 h-10 rounded-full object-cover"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                    </svg>
                    <span className="text-sm font-medium text-gray-900">
                      {user.name}
                    </span>
                  </div>
                </td>
                <td className="py-4 px-4 text-sm text-gray-600">
                  {user.dateCreated}
                </td>
                <td className="py-4 px-4 text-sm text-gray-600">{user.role}</td>
                <td className="py-4 px-4">
                  <div className="flex items-center space-x-2">
                    <div
                      className={`w-2 h-2 rounded-full ${user.statusColor}`}
                    ></div>
                    <span className="text-sm text-gray-600">{user.status}</span>
                  </div>
                </td>
                <td className="py-4 px-4">
                  <div className="flex items-center space-x-2">
                    <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-full transition-colors">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </button>
                    <button className="p-2 text-red-600 hover:bg-red-50 rounded-full transition-colors">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                    </button>
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
