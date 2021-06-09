import React, { useState } from "react";

function ControlledInputs() {
  //   const [name, setName] = useState("");
  //   const [email, setEmail] = useState("");
  const [person, setPerson] = useState({ firstName: "", email: "", age: "" });
  const [people, setPeople] = useState([]);

  const handleChange = (e) => {
    console.log("changing");
    const key = e.target.name;
    const value = e.target.value;
    setPerson({ ...person, [key]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handle Submit");
    const newPerson = { ...person, id: new Date().getTime().toString() };
    setPeople([...people, newPerson]);
    setPerson({ firstName: "", email: "" });
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
        <div>
          <label htmlFor="age">Age:</label>
          <input
            type="text"
            id="age"
            name="age"
            value={person.age}
            onChange={handleChange}
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
            <h1>name: {person.firstName}</h1>
            <h1>email: {person.email}</h1>
            <h1>email: {person.age}</h1>
          </div>
        );
      })}
    </article>
  );
}

export default ControlledInputs;
