import React from 'react';

import { StyledTable, TableWrapper, StyledTableRow } from './Table.styled';
import TableCell, { CellData } from './TableElements/TableCell';
import TableHeader, { Header } from './TableElements/TableHeader';

export interface Props {
  data: CellData[];
  headers: Header[];
}

const Table: React.FC<Props> = ({ data, headers }) => {
  const renderTableData = data.map((el, id) => (
    <StyledTableRow key={id}>
      <TableCell {...el}/>
    </StyledTableRow>
  ));

  return (
    <TableWrapper>
      <StyledTable>
        <TableHeader headers={headers}/>
        {renderTableData}
      </StyledTable>
    </TableWrapper>);
};

export default Table;