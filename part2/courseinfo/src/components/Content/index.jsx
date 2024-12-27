import Part from '../Part';

const Content = ({ course }) => {
  const { parts } = course;
    return (
      <div>
        {parts.map((part) => (
          <Part part={part.name} exercises={part.exercises} key={part.name} />
        ))}
      </div>
    );
  };

  export default Content;