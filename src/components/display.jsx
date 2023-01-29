import Table from "./table";

const Display = ({ tableHeadRow, options, i }) => {
  return (
    <>
      {Object.values(options).map((data, j) => (
        <Table
          key={data + i + j}
          title={
            (j == 0 && "Store Details") ||
            (j == 11 && "GST Details") ||
            (j == 15 && "Agreement Details") ||
            (j == 31 && "Compliance Details")
          }
          data={data}
          j={j}
          tableHeadRow={tableHeadRow}
        />

        // <div key={data + i + j}>
        //   {tableHeadRow[j]} ==== {data}
        // </div>
      ))}
    </>
  );
};

export default Display;
