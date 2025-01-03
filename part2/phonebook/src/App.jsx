import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("Martin Fowler");
  const [newNumber, setNewNumber] = useState("0424-1234568");
  const [filter, setFilter] = useState("");

  const handleNoteChange = (event) => {
    setNewName(event.target.value);
  };
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleFilter = (event) => {
    setFilter(event.target.value);
  };



  const addPerson = (event) => {
    event.preventDefault();
    const personObject = { name: newName, number: newNumber };

    const isRepeated = persons.some((person) => person.name === newName);

    if (isRepeated) {
      alert(`${newName} is already added to phonebook`);
    } else {
      setPersons(persons.concat(personObject));
      setNewName("");
      setNewNumber("");
    }
  };

  const personsToShow = persons.filter((person) =>(
    person.name.toLowerCase().includes(filter.toLowerCase())
  ));
  
  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with <input onChange={handleFilter} />
      </div>

      <form onSubmit={addPerson}>
        <h2>add a new</h2>
        <div>
          name: <input value={newName} onChange={handleNoteChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {personsToShow.map((person) => (
          <li key={person.name}>
            <p>
              {person.name} {person.number}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
