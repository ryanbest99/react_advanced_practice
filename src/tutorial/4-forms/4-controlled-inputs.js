import React, { useState } from "react";

function ControlledInputs() {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  const [person, setPerson] = useState({ firstName: "", email: "" });
  const [people, setPeople] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("hs");

    const newPerson = {
      id: new Date().getTime().toString(),
      name: person.firstName,
      email: person.email,
    };

    setPeople((prevData) => {
      return [...prevData, newPerson];
    });

    setPerson({ firstName: "", email: "" });
  };

  const handleChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    // console.log(key, value);

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
          />
        </div>
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>

      {people.map(function (person) {
        return (
          <div key={person.id}>
            <h1>{person.name}</h1>
            <h1>{person.email}</h1>
          </div>
        );
      })}
    </article>
  );
}

export default ControlledInputs;
