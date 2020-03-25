import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  padding: 30px;
  background: #eee;
  border-radius: 4px;

  footer {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    button {
      background: #555;
      color: #fff;
      border: 0;
      border-radius: 4px;
      padding: 12px 20px;
      font-weight: bold;
      text-transform: uppercase;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.03, '#555')};
      }
    }
  }
  @media (max-width: 660px) {
    footer {
      flex-direction: column-reverse;
    }
  }
`;
export const EmptyCart = styled.div`
  font-family: sans-serif;
  font-weight: bold;
  font-size: 24px;
  justify-content: center;
  align-items: center;
  padding: 20px;
  display: flex;
  flex-direction: column;
  line-height: 1.7;

  button {
    background: #f31431;
    color: white;
    border: 0;
    border-radius: 4px;
    padding: 12px 20px;
    font-weight: bold;
    width: 180px;
    height: 50px;
    text-transform: uppercase;
    transition: background 0.2s;
    margin-top: 15px;

    &:hover {
      background: ${darken(0.04, '#F31431')};
    }
  }
`;
export const ProductTable = styled.table`
  table-layout: fixed;
  width: 100%;

  thead th {
    color: #999;
    text-align: left;
    padding: 12px;
  }
  tbody td {
    padding: 12px;
    border-bottom: 1px solid #eee;
  }
  img {
    height: 100px;
  }

  strong {
    color: #333;
    display: block;
  }

  span {
    display: block;
    margin-top: 5px;
    font-size: 18px;
    font-weight: bold;
  }
  div {
    display: flex;
    align-items: center;
    input {
      border: 1px solid #ddd;
      border-radius: 4px;
      color: #666;
      padding: 6px;
      width: 50px;
    }
  }
  button {
    background: none;
    border: 0;
    padding: 6px;
  }

  @media (max-width: 770px) {
    thead {
      display: none;
    }
    tbody td {
      padding: 0;
      display: inline-block;
      width: 100%;
      text-align: center;
      margin-bottom: 5px;

      img {
        width: 200px;
        height: 200px;
        border-radius: 4px;
      }
      div {
        display: flex;
        justify-content: center;
      }
    }
  }
`;

export const Total = styled.div`
  display: flex;
  align-items: baseline;
  span {
    color: #999;
    font-weight: bold;
  }
  strong {
    font-size: 20px;
    margin-left: 5px;
  }
`;
