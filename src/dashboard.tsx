import AGGridTable from "./components/ag-grid-table";
import data from "./data.json";
import MicroLabel from "./components/microlabel";
import { Dot } from "lucide-react";
import type { ColDef } from "ag-grid-community";

const Dashboard = () => {
  const employees = data?.employees || [];

  const colDefs: ColDef[] = [
    { headerName: "ID", field: "id", width: 80 },
    {
      headerName: "Status",
      field: "isActive",
      width: 120,
      cellRenderer: (params: any) => (
        <MicroLabel
          labelText={params.value ? "Active" : "Inactive"}
          textColor={params.value ? "text-green-800" : "text-red-800"}
          bg={params.value ? "bg-green-50" : "bg-red-50"}
          rightIcon={<Dot />}
          height="h-8 px-1 my-1"
        />
      ),
    },
    { headerName: "First Name", field: "firstName", width: 150 },
    { headerName: "Last Name", field: "lastName", width: 150 },
    { headerName: "Email", field: "email", width: 300 },
    { headerName: "Department", field: "department", width: 140 },
    { headerName: "Position", field: "position", width: 180 },
    { headerName: "Salary", field: "salary", width: 120 },
    { headerName: "Hire Date", field: "hireDate", width: 120 },
    { headerName: "Location", field: "location", width: 120 },
    {
      headerName: "Performance Rating",
      field: "performanceRating",
      width: 160,
    },
    {
      headerName: "Projects Completed",
      field: "projectsCompleted",
      width: 160,
    },
    {
      headerName: "Skills",
      field: "skills",
      width: 160,
      cellRenderer: (params: any) => params.value.join(", "),
    },
    { headerName: "Manager", field: "manager", width: 150 },
  ];

  return (
    <div className="w-screen min-h-screen bg-white overflow-x-hidden">
      <div className="flex items-center space-x-3 mb-6 px-8">
        <img src="/factWise.svg" alt="FactWise Logo" className="w-16 h-16" />
        <p className="font-bold text-2xl">Factwise Dashboard</p>
      </div>

      <div className="w-full px-4">
        <AGGridTable
          rowData={employees}
          columnDefs={colDefs}
          defaultPageSize={5}
        />
      </div>
    </div>
  );
};

export default Dashboard;
