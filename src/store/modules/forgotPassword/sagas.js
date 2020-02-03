import { all, takeLatest, call, put, select } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { forgotPasswordSuccess, resetPasswordSuccess } from './actions';
import history from '../../../services/history';
import handleNetworkError from '../../../services/handleNetworkError';

import api from '../../../services/api';

export function* forgotPassword({ payload }) {
  try {
    console.tron.log(payload.email);
    yield call(api.post, '/forgot_password', { email: payload.email });

    toast.success('Foi enviando um código para seu e-mail');
    yield put(forgotPasswordSuccess(payload.email));
    history.push('/reset_password');
  } catch (err) {
    yield handleNetworkError(err);

    console.tron.log(err.response);
    toast.error('Ocorreu um erro,tente novamente mais tarde');
  }
}

export function* resetPassword({ payload }) {
  try {
    const { password, token } = payload;
    const email = yield select(state => state.forgotPassword.email);
    console.tron.log(email);
    const response = yield call(api.post, '/reset_password', {
      email,
      password,
      token,
    });
    yield put(resetPasswordSuccess());
    console.tron.log(response);
    toast.success('Senha alterada com sucesso');
    history.push('/');
    yield put(resetPasswordSuccess());
  } catch (err) {
    yield handleNetworkError(err);
    if (err.response.data.error === 'Invalid Token') {
      toast.error('Token incorreto');
    } else if (
      err.response.data.error === 'Token expired,generate another one'
    ) {
      toast.error('Token expirado,gere outro');
    }
  }
}

export default all([
  takeLatest('@forgotPassword/REQUEST', forgotPassword),
  takeLatest('@forgotPassword/RESET_REQUEST', resetPassword),
]);
