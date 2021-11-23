export default function GuestListRow({ guest, guestList, setGuestList }) {
  const handleDelete = () => {
    const newGuestList = guestList.filter((g) => g.id !== guest.id);
    setGuestList(newGuestList);
  };

  return (
    <tr className="text-gray-700">
      <td className="px-4 py-3 border text-xs">{guest.firstName}</td>
      <td className="px-4 py-3 border text-xs">{guest.lastName}</td>
      <td className="px-4 py-3 border text-xs">{guest.email}</td>
      <td className="px-4 py-3 border text-xs">{guest.age}</td>
      <td className="px-4 py-3 border text-xs">{guest.gender}</td>
      <td className="px-4 py-3 border text-xs">{guest.table}</td>
      <td className="px-4 py-3 border text-xs">
        <button type="button" className="text-red-500" onClick={handleDelete}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </td>
    </tr>
  );
}
