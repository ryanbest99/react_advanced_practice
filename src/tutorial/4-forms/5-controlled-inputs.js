import React, { useState } from "react";

function ControlledInputs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [people, setPeople] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("hs");

    const personInfo = {
      id: new Date().getTime().toString(),
      name: name,
      email: email,
    };

    setPeople((prevData) => {
      return [...prevData, personInfo];
    });

    setName("");
    setEmail("");
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
