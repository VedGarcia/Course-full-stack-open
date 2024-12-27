const Total = ({ course }) => {
    const sumValues = course.parts
      .map((part) => part.exercises)
      .reduce((a, b) => a + b, 0);
  
    return <p><strong>Total of {sumValues} exercises</strong></p>;
  };

  export default Total;