const Filter = ({ table, inputValue, setInputValue }) => {
  const handleDropdown = (event) => {
    setInputValue(event.target.value);
  };

  // console.log("table: ", table);
  return (
    <center>
      <select value={inputValue} onChange={handleDropdown}>
        {table &&
          table.map((store, index) => {
            // console.log("store: ", store);
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
