import { delay, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { signFailure } from '../store/modules/auth/actions';

export default function* handleNetworkError(err) {
  if (err.message === 'Network Error') {
    toast.error('Erro interno,tente novamente mais tarde');
    yield put(signFailure());
    yield delay(3000);
    window.location.reload();
  }
}
