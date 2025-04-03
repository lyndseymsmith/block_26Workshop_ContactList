import { useState } from "react";
import "./App.css";
import ContactList from "./Components/ContactList";

function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);
  return (
    <>
      {selectedContactId ? (
        <h1>Selected Contact View</h1>
      ) : (
        <ContactList setSelectedContactId={setSelectedContactId} />
      )}
    </>
  );
}

export default App;
