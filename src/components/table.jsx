import "./table.css";

const Table = ({ title, data, j, tableHeadRow }) => {
  return (
    <>
      <div className="title">{title}</div>
      <div className="row">
        <span className="col column2">
          {tableHeadRow[j]} ==== {data}
        </span>
      </div>
    </>
  );
};

export default Table;
