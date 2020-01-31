import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Container, Content, Profile } from './styles';
import logo from '../../assets/logo-purple.svg';
import Notifications from '../Notifications';

export default function Header() {
  const avatar = useSelector(state => state.user.profile.avatar.url);
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="Logo GoBarber" />
          <Link to="/dashboard">Dashboard</Link>
        </nav>

        <aside>
          <Notifications />
          <Profile>
            <div>
              <strong>Lucas Luz</strong>
              <Link to="/profile">Meu Perfil</Link>
            </div>
            <img src={avatar} alt="Avatar" />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
