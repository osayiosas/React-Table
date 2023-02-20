import "./App.css";
import myData from "./MOCK_DATA.json";
import * as React from "react";
import { useTable } from "react-table";

function App() {
  const data = React.useMemo(() => myData, []);
  const columns = React.useMemo(() => [
    {
      Header: "ID",
      accessor: "id",
    },
    {
      Header: "FIrst Name",
      accessor: "first_name",
    },
    {
      Header: "Last NAme",
      accessor: "last_name",
    },
    {
      Header: "Email",
      accessor: "id",
    },
    {
      Header: "ID",
      accessor: "email",
    },
    {
      Header: "Gender",
      accessor: "gender",
    },
    {
      Header: "University",
      accessor: "university",
    },
  ]);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data });

  return <div className="App">
    <div className="container">
      <table {...getTableProps()}>
        <thead>

        </thead>
      </table>
    </div>
  </div>;
}

export default App;
