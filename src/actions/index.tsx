
export function saveStateAttr(attr: string, value: any) {
  return {
    type: 'SAVE_STATE_ATTR',
    [attr]: value
  };
}

export function resetModal() {
  return {
    type: 'RESET_MODAL_STATE'
  };
}

export function setupState(data: any) {
  return {
    type: 'SETUP_STATE',
    data
  };
}

export function saveUser(user: Partial<any>) {
  return {
    type: 'SAVE_USER',
    user
  };
}

export function updateModal(field: string, value: any) {
  return {
    type: 'UPDATE_MODAL',
    field,
    value
  };
}

export function resetState() {
  return {
    type: 'RESET_STATE'
  };
}
