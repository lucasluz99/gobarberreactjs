import { all, takeLatest, put, call } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '../../../services/api';
import { updateProfileSuccess, updateProfileFailure } from './actions';

function* updateProfile({ payload }) {
  try {
    // eslint-disable-next-line camelcase
    const { name, email, avatar_id, ...rest } = payload.data;

    const profile = {
      name,
      email,
      avatar_id,
      ...(rest.oldPassword ? rest : {}),
    };

    const response = yield call(api.put, '/users', profile);

    toast.success('Usúario atualizado com sucesso');

    yield put(updateProfileSuccess(response.data));
  } catch (err) {
    const error = err.response.data;

    yield put(updateProfileFailure());
    toast.error('Erro ao atualizar o perfil,verifique seus dados');
    console.tron.log(error);
  }
}
export default all([takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile)]);
