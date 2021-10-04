import styled from 'styled-components';

export const Wrapper = styled.nav`
  text-transform: uppercase;
  color: #212121;
  font-size: 1rem;
  
  .nav-active {
    color: #ee2562;
  }

  @media (min-width: 992px) {
    font-size: 0.85rem;
  }

  @media (min-width: 1200px) {
    font-size: 1rem;
    display:inline-block;
  }

  ul {
    padding:0;
    margin:0;
    display:flex;
    li {
      display: block;
      margin: 0 10px;
      position: relative;
      &:last-child{margin-right:0;}
      a {
        display: flex;
        padding: 0 0 0 10px;
        transition: all 0.2s ease;
        text-decoration: none;
        color: #000;

        div {
          margin: -4px 0 0 5px;
        }
      }

      ul{
          display:none;
          position: absolute;
          text-align: left;
          font-size: 1rem;
          padding: 15px 10px;
          text-transform: none;
          min-width: 200px;
          background: white;
          box-shadow: rgba(0,0,0,0.2) 0 5px 5px 0;
          top: 100%;
          left:0;
          z-index:999;
          li{
            border-bottom:1px solid rgba(0,0,0,0.1);
            padding-bottom:10px;
            margin-bottom:10px;
            &:last-child{
              border-bottom:none;
              padding-bottom:0;
              margin-bottom:0;
            }
          }
        }
        &:hover{
          ul{display:block;}
        }
      }
  }

 
`;
