import styled from 'styled-components';

export const Container = styled.header`
  background: #fff;
  padding: 15px 0;
  margin-bottom: 20px;
`;

export const Content = styled.div`
  margin: 0 auto;
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    img {
      padding-right: 20px;
      margin-right: 20px;
      border-right: 1px solid #eee;
    }

    a {
      font-weight: bold;
      color: #7159c1;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
  }

  aside {
    display: flex;
    align-items: center;
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
  padding-left: 20px;
  border-left: 1px solid #eee;

  div {
    text-align: right;
  }
  strong {
    color: #222;
    display: block;
    margin-bottom: 3px;
  }
  a {
    font-size: 12px;
    color: #999;
  }

  > img {
    margin-left: 10px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 1px solid #eee;
    background: #eee;
  }

  a {
    font-weight: bold;
  }
`;
