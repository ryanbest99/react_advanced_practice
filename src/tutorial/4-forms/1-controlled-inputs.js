import React, { useState } from "react";

function ControlledInputs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [people, setPeople] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name && email) {
      const person = { id: new Date().getTime().toString(), name, email };
      setPeople((people) => {
        return [...people, person];
      });
      setName("");
      setEmail("");
    } else {
      console.log("Empty values");
    }
  };

  return (
    <article>
      <form>
        <div>
          <label htmlFor="firstName">Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit" onClick={handleSubmit}>
          Sumbit
        </button>
      </form>

      {people.map(function (person) {
        console.log(person);
        return (
          <div key={person.id}>
            <h1>id: {person.id}</h1>
            <h1>name: {person.name}</h1>
            <h1>email: {person.email}</h1>
          </div>
        );
      })}
    </article>
  );
}

export default ControlledInputs;
