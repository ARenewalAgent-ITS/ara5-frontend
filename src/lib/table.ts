import queryString, { StringifyOptions } from 'query-string';

import { ServerTableState } from '@/hooks/useServerTable';
type BuildPaginationTableParam = {
  /** API Base URL, with / on the front */
  baseUrl: string;
  tableState: ServerTableState;
  /** Parameter addition
   * @example ['include=user,officer']
   */
  option?: StringifyOptions;
  additionalParam?: Record<string, unknown>;
  status?: string;
};
type BuildPaginationTableURL = (props: BuildPaginationTableParam) => string;

export const buildPaginatedTableURL: BuildPaginationTableURL = ({
  baseUrl,
  tableState,
  option,
  additionalParam,
  status,
}) => {
  const queryParams = queryString.stringify(
    {
      perPage: tableState.pagination.pageSize,
      page: tableState.pagination.pageIndex + 1,
      sortby: tableState.sorting.length > 0 ? tableState.sorting[0].id : '',
      type:
        tableState.sorting.length > 0
          ? tableState.sorting[0].desc
            ? 'desc'
            : 'asc'
          : '',
      filter: tableState.globalFilter,
      status,
      ...additionalParam,
    },
    {
      arrayFormat: 'bracket',
      skipEmptyString: true,
      ...option,
    }
  );

  return `${baseUrl}?${queryParams}`;
};
