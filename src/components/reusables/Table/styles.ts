import styled from 'styled-components';

export const DataGridStyles = {
  backgroundColor: '#FFFFFF',
  boxShadow: '0px 5px 21px rgba(0, 0, 0, 0.1)',
  '& .MuiDataGrid-columnHeaderTitle': {
    fontWeight: 'bold',
    fontSize: '.8rem'
  },
  '& .MuiDataGrid-columnSeparator': { visibility: 'hidden' },
  '& .MuiTablePagination-displayedRows': {
    fontWeight: 'bold',
    fontSize: '.8rem'
  },
  '&>.MuiDataGrid-main': {
    '& div div div div >.MuiDataGrid-cell': {
      borderBottom: 'none'
    }
  }
};

export const NoResultsMessage = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
