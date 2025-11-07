import { AgGridReact } from "ag-grid-react";
import { useState } from "react";
import type { ColDef } from "ag-grid-community";
import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";

ModuleRegistry.registerModules([AllCommunityModule]);

interface Car {
  make: string;
  model: string;
  price: number;
  electric: boolean;
}

const AGGrid = () => {
  const [rowData, setRowData] = useState<Car[]>([
    { make: "Tesla", model: "Model Y", price: 64950, electric: true },
    { make: "Ford", model: "F-Series", price: 33850, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
  ]);

  const [colDefs, setColDefs] = useState<ColDef<Car>[]>([
    { field: "make" },
    { field: "model" },
    { field: "price" },
    { field: "electric" },
  ]);

  const domLayout = "autoHeight";

  return (
    <div className="text-black">
      <AgGridReact
        rowData={rowData}
        columnDefs={colDefs}
        domLayout={domLayout}
      />
    </div>
  );
};

export default AGGrid;
