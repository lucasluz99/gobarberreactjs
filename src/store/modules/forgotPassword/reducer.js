import produce from 'immer';

const INITIAL_STATE = {
  email: null,
};

export default function forgotPassword(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@forgotPassword/SUCCESS':
      return produce(state, draft => {
        draft.email = action.payload.email;
      });
    case '@forgotPassword/RESET_SUCCESS':
      return produce(state, draft => {
        draft.email = null;
      });
    default:
      return state;
  }
}
