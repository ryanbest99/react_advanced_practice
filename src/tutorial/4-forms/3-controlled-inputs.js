import React, { useState } from "react";

function ControlledInputs() {
  //   const [firstName, setFistName] = useState("");
  //   const [email, setEmail] = useState("");
  const [person, setPerson] = useState({ firstName: "", email: "" });
  const [people, setPeople] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPerson = {
      id: new Date().getTime().toString(),
      firstName: person.firstName,
      email: person.email,
    };
    setPeople((prevPeople) => {
      return [...prevPeople, newPerson];
    });

    setPerson({ firstName: "", email: "" });
  };

  const handleChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setPerson({ ...person, [key]: value });
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
            value={person.firstName}
            onChange={handleChange}
            // onChange={(e) => setFistName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            name="email"
            value={person.email}
            onChange={handleChange}
            // onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
      {people.map(function (person) {
        return (
          <div key={person.id}>
            <h1>{person.firstName}</h1>
            <h1>{person.email}</h1>
          </div>
        );
      })}
    </article>
  );
}

export default ControlledInputs;
