import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { Form, Input } from '@rocketseat/unform';
import logo from '../../assets/logo.svg';
import { resetPasswordRequest } from '../../store/modules/forgotPassword/actions';

const schema = Yup.object().shape({
  token: Yup.string().required('O token é obrigatório'),
  password: Yup.string()
    .min(6, 'A senha deve conter no mínimo 6 caracteres')
    .required('A senha é obrigatória'),
});

export default function ResetPassword() {
  const dispatch = useDispatch();
  function handleSubmit({ password, token }) {
    dispatch(resetPasswordRequest(password, token));
  }
  return (
    <>
      <img src={logo} alt="Logo GoBarber" />
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input
          name="token"
          type="text"
          placeholder="Código que você recebeu no e-mail"
        />
        <Input name="password" type="password" placeholder="Sua nova senha" />
        <button type="submit">Recuperar senha</button>
      </Form>
    </>
  );
}
