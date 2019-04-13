import React from 'react';

import {StyledTableCell} from '../Table.styled';

export interface CellData {
  date: string;
  time: any;
  name: string;
  regularHours: number;
  overtime: number;
  totalHours: number;
}

const TableCell: React.FC<CellData> = ({ date, name, overtime, regularHours, time, totalHours }) => 
  <>
    <StyledTableCell isCentered={false}>
      {date}
    </StyledTableCell>
    <StyledTableCell isCentered={false}>
      {time}
    </StyledTableCell>
    <StyledTableCell isCentered={false}>
      {name}
    </StyledTableCell>
    <StyledTableCell isCentered={true}>
      {overtime}
    </StyledTableCell>
    <StyledTableCell isCentered={true}>
      {regularHours}
    </StyledTableCell>
    <StyledTableCell isCentered={true}>
      {totalHours}
    </StyledTableCell>
  </>
;

export default TableCell;