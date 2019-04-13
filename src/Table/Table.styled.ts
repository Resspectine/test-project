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
