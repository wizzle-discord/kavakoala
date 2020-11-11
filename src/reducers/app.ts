export interface AppReducer {
  id: number
}

const defaultState: AppReducer = {
  id: 0
};

export default function app(state = defaultState, action: any) {
  const { field, type, value, data } = action;
  switch(type) {
  case 'SAVE_STATE_ATTR':
    return {
      ...state,
      [field]: value
    };
  case 'RESET_STATE':
    return defaultState;
  case 'SETUP_STATE':
    return {
      ...defaultState,
      ...state,
      ...data
    };
  default:
    return state;
  }
}
