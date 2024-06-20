/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { DataGrid, GridColDef, GridPaginationModel } from "@mui/x-data-grid";
import { useNavigate } from "react-router-dom";
import view from "../../assets/images/svg/tableIcon/Vector.svg";
import edit from "../../assets/images/svg/tableIcon/lucide_edit.svg";
import Stack from "@mui/material/Stack";
import Pagination from "@mui/material/Pagination";
import "./table.css";
import Popper from "../poper";

// Define the type for the rows data
interface RowData {
  id: number;
  companyname: string;
  start_date: string;
  status: string;
}

const Table: React.FC = () => {
  const navigate = useNavigate();
  const [rows, setRows] = useState<RowData[]>([]);
  const [page, setPage] = useState<number>(0); // Zero-based index
  const [pageSize, setPageSize] = useState<number>(10);
  const [rowCount, setRowCount] = useState<number>(0);

  const handleClick = () => {
    navigate("/campaign-information");
  };

  useEffect(() => {
    const fetchData = async (page: number, pageSize: number) => {
      try {
        const response = await axios.get(
          `https://infinion-test-int-test.azurewebsites.net/api/Campaign?page=${page}&pageSize=${pageSize}`
        );
        const data: RowData[] = response.data.map((item: any) => ({
          id: item.id, // Or any unique identifier from the API data
          companyname: item.campaignName, // Adjust based on your data structure
          start_date: item.startDate, // Adjust based on your data structure
          status: item.campaignStatus, // Adjust based on your data structure
        }));
        console.log(data);

        setRows(data);
        setRowCount(response.data.totalCount); // Adjust if your API returns total count of records
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(page, pageSize);
  }, [page, pageSize]);

  const handlePageChange = (params: GridPaginationModel) => {
    setPage(params.page);
    setPageSize(params.pageSize);
  };

  const columns: GridColDef[] = [
    { field: "id", headerName: "S/N", width: 90 },
    {
      field: "companyname",
      headerName: "Company Name",
      width: 150,
      editable: false,
    },
    {
      field: "start_date",
      headerName: "Start Date",
      width: 150,
      editable: false,
    },
    {
      field: "status",
      headerName: "Status",
      width: 150,
      editable: false,
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="actions">
            <div className="view">
              <img
                src={view}
                alt="View"
                onClick={handleClick}
                style={{ cursor: "pointer" }}
              />
              <img src={edit} alt="Edit" style={{ cursor: "pointer" }} />
              <Popper id={params.row.id} />
            </div>
          </div>
        );
      },
    },
  ];

  return (
    <div className="table">
      <DataGrid
        className="datagrid"
        rows={rows}
        columns={columns}
        paginationMode="server"
        rowCount={rowCount}
        pageSizeOptions={[10]}
        onPaginationModelChange={handlePageChange}
        disableRowSelectionOnClick
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
              page: 0,
            },
          },
        }}
      />
      <Stack spacing={2} className="pagination">
        <Pagination
          count={Math.ceil(rowCount / pageSize)}
          page={page + 1} // Pagination component is 1-based index
          onChange={(event, value) => setPage(value - 1)} // Convert to zero-based index
          color="primary"
        />
      </Stack>
    </div>
  );
};

export default Table;




