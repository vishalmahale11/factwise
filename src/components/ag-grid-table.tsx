import { AgGridReact } from "ag-grid-react";
import { useMemo, useState } from "react";
import type { ColDef } from "ag-grid-community";
import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";
import AppTablePagination from "./pagination";

ModuleRegistry.registerModules([AllCommunityModule]);

interface AgGridTableProps {
  rowData: any[];
  columnDefs: ColDef[];
  defaultPageSize?: number;
}

const AGGridTable = ({
  rowData,
  columnDefs,
  defaultPageSize = 5,
}: AgGridTableProps) => {
  const [pageSize, setPageSize] = useState<number>(defaultPageSize);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return rowData.slice(start, start + pageSize);
  }, [rowData, pageSize, currentPage]);

  const handlePageChange = (page: number) => setCurrentPage(page);
  const handlePageSizeChange = (size: number) => {
    setPageSize(size);
    setCurrentPage(1);
  };

  return (
    <div className="w-full flex flex-col">
      <div className="flex justify-end items-center mb-4">
        <label className="text-sm font-medium mr-2">Page Size:</label>
        <select
          value={pageSize}
          onChange={(e) => handlePageSizeChange(Number(e.target.value))}
          className="border border-gray-300 rounded p-1 text-sm"
        >
          {[5, 10, 20].map((size) => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
        </select>
      </div>

      <div className="ag-theme-alpine w-full">
        <AgGridReact
          rowData={paginatedData}
          columnDefs={columnDefs}
          pagination={false}
          domLayout="autoHeight"
          defaultColDef={{
            minWidth: 120,
            sortable: true,
            filter: true,
            resizable: true,
            cellStyle: { textAlign: "left" },
            headerClass: "ag-left-aligned-header",
          }}
        />
      </div>

      <div className="flex items-center justify-between text-sm text-gray-600 mt-4">
        <div>
          Showing {(currentPage - 1) * pageSize + 1}–
          {Math.min(currentPage * pageSize, rowData.length)} of {rowData.length}
        </div>
        <AppTablePagination
          page={currentPage}
          pageSize={pageSize}
          totalCount={rowData.length}
          onPageChange={handlePageChange}
          showQuickJumper
        />
      </div>
    </div>
  );
};

export default AGGridTable;
