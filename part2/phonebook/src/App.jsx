import { useState, useEffect } from "react";
import contactServices from "./services/contact";

import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Person from "./components/Person";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("Martin Fowler");
  const [newNumber, setNewNumber] = useState("0424-1234568");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    contactServices
      .getAll()
      .then((response) => {
      setPersons(response.data);
      });
  }, []);

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
      const question = window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`);
      if (question) {
        const person = persons.find((person) => person.name === newName);
        contactServices
          .update(person.id, personObject)
          .then((response) => {
            setPersons(
              persons.map((p) =>
                p.id !== person.id ? p : response.data
              )
            );
            setNewName("");
            setNewNumber("");
          });
      }
    } else {
      contactServices
        .create(personObject)
        .then((response) => {
          setPersons(persons.concat(response.data));
          setNewName("");
          setNewNumber("");
          console.log(response);
        });
    }
  };
  
    
  const deletePerson = (id) => {
    const person = persons.find((person) => person.id === id);
    const result = window.confirm(`Delete ${person.name} ?`);
    if (result) {
      contactServices
        .deleteContact(id)
        .then((response) => {
          setPersons(persons.filter((person) => person.id !== id));
        });
    }
  };
 
  const personsToShow = persons.filter((person) =>
    person.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleFilter={handleFilter} />
      <PersonForm
        addPerson={addPerson}
        newName={newName}
        newNumber={newNumber}
        handleNoteChange={handleNoteChange}
        handleNumberChange={handleNumberChange}
      />
      <Person personsToShow={personsToShow} deletePerson={deletePerson} />
    </div>
  );
};

export default App;
