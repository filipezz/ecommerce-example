import styled, { keyframes } from 'styled-components';
import { darken } from 'polished';

const blink = keyframes`
  from {
    opacity: 0.7;
  }

  to {
    opacity: 0.5;
  }
`;

export const ProductList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 20px;
  list-style: none;

  li {
    display: flex;
    flex-direction: column;
    background: #fff;
    border-radius: 4px;
    padding: 20px;

    img {
      align-self: center;
      max-width: 250px;
    }

    > strong {
      font-size: 16px;
      line-height: 20px;
      color: #333;
      margin-top: 5px;
    }
    > span {
      font-size: 21px;
      font-weight: bold;
      margin: 5px 0 20px;
    }

    button {
      background: #555;
      color: #fff;
      border: 0;
      border-radius: 4px;
      overflow: hidden;
      margin-top: auto;
      display: flex;
      align-items: center;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.05, '#555')};
      }
      div {
        display: flex;
        align-items: center;
        padding: 12px;
        background: rgba(0, 0, 0, 0.1);
      }

      svg {
        margin-right: 5px;
      }
      span {
        flex: 1;
        text-align: center;
        font-weight: bold;
      }
    }
  }
`;

export const SkeletonItem = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 20px;
  list-style: none;
  animation: ${blink} 0.8s ease-in-out alternate  infinite;
}

  padding: 20px;

  li {
    display: flex;
    flex-direction: column;

    border-radius: 4px;
    padding: 20px;
    height: 426px;

    div {
      align-self: center;
      width: 250px;
      height: 250px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.4);
    }
    summary {
      align-self: center;
      margin-top: 10px;
      width: 250px;
      height: 25px;
      border-radius: 10px;
      background: rgba(255, 255, 255, 0.4);
    }
    mark {
      align-self: flex-start;
      margin-left: 4px;
      margin-top: 10px;
      width: 100px;
      height: 25px;
      border-radius: 10px;
      background: rgba(255, 255, 255, 0.4);
    }
    footer {
      align-self: flex-start;
      margin-left: 4px;
      margin-top: auto;
      width: 250px;
      height: 35px;
      border-radius: 10px;
      background: rgba(255, 255, 255, 0.4);
    }
  }
`;
