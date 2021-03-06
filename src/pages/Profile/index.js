import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { useSelector, useDispatch } from 'react-redux';

import { Container } from './styles';
import AvatarInput from './AvatarInput';
import { updateProfileRequest } from '../../store/modules/user/actions';
import { signOut } from '../../store/modules/auth/actions';

export default function Profile() {
  const profile = useSelector(state => state.user.profile);
  const dispatch = useDispatch();
  function handleSubmit(data) {
    dispatch(updateProfileRequest(data));
  }

  function handleSignOut() {
    dispatch(signOut());
  }
  return (
    <Container>
      <Form initialData={profile} onSubmit={handleSubmit}>
        <AvatarInput name="avatar_id" />
        <Input name="name" placeholder="Seu nome completo" type="text" />
        <Input name="email" placeholder="Seu e-mail" type="email" />
        <hr />
        <Input
          name="oldPassword"
          placeholder="Sua senha antiga"
          type="password"
        />
        <Input name="password" placeholder="Sua nova senha" type="password" />
        <Input
          name="confirmPassword"
          placeholder="Confirme sua nova senha"
          type="password"
        />
        <button type="submit">Atualizar perfil</button>
      </Form>
      <button type="button" onClick={handleSignOut}>
        Sair do GoBarber
      </button>
    </Container>
  );
}
