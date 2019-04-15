import React from 'react';

import {StyledTableCell} from '../Table.styled';
import { formatDate, getTimeFromDate } from '../../helpers';

export interface CellData {
  date: Date;
  time: Date;
  name: string;
  regularHours: number;
  overtime: number;
  totalHours: number;
}

const TableCell: React.FC<CellData> = ({ date, name, overtime, regularHours, time }) => 
  <>
    <StyledTableCell isCentered={false}>
      {formatDate(date)}
    </StyledTableCell>
    <StyledTableCell isCentered={false}>
      {getTimeFromDate(time)}
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
      {overtime + regularHours}
    </StyledTableCell>
  </>
;

export default TableCell;