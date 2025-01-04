const Person = ({ personsToShow }) => {
  return (
    <>
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
      </>
  );
}

export default Person; 