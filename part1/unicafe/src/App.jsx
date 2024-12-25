import { useState } from "react";

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={() => setGood(good + 1)} text="good" />
      <Button onClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button onClick={() => setBad(bad + 1)} text="bad" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const Statistics = (props) => {
  return (
    <div>
      <h1>statistics</h1>
      {props.good + props.neutral + props.bad === 0 ? (
        <p>No feedback given</p>
      ) : (
        <table>
          <tbody>
            <StatisticLine text="good" value={props.good} />
            <StatisticLine text="neutral" value={props.neutral} />
            <StatisticLine text="bad" value={props.bad} />
            <tr><td>all</td><td>{props.good + props.neutral + props.bad}</td></tr>
            <tr><td>average</td><td>{(props.good - props.bad) / (props.good + props.neutral + props.bad)}</td></tr>
            <tr><td>positive</td><td>{(props.good / (props.good + props.neutral + props.bad)) * 100} %</td></tr>
          </tbody>
          
        </table>
      )}
    </div>
  );
};

const StatisticLine = ({ text, value }) => (
  <tr>
    <td>
      {text}
      </td>
      <td>
     {value}
      </td>
  </tr>
);