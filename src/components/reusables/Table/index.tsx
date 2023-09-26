import React from "react";
import { useRouter } from "next/router";
import {
  DataGrid,
  GridCallbackDetails,
  GridSortModel,
  GridColDef,
  GridRowsProp,
  GridNoRowsOverlay,
} from "@mui/x-data-grid";
import { Box } from "@mui/system";
import { DataGridProps } from "@mui/x-data-grid";
import { DataGridStyles, NoResultsMessage } from "./styles";
import Skeleton from "@mui/material/Skeleton";

export interface TableProps extends DataGridProps {
  rows: GridRowsProp;
  className?: string;
  columns: GridColDef[];
  tableWidth?: string | number;
  tableHeight?: string | number;
  onSortModelChange: (sort: GridSortModel) => void;
  onPageChange: (page: number, details?: GridCallbackDetails) => void;
  loading?: boolean;
}

const Table = ({
  tableHeight = "100%",
  tableWidth = "100%",
  onSortModelChange,
  onPageChange,
  loading,
  ...props
}: TableProps) => {
  function showSkeleton(lines: number) {
    const pices = [];
    for (let i = 0; i < lines + 2; i = i + 1) {
      pices.push(
        <Skeleton
          variant="rectangular"
          height={49}
          key={`skelline-${i}`}
          sx={{ marginBottom: "3px" }}
          animation="wave"
        />
      );
    }
    return pices;
  }

  return (
    <Box sx={{ height: tableHeight, width: tableWidth }}>
      {loading ? (
        showSkeleton(10)
      ) : (
        <DataGrid
          checkboxSelection
          {...props}
          onSortModelChange={onSortModelChange}
          disableColumnMenu
          rows={props.rows}
          columns={props.columns}
          sx={DataGridStyles}
          localeText={{
            MuiTablePagination: {
              labelDisplayedRows: ({ from, to, count }) =>
                `${from} - ${to} de ${count}`,
            },
          }}
        />
      )}
    </Box>
  );
};

export default Table;
