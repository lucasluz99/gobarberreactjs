import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 600px;
  margin: 50px auto;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 20px;

    input {
      background: rgba(0, 0, 0, 0.1);
      color: #fff;
      height: 44px;
      padding: 0 15px;
      border: 0;
      border-radius: 4px;
      margin-bottom: 10px;
      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }
    span {
      align-self: flex-start;
      margin: 0 0 10px;
      color: #fff;
      font-weight: bold;
    }

    hr {
      border: 0;
      height: 1px;
      background: rgba(255, 255, 255, 0.4);
      margin: 10px 0 20px;
    }

    button {
      margin: 5px 0;
      height: 44px;
      background: #3b9eff;
      border: 0;
      border-radius: 4px;
      font-size: 14px;
      text-transform: uppercase;
      color: #fff;
      font-weight: bold;
      letter-spacing: 1px;
      transition: background 200ms;

      &:hover {
        background: ${darken(0.04, '#3b9eff')};
      }
    }
  }

  > button {
    margin: 5px 0;
    height: 44px;
    background: #f64c75;
    border: 0;
    width: 100%;
    border-radius: 4px;
    font-size: 14px;
    text-transform: uppercase;
    color: #fff;
    font-weight: bold;
    letter-spacing: 1px;
    transition: background 200ms;

    &:hover {
      background: ${darken(0.07, '#f64c75')};
    }
  }
`;
