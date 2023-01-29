import "./table.css";

const isLink = (text) => {
  if (text.length < 4) return false;
  return (
    text[0] === "h" && text[1] === "t" && text[2] === "t" && text[3] === "p"
  );
};

const Table = ({ title, data, j, tableHeadRow }) => {
  return (
    <main>
      <div className="title">{title}</div>
      <div className="row">
        <span className="col column1">{tableHeadRow[j]} :</span>
        {isLink(data) ? (
          <a href={data}>
            <span className="col column2">Link</span>
          </a>
        ) : (
          <span className="col column3">{data}</span>
        )}
      </div>
    </main>
  );
};

export default Table;
