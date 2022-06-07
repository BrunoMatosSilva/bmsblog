import styled from 'styled-components';

export const CategoryContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.lightgrey2};

  section {
    display: flex;
    flex-direction: row;
    padding-top: 2rem;
    padding-bottom: 4rem;
    gap: 2rem;

    @media(max-width: 900px){
      
    }
  }
`;
