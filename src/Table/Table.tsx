import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

import { StyledTable, TableWrapper, StyledTableRow, StyledTableUtilites } from './Table.styled';
import TableCell, { CellData } from './TableElements/TableCell';
import TableHeader, { Header } from './TableElements/TableHeader';
import TableSelect from './TableElements/TableSelect';

export interface Props {
  data: CellData[];
  headers: Header[];
}

const Table: React.FC<Props> = ({ data, headers }) => {
  const [filter, setFilter] = useState<{names: string[]}>({names: []});
  const [tableData, setTableData] = useState(data);

  useEffect(() => {
    setTableData(data.filter(data => !filter.names[0] || filter.names.filter(name => name === data.name)[0]));
  }, [filter])

  const renderTableData = () => tableData.map((el, id) => (
    <StyledTableRow key={id}>
      <TableCell {...el}/>
    </StyledTableRow>
  ));

  const getUniqueNames = (data: CellData[]) => {
    const set = new Set();
    data.forEach(cell => set.add(cell.name));
    return Array.from(set);
  }

  const setTypeFilter = (filterArray: string[], type: string) => {
    switch(type) {
      case 'names': 
          setFilter({
              ...filter,
              names: filterArray,
            });
          break;
    }
  };

  return (
    <TableWrapper>
      <StyledTable>
        <StyledTableUtilites>
          <DatePicker onChange={e => console.log(e)} />
          <TableSelect names={getUniqueNames(data)} onChange={(names: string[]) => setTypeFilter(names, 'names')} />
        </StyledTableUtilites>
        <TableHeader headers={headers}/>
        {renderTableData()}
      </StyledTable>
    </TableWrapper>);
};

export default Table;