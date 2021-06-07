import React, { useState } from "react";

function ControlledInputs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [people, setPeople] = useState([]);

  const handleChange = (e) => {
    e.preventDefault();
    console.log("hello");
    const person = { id: new Date().getTime().toString(), name, email };
    console.log(person);
    setPeople((prevPeople) => {
      return [...prevPeople, person];
    });
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
        <button type="submit" onClick={handleChange}>
          Click
        </button>
      </form>

      {people.map((person) => {
        const { id, name, email } = person;
        console.log(id);
        return (
          <div key={id}>
            <h1>{name}</h1>
            <h2>{email}</h2>
          </div>
        );
      })}
    </article>
  );
}

export default ControlledInputs;
