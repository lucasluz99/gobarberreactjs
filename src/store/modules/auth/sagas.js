import { all, call, put, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import history from '../../../services/history';
import handleNetworkError from '../../../services/handleNetworkError';
import api from '../../../services/api';
import { signInSuccess, signFailure, signUpSuccess } from './actions';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, '/sessions', { email, password });

    const { token, user } = response.data;

    if (!user.provider) {
      toast.error('Usuário não é um prestador de serviços');
      yield put(signFailure());
      return;
    }
    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(signInSuccess(token, user));

    history.push('/dashboard');
  } catch (err) {
    yield handleNetworkError(err);

    const { error } = err.response.data;

    toast.error(
      error === 'User not found'
        ? 'Não existe usuário com este e-mail'
        : 'Senha incorreta'
    );
    yield put(signFailure());
  }
}

export function* signUp({ payload }) {
  try {
    const { name, email, password } = payload;

    yield call(api.post, '/users', {
      name,
      email,
      password,
      provider: true,
    });
    toast.success('Conta criada com sucesso');
    yield put(signUpSuccess());
    history.push('/');
  } catch (err) {
    yield handleNetworkError(err);

    toast.error('Este e-mail já possui uma conta');
    yield put(signFailure());
  }
}
export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export function signOut() {
  history.push('/');
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
  takeLatest('@auth/SIGN_OUT', signOut),
]);
