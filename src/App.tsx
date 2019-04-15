import React, { Component } from 'react';

import Table from './Table/Table';
import { CellData } from './Table/TableElements/TableCell';
import { Header } from './Table/TableElements/TableHeader';

const data: CellData[] = [
  {
    date: new Date(),
    name: 'Maks',
    overtime: 13,
    regularHours: 1,
    time: new Date(),
    totalHours: 14,
  },
  {
    date: new Date(),
    name: 'Olya',
    overtime: 13,
    regularHours: 1,
    time:new Date(),
    totalHours: 14,
  },
  {
    date: new Date(),
    name: 'Alisa',
    overtime: 13,
    regularHours: 1,
    time: new Date(),
    totalHours: 14,
  },
]

const headers: Header[] = [
  { 
    name: 'Date',
    isCentered: false,
  }, 
  {
    name: 'Time In/Out',
    isCentered: false
  }, 
  {
    name: 'Name',
    isCentered: false
  },
  {
    name: 'Regular Hours',
    isCentered: true
  },
  {
    name: 'Overtime',
    isCentered: true
  },
  {
    name: 'Total Hours',
    isCentered: true
  },
]
class App extends Component {
  render() {
    return <Table data={data} headers={headers} />;
  }
}

export default App;
