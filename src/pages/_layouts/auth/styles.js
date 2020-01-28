import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  background: linear-gradient(-90deg, #7159c1, #ab59c1);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 315px;
  text-align: center;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
  }

  input {
    background: rgba(0, 0, 0, 0.1);
    color: #fff;
    height: 44px;
    padding: 0 15px;
    border: 0;
    border-radius: 4px;
    margin-bottom: 7px;
    &::placeholder {
      color: rgba(255, 255, 255, 0.7);
    }
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

  a {
    color: #fff;
    margin-top: 15px;
    font-size: 16px;
    opacity: 0.8;

    &:hover {
      opacity: 1;
    }
  }
`;
