export default function GuestListHeader() {
  return (
    <thead>
      <tr className="text-sm font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
        <th className="px-4 py-3">First Name</th>
        <th className="px-4 py-3">Last Name</th>
        <th className="px-4 py-3">Email</th>
        <th className="px-4 py-3">Age</th>
        <th className="px-4 py-3">Gender</th>
        <th className="px-4 py-3">Table</th>
        <th className="px-4 py-3">Delete</th>
      </tr>
    </thead>
  );
}
