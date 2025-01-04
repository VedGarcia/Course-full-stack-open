const PersonForm = (props) => {
    const { addPerson, newName, newNumber, handleNoteChange, handleNumberChange } = props;
    return (
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
    );
}

export default PersonForm;  