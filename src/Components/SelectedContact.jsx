import { useEffect, useState } from "react";

function SelectedContact({ setSelectedContactId, selectedContactId }) {
  const [contact, setContact] = useState(null);

  useEffect(() => {
    async function fetchContact() {
      try {
        const res = await fetch(
          `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`
        );
        const result = await res.json();
        setContact(result);
      } catch (error) {
        console.error(error);
      }
    }
    fetchContact();
  }, [selectedContactId]);
  console.log(contact);

  if (!contact) {
    return <p>Loading contact details...</p>;
  }

  return (
    <div className="contact-details">
      <h2>Contact Details</h2>

      <div>
        <p>
          <strong>Name:</strong> {contact.name}
        </p>
        <p>
          <strong>Email:</strong> {contact.email}
        </p>
        <p>
          <strong>Phone:</strong> {contact.phone}
        </p>
        <button onClick={() => setSelectedContactId(null)}>
          Back to Contact List
        </button>
      </div>
    </div>
  );
}

export default SelectedContact;
