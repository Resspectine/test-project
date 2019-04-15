import React, { useState, useRef, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import useOutsideClick from '@rooks/use-outside-click';
import { formatDate, getTimeFromDate } from '../../helpers';
import { TimeInterface } from '../Table';
import { StyledDatePicker, DateInfo } from '../Table.styled';

export interface Props {
  onChange: (time: TimeInterface) => void;
};

const TableTimeSelect: React.FC<Props> = ({ onChange }) => {
  const [isOpened, setIsOpened] = useState(false);
  const [startTime, setStartTime] = useState<Date | null>(new Date());
  const [endTime, setEndTime] = useState<Date | null>(new Date());
  const ref = useRef(null);

  useEffect(() => {
    startTime && endTime && onChange({
        startTime: startTime,
        endTime: endTime
      });
  }, [startTime, endTime]);
  
  useOutsideClick(ref, () => setIsOpened(false), true);

  return <StyledDatePicker ref={ref}> 
    {isOpened
      ? 
      <>
        <DatePicker
          onChange={date => setStartTime(date)}
          value={`${startTime && getTimeFromDate(startTime)}`}
          showTimeSelect
          showTimeSelectOnly
          timeIntervals={15}
          dateFormat="h:mm aa"
          timeCaption="Time"
        />
        <DatePicker
          onChange={date => setEndTime(date)}
          value={`${endTime && getTimeFromDate(endTime)}`}
          showTimeSelect
          showTimeSelectOnly
          timeIntervals={15}
          dateFormat="h:mm aa"
          timeCaption="Time"
        />
      </>
      : (
      <DateInfo onClick={() => setIsOpened(true)}>
        {startTime && getTimeFromDate(startTime)} - {endTime && getTimeFromDate(endTime)}
      </DateInfo>)}
    </StyledDatePicker>
};

export default TableTimeSelect;