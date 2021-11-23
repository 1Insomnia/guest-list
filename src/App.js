import { useState } from "react";
import { saveState, loadState } from "./utils/localStorage";
import AddGuest from "./components/AddGuest";
import GuestList from "./components/GuestList";

function App() {
  let initialState = loadState();
  const [guestList, setGuestList] = useState(initialState);
  saveState(guestList);

  return (
    <div className="mx-auto">
      <div className="py-16">
        <h1 className="text-3xl font-bold tracking-tight mb-10 text-center">
          Guest List
        </h1>
        <AddGuest setGuestList={setGuestList} saveState={saveState} />
        <GuestList guestList={guestList} setGuestList={setGuestList} />
      </div>
    </div>
  );
}

export default App;
