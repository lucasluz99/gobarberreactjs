import React from 'react';

import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { Form, Input } from '@rocketseat/unform';
import InputEye from '../../components/InputEye';
import logo from '../../assets/logo.svg';
import { forgotPasswordRequest } from '../../store/modules/forgotPassword/actions';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
});

export default function SignIn() {
  const dispatch = useDispatch();

  function handleSubmit({ email }) {
    dispatch(forgotPasswordRequest(email));
  }
  return (
    <>
      <img src={logo} alt="Logo GoBarber" />
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="email" type="email" placeholder="Seu e-mail" />
        <button id="eye" type="submit">
          Enviar
        </button>
        <Link to="/">Voltar</Link>
      </Form>
    </>
  );
}
