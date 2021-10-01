import styled from 'styled-components';

export const Wrapper = styled.header`
  border-bottom: 1px solid #e7e7e7;
  position: fixed;
  width: 100%;
  z-index: 10000;
  background:white;
  top:0;
`;

export const Content = styled.div`
  height: 100%;

  img {
    max-width: 150px;
    margin: 0;
    padding: 12px 0;
  }
`;
