import styled from 'styled-components';

export const TableWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const StyledTable = styled.div`
  width: 80%;
  margin: 120px auto;
`;

export const StyledTableRow = styled.div`
  display: grid;
  grid-template-columns: 15% 20% 20% 15% 15% 15%;
`;

export const StyledTableHeader = styled(StyledTableRow)`
  background-color: #ededed;
`;

export const StyledTableCell = styled.div<{ isCentered: boolean }>`
  padding: 10px 30px;
  ${props => props.isCentered && 'text-align: center;'}
`;

export const StyledTableUtilites = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledTableUtilitesItem = styled.div`
  min-width: 300px;
  margin: 10px 10px 10px 0;
`;

export const StyledDatePicker = styled.div`
  display: flex;
  border-radius: 3px;
  border: 1px solid gray;
  justify-content: center;
  position: relative;
`;

export const Arrow = styled.div`
  width: 20px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const ArrowLeft = styled(Arrow)`
  border-right: 1px solid gray;
  content: '<';
  position: absolute;
  top: 0;
  left: 5px;
  font-size: 25px;
`;

export const ArrowRight = styled(Arrow)`
  border-left: 1px solid gray;
  content: '>';
  position: absolute;
  top: 0;
  right: 5px;
  font-size: 25px;
`;

export const DateInfo = styled.div`
  padding: 10px 5px;
`;