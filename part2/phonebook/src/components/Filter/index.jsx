const Filter = ({handleFilter}) => {
    
  return (
    <div>
      <label>
        filter shown with <input onChange={handleFilter} />
      </label>
    </div>
  );
};
export default Filter;
