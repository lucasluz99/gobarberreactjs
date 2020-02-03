import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Container, Content, Profile } from './styles';
import logo from '../../assets/logo-purple.svg';
import Notifications from '../Notifications';

export default function Header() {
  const profile = useSelector(state => state.user.profile);
  const name = useSelector(state => state.user.profile.name);
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
              <strong>{name}</strong>
              <Link to="/profile">Meu Perfil</Link>
            </div>
            <img
              src={
                profile.avatar
                  ? profile.avatar.url
                  : 'https://api.adorable.io/avatars/120/abott@adorable.png'
              }
              alt="Avatar"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
