import React from 'react';

import {StyledTableHeader, StyledTableCell} from '../Table.styled';

export interface Header {
  name: string;
  isCentered: boolean;
}

export interface Headers {
  headers: Header[];
}

const TableHeader: React.FC<Headers> = ({ headers }) => 
  <StyledTableHeader>
    {headers.map((header, id) => <StyledTableCell key={id} isCentered={header.isCentered}>{header.name}</StyledTableCell>)}
  </StyledTableHeader>
;

export default TableHeader;