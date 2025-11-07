import { useCallback, memo } from "react";
import Pagination from "rc-pagination";
import localeInfo from "rc-pagination/lib/locale/en_US";
import "rc-pagination/assets/index.css";

interface IAppTablePagination {
  onPageChange: (page: number) => void;
  page: number;
  pageSize: number;
  totalCount: number;
  showQuickJumper?: boolean;
}

const AppTablePagination = memo(
  ({
    onPageChange,
    page,
    pageSize,
    totalCount,
    showQuickJumper = true,
  }: IAppTablePagination) => {
    const handlePageChange = useCallback(
      (newPage: number) => {
        onPageChange(newPage);
      },
      [onPageChange]
    );

    return (
      <Pagination
        locale={localeInfo}
        onChange={handlePageChange}
        current={page}
        defaultPageSize={25}
        pageSize={pageSize}
        total={totalCount}
        showQuickJumper={showQuickJumper}
      />
    );
  }
);

AppTablePagination.displayName = "AppTablePagination";

export default AppTablePagination;
