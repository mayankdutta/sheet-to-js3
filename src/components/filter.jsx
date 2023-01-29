const Filter = ({ title, table, inputValue, setInputValue }) => {
  const handleDropdown = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <center>
      {title}:
      <select value={inputValue} onChange={handleDropdown}>
        {table &&
          table
            .filter((v, i, a) => a.indexOf(v) === i)
            .map((store, index) => {
              return (
                <option key={store + index} value={store}>
                  {store}
                </option>
              );
            })}
      </select>
    </center>
  );
};

export default Filter;
