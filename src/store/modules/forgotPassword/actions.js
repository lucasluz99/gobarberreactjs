export function forgotPasswordRequest(email) {
  return {
    type: '@forgotPassword/REQUEST',
    payload: { email },
  };
}

export function forgotPasswordSuccess(email) {
  return {
    type: '@forgotPassword/SUCCESS',
    payload: { email },
  };
}

export function resetPasswordRequest(password, token) {
  return {
    type: '@forgotPassword/RESET_REQUEST',
    payload: { password, token },
  };
}

export function resetPasswordSuccess() {
  return {
    type: '@forgotPassword/RESET_SUCCESS',
  };
}
