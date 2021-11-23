import GuestListHeader from "./GuestListHeader";
import GuestListRow from "./GuestListRow";

export default function GuestList({ guestList, setGuestList }) {
  return guestList.length > 0 ? (
    <div className="max-w-4xl mx-auto px-4">
      <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg mt-10">
        <div className="w-full overflow-x-auto">
          <table className="w-full">
            <GuestListHeader />
            <tbody className="bg-white">
              {guestList.map((guest) => (
                <GuestListRow
                  guest={guest}
                  key={guest.id}
                  guestList={guestList}
                  setGuestList={setGuestList}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  ) : null;
}
