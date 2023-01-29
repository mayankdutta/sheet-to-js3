import "./App.css";
import Papa from "papaparse";
import { useEffect, useState } from "react";
import Filter from "./components/filter";
import Display from "./components/display";

const URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vR7p91mdEj3E7UcmAjwFpcE1evDLh6T5J1IWMJ1TR0tSV7Tyue4m0CKLj84R3PcbgMz6d-Krmziszj_/pub?gid=0&single=true&output=csv";

function App() {
  const [table, setTable] = useState([]);
  const [tableHeadRow, setTableHeadRow] = useState([]);
  const [tableData, setTableData] = useState({});

  useEffect(() => {
    Papa.parse(URL, {
      download: true,
      header: true,
      complete: (results) => {
        setTable(results.data);

        let data = {};
        setTable(results.data);
        for (let j in results.data[0]) {
          setTableHeadRow((prev) => [...prev, j]);
          data[j] = ["---blank---"];
        }

        for (let i = 1; i < results.data.length; i++) {
          for (let j in results.data[i]) {
            data[j].push(results.data[i][j]);
          }
        }
        console.log("data: ");
        setTableData(data);
      },
    });
  }, []);

  // console.log("table data: ", tableData);

  const filterOptions = (table, filteredIndex, filteredValue) =>
    !filteredValue || !filteredIndex
      ? table
      : table.filter((option) => option[filteredIndex] === filteredValue);

  const getOptions = (table, filteredIndex, filteredValue) =>
    filterOptions(
      filterOptions(
        filterOptions(table, filteredIndex[0], filteredValue[0]),
        filteredIndex[1],
        filteredValue[1]
      ),
      filteredIndex[2],
      filteredValue[2]
    );

  const [city, setCity] = useState();
  const [entity, setEntity] = useState();
  const [site, setSite] = useState();

  return (
    <div className="App">
      <Filter
        title={"select city"}
        table={tableData["City"]}
        inputValue={city}
        setInputValue={setCity}
      />
      <Filter
        title={"select entity type"}
        table={tableData["Entity Type"]}
        inputValue={entity}
        setInputValue={setEntity}
      />
      <Filter
        title={"select site name"}
        table={tableData["Site Name"]}
        inputValue={site}
        setInputValue={setSite}
      />

      {getOptions(
        table,
        ["City", "Entity Type", "Site Name"],
        [city, entity, site]
      ).map((options, i) => (
        <Display key={i} options={options} tableHeadRow={tableHeadRow} i={i} />
      ))}
    </div>
  );
}

export default App;
