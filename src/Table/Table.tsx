import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

import { StyledTable, TableWrapper, StyledTableRow, StyledTableUtilites, StyledTableUtilitesItem } from './Table.styled';
import TableCell, { CellData } from './TableElements/TableCell';
import TableHeader, { Header } from './TableElements/TableHeader';
import TableSelect from './TableElements/TableSelect';
import TableDateSelect from './TableElements/TableDateSelect';
import TableTimeSelect from './TableElements/TableTimeSelect';
import { getTimeForCompare } from '../helpers';

export interface Props {
  data: CellData[];
  headers: Header[];
}

export interface DateInterface {
  startDate: Date;
  endDate: Date;
}

export interface TimeInterface {
  startTime: Date;
  endTime: Date;
}

interface FilterInterface {
  names: string[];
  date: DateInterface,
  time: TimeInterface,
}

const initialState: FilterInterface = {
  names: [],
  date: {
    endDate: new Date(),
    startDate: new Date()
  },
  time: {
    startTime: new Date(),
    endTime: new Date(),
  }
}

const Table: React.FC<Props> = ({ data, headers }) => {
  const [filter, setFilter] = useState<FilterInterface>(initialState);
  const [tableData, setTableData] = useState(data);

  useEffect(() => {
    let tableData = data;
    if(filter.names[0]){ 
      tableData = tableData.filter(data => filter.names.filter(name => name === data.name)[0]);
    }
    tableData = tableData.filter(data => (data.date.getTime() <= filter.date.endDate.getTime()) && (data.date.getTime() >= filter.date.startDate.getTime()));
    tableData = tableData.filter(data => (getTimeForCompare(data.time) <= getTimeForCompare(filter.time.endTime) && (getTimeForCompare(data.time) >= getTimeForCompare(filter.time.startTime))));
        
    setTableData(tableData);
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

  const setTypeFilter = (filterData: any, type: string) => {
    switch(type) {
      case 'names': 
          setFilter({
              ...filter,
              names: filterData,
            });
          break;

      case 'date':
          setFilter({
            ...filter,
            date: {
              startDate: filterData.startDate,
              endDate: filterData.endDate,
            }
          });
          break;

      case 'time':
          setFilter({
            ...filter,
            time: {
              startTime: filterData.startTime,
              endTime: filterData.endTime,
            }
          });
          break;

      default:
          break;
    }
  };

  return (
    <TableWrapper>
      <StyledTable>
        <StyledTableUtilites>
          <StyledTableUtilitesItem>
            <TableDateSelect onChange={(date: DateInterface) => setTypeFilter(date, 'date')}/>
          </StyledTableUtilitesItem>
          <StyledTableUtilitesItem>
            <TableTimeSelect onChange={(time: TimeInterface) => setTypeFilter(time, 'time')}/>
          </StyledTableUtilitesItem>
          <StyledTableUtilitesItem>
            <TableSelect names={getUniqueNames(data)} onChange={(names: string[]) => setTypeFilter(names, 'names')} />
          </StyledTableUtilitesItem>
        </StyledTableUtilites>
        <TableHeader headers={headers}/>
        {renderTableData()}
      </StyledTable>
    </TableWrapper>);
};

export default Table;