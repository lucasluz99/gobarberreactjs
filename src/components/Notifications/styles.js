import styled, { css } from 'styled-components';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { lighten } from 'polished';

export const Container = styled.div`
  position: relative;
`;

export const Badge = styled.button`
  background: 0;
  border: 0;
  position: relative;

  ${props =>
    props.hasUnread &&
    css`
      &::after {
        position: absolute;
        right: 0;
        top: 0;
        width: 8px;
        height: 8px;
        background: #ff892e;
        content: '';
        border-radius: 50%;
      }
    `}
`;

export const NoticationList = styled.div`
  position: absolute;
  width: 260px;
  left: 50%;
  transform: translateX(-50%);
  top: calc(100% + 30px);
  background: rgba(0, 0, 0, 0.6);
  border-radius: 4px;
  padding: 15px 5px;
  display: ${props => (props.visible ? 'block' : 'none')};
  &::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 0;
    transform: translateX(-50%) translateY(-100%);
    width: 0;
    height: 0;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-bottom: 20px solid rgba(0, 0, 0, 0.6);
  }
`;

export const Scroll = styled(PerfectScrollbar)`
  max-height: 260px;
  padding: 5px 15px;
`;

export const Notification = styled.div`
  color: #fff;
  padding-bottom: 15px;
  & + div {
    margin-top: 15;
    padding-top: 15px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    padding-bottom: 0px;
  }
  p {
    font-size: 13px;
    line-height: 1.3;
    margin-bottom: 3px;
  }

  time {
    display: block;
    font-size: 12px;
    opacity: 0.7;
  }

  button {
    font-size: 12px;
    border: 0;
    background: 0;
    color: ${lighten(0.2, '#7159c1')};
  }

  ${props =>
    props.unread &&
    css`
      &::after {
        content: '';
        display: inline-block;
        width: 8px;
        height: 8px;
        background: #ff892e;
        border-radius: 50%;
        margin-left: 7px;
      }
    `}
`;
