import React from 'react';
import Select  from 'react-select';

export interface Props {
  names: string[];

  onChange: (names: string[]) => void;
};

const TableHeader: React.FC<Props> = ({ names, onChange }) => {
  const options = names.map(name => ({
    label: name,
    value: name.toLowerCase(),
  }));
  
  const filterSelect = (names: any) => {
    onChange(names.map((name: any) => name.label));
  }

  return <Select options={options} isMulti closeMenuOnSelect={false} onChange={filterSelect} />
};

export default TableHeader;