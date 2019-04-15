import React, { useState, useRef, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import useOutsideClick from '@rooks/use-outside-click';
import { formatDate, monthDiff } from '../../helpers';
import { DateInterface } from '../Table';
import { StyledDatePicker, ArrowLeft, ArrowRight, DateInfo } from '../Table.styled';

export interface Props {
  onChange: (date: DateInterface) => void;
};

const TableDateSelect: React.FC<Props> = ({ onChange }) => {
  const [isOpened, setIsOpened] = useState(false);
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(new Date());
  const ref = useRef(null);

  useEffect(() => {
    startDate && endDate && onChange({
        startDate: startDate,
        endDate: endDate
      });
  }, [startDate, endDate]);
  
  useOutsideClick(ref, () => setIsOpened(false), true);

  const moveMonth = (type: string) => {
    if(!startDate || !endDate) {
      return;
    }

    const diff = monthDiff(startDate, endDate);
    if(type === 'left') {
      setEndDate(startDate);
      setStartDate(new Date(startDate.getTime() - diff));
    } else {
      setStartDate(endDate);
      setEndDate(new Date(endDate.getTime() + diff));
    }
  }

  return <StyledDatePicker ref={ref}> 
    {isOpened
      ? 
      <>
        <DatePicker onChange={date => setStartDate(date)} value={`${startDate && formatDate(startDate)}`}/>
        <DatePicker onChange={date => setEndDate(date)} value={`${endDate && formatDate(endDate)}`}/>
      </>
      : (
        <>
          <ArrowLeft onClick={() => moveMonth('left')}>{'<'}</ArrowLeft>
          <DateInfo onClick={() => setIsOpened(true)}>
            {startDate && formatDate(startDate)} - {endDate && formatDate(endDate)}
          </DateInfo>
          <ArrowRight onClick={() => moveMonth('right')}>{'>'}</ArrowRight>
        </>)}
    </StyledDatePicker>
};

export default TableDateSelect;