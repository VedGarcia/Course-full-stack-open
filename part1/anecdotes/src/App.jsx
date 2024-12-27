import { useState } from "react";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);
  const randomAnecdote = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length));
  };

  const votes = new Array(anecdotes.length).fill(0);
  const [count, setCount] = useState(votes);

  const addVotes = () => {
    const newVotes = [...count];
    newVotes[selected] += 1;
    setCount(newVotes);
  };
  const mostVotes = Math.max(...count);
const indexMostVotes = count.indexOf(mostVotes);  
  return (
    <>
    <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <div>has {count[selected]} votes</div>
      <button onClick={addVotes}>votes</button>
      <button onClick={randomAnecdote}>next anecdotes</button>
      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[indexMostVotes]}</p>
      <p>has {mostVotes} votes</p>
    </>
  );
};

export default App;
