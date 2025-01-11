const Person = ({ personsToShow, deletePerson }) => {
  
  return (
    <>
    <h2>Numbers</h2>
    <ul>
    {personsToShow.map((person) => (
        <li key={person.id}>
          <p>
            {person.name} {person.number}
            <input type="button" value="delete" onClick={()=>{deletePerson(person.id)}} />
          </p>
        </li>
      ))}
      </ul>
      </>
  );
}

export default Person; 